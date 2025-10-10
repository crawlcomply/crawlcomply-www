/* eslint-disable */
import { Routes } from '@angular/router';

export const PROFILES_ROUTES: Routes = [{ path: '', redirectTo: 'new', pathMatch: 'full' },
  {
    path: 'new',
    title: 'Create Profile',
    loadComponent: () => import('./profile-form/profile-form.component').then(m => m.ProfileFormComponent)
  }];
