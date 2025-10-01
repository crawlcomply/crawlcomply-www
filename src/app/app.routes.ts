import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq').then(m => m.Faq)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth-register-or-login/auth-register-or-login').then(m => m.AuthRegisterOrLogin)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile').then(m => m.Profile)
  },
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page').then(m => m.LandingPage)
  }
];
