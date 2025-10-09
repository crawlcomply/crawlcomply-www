/* eslint-disable */
import { Routes } from '@angular/router';

export const ORGS_ROUTES: Routes = [{
  path: '',
  title: 'Orgs',
  loadComponent: () => import('./orgs-list/orgs-list.component').then(m => m.OrgListComponent)
},
  {
    path: 'new',
    title: 'Create Org',
    loadComponent: () => import('./org-form/org-form.component').then(m => m.OrgFormComponent)
  }];
