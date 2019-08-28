import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';

import { NFLRandomConfig } from './../../config/nflrandom.config';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NFLRandomConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
