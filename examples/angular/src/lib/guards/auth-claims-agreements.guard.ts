import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { iif, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthService } from '../services';

export const AuthClaimsAgreementsGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  return inject(AuthService)
    .hasTeamAndRole(next.data.roles)
    .pipe(mergeMap((a) => iif(() => a, of(true), of(router.parseUrl('/login')))));
};
