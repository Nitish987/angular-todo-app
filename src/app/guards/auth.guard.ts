import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthorizationService).isAuthenticated();
};
