import { Routes } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from './auth-service';

export const routes: Routes = [
  {
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq').then(m => m.Faq)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth-register-or-login/auth-register-or-login').then(m => m.AuthRegisterOrLogin),
    canActivate: [() => !inject(AuthService).isLoggedIn()]
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile').then(m => m.Profile),
    canActivate: [() => inject(AuthService).isLoggedIn()]
  },
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page').then(m => m.LandingPage)
  }
];
