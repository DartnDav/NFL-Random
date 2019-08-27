import { Injectable } from '@angular/core';

import { NFLRandomConfig } from './../../config/nflrandom.config';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private NFLRandomConfig: NFLRandomConfig) { }
  getTeams(): string {
    return this.NFLRandomConfig.key;
  }
}
