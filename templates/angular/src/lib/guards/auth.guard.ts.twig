import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { iif, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../services';

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  return inject(AuthService).$userData.pipe(
    map((userData) => userData.account),
    mergeMap((a) => iif(() => Boolean(a), of(true), of(router.parseUrl('/login'))))
  );
};
