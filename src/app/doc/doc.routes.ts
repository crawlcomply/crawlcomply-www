import { Routes } from '@angular/router';

import { LearnMoreComponent } from "../learn-more/learn-more.component";
import { TeamComponent } from "../team/team.component";


export const docRoutes: Routes = [
  {path: 'more', component: LearnMoreComponent},
  {path: 'team', component: TeamComponent}
];
