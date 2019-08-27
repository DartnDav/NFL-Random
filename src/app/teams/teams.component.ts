import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.getTeams().subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }
}
