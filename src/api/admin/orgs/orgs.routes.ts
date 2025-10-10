/* eslint-disable */
import { Routes } from '@angular/router';

export const ORGS_ROUTES: Routes = [{ path: '', redirectTo: 'new', pathMatch: 'full' },
  {
    path: 'new',
    title: 'Create Org',
    loadComponent: () => import('./org-form/org-form.component').then(m => m.OrgFormComponent)
  },
  {
    path: ':name',
    title: 'Edit Org',
    loadComponent: () => import('./org-form/org-form.component').then(m => m.OrgFormComponent)
  }];
