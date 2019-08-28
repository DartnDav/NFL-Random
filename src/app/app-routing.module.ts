import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: '/team', pathMatch: 'full' },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
