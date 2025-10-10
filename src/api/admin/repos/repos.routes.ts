/* eslint-disable */
import { Routes } from '@angular/router';

export const REPOS_ROUTES: Routes = [{ path: '', redirectTo: 'new', pathMatch: 'full' },
  {
    path: 'new',
    title: 'Create Repo',
    loadComponent: () => import('./repo-form/repo-form.component').then(m => m.RepoFormComponent)
  },
  {
    path: ':org',
    title: 'Edit Repo',
    loadComponent: () => import('./repo-form/repo-form.component').then(m => m.RepoFormComponent)
  }];
