import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq').then(m => m.Faq)
  },
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page').then(m => m.LandingPage)
  }
];
