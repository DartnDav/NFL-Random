import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }
  getTeams(): string {
    return 'Hello World';
  }
}
