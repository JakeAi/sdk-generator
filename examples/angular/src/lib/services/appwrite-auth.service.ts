import { effect, Inject, Injectable, signal } from '@angular/core';
import { ID, Token, User } from '@appwrite/common';
import { forkJoin, from, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map, mergeMap, scan, tap } from 'rxjs/operators';
import { AuthConfig } from '../config';
import { ForgotPasswordDto, LoginDto, RegisterDto } from '../dto';
import { SENTRY_PROVIDER, SentryCore } from '../tokens';
import { AppwriteAccountService } from './appwrite-account.service';

export class UserData {
  account: User | null = null;
}

@Injectable()
export class AuthService {
  public userData = signal({ account: null } as UserData, {});
  public refreshStream: () => Observable<UserData>;
  private _userData: ReplaySubject<UserData> = new ReplaySubject<UserData>(1);
  public $userData = this._userData.pipe();
  public $accountData = this._userData.pipe(map((userData) => userData.account));

  constructor(
    @Inject(SENTRY_PROVIDER) private sentryProvider: SentryCore,
    @Inject(AuthConfig) private config: AuthConfig,
    private appwriteAccountService: AppwriteAccountService
  ) {
    effect(() => {
      const acc = this.userData().account;
      this.sentryProvider.setUser(acc ? { email: acc.email, id: acc.$id } : null);
    });
    this.refreshStream = () =>
      forkJoin([from(this.appwriteAccountService.get()).pipe(catchError(() => of(null)))]).pipe(
        map(([account /* teams session, locale*/]) => ({ account /* teams, session, locale*/ })),
        tap((d) => this.userData.set(d)),
        tap((d) => this._userData.next(d))
      );

    this.refreshStream().subscribe();
  }

  public createAnonymousSession(): Observable<UserData> {
    return from(this.appwriteAccountService.createAnonymousSession()).pipe(mergeMap(() => this.refreshStream()));
  }

  public register(data: RegisterDto): Observable<User> {
    return from(this.appwriteAccountService.create(ID.unique(), data.email, data.password, data.name));
  }

  public async forgotPassword(data: ForgotPasswordDto): Promise<Token> {
    return await this.appwriteAccountService.createRecovery(data.email, 'https://www.minnich-mfg.com/reset');
  }

  public login(data: LoginDto) {
    return from(this.appwriteAccountService.createEmailPasswordSession(data.email, data.password)).pipe(
      mergeMap(() => this.refreshStream()),
      tap(async (result) => this.config.onLogin())
    );
  }

  public logout(): Observable<UserData> {
    return from(this.appwriteAccountService.deleteSession('current')).pipe(
      catchError((error) => of(error)),
      mergeMap(() => this.refreshStream()),
      tap(async () => this.config.onLogout())
    );
  }

  public isLoggedIn(): Observable<boolean> {
    return this.$userData.pipe(map((userData) => Boolean(userData.account?.$id)));
  }

  public hasTeamAndRole(roles: string[]) {
    if (!roles) return of(true);
    return this.$accountData.pipe(
      map((user) => user?.labels),
      scan((acc, label) => {
        const every = roles.every((role) => label.some((r) => r === role));
        return every === false ? false : acc;
      }, true)
    );
  }
}
