/* eslint-disable */
import { Routes } from '@angular/router';

export const REPOS_ROUTES: Routes = [{
  path: '',
  title: 'Repos',
  loadComponent: () => import('./repos-list/repos-list.component').then(m => m.RepoListComponent)
},
  {
    path: 'new',
    title: 'Create Repo',
    loadComponent: () => import('./repo-form/repo-form.component').then(m => m.RepoFormComponent)
  }];
