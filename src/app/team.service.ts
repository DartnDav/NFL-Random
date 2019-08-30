import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Teams } from './models/teams';
import { Team } from './models/team';

import { NFLRandomConfig } from './../../config/nflrandom.config';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  private url: string


  constructor(
    private http: HttpClient,
    private NFLRandomConfig: NFLRandomConfig
  ) {

    this.url = `https://api.sportsdata.io/v3/nfl/scores/json/Teams/2019REG?key=${this.NFLRandomConfig.key}`;
  }

  getTeam(TeamID: string): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.url}&team=${TeamID}`);
  }
}
// (`${this.url}/${team}`);
// (`${this.url}/${TeamID}`);