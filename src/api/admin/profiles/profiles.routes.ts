/* eslint-disable */
import { Routes } from '@angular/router';

export const PROFILES_ROUTES: Routes = [{
  path: '',
  title: 'Profiles',
  loadComponent: () => import('./profiles-list/profiles-list.component').then(m => m.ProfileListComponent)
},
  {
    path: 'new',
    title: 'Create Profile',
    loadComponent: () => import('./profile-form/profile-form.component').then(m => m.ProfileFormComponent)
  }];
