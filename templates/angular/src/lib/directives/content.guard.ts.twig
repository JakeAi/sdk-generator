import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, take, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../services';

@Directive({
  selector: '[authGuard]',
  exportAs: 'authGuard',
})
export class AuthGuardDirective implements OnInit {
  @Input() guards: { teamId: string; roles: string[] };
  @Output() isLoggedInn = new EventEmitter();
  isLoggedIn: Observable<boolean>;
  hasTeamAndRoles: Observable<boolean>;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.hasTeamAndRoles = this.authService.hasTeamAndRole(this.guards.roles).pipe(catchError(() => EMPTY));
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  public hasTeamAndRole(roles) {
    return of(null).pipe(withLatestFrom(this.authService.hasTeamAndRole(roles).pipe(take(1))));
  }
}

@Directive({
  selector: '[roleGuard]',
  exportAs: 'roleGuard',
})
export class RoleGuardDirective {
  @Input() guards: any[];

  constructor(private authService: AuthService) {}

  public canActivate(roles) {
    return this.authService.hasTeamAndRole(roles);
  }
}

// @Directive({
//   selector: '[roleGuard]'
// })
// export class RoleGuardDirective implements OnInit {
//   @Input() guards: any[];
// }
