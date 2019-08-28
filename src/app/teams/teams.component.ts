import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';
import { TeamService } from '../team.service';
import { Teams } from '../models/teams';
import { Team } from '../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {

  teams: Teams;

  constructor(
    private teamsService: TeamsService,
    private teamService: TeamService,
    private router: ActivatedRoute
  ) { }

  // ngOnInit() {
  //   this.teamsService.getTeams().subscribe(
  //     (response: any) => {
  //       console.log(response);

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getTeams().subscribe(
      (response: any) => {
        this.teams = response;
        console.log(response);
      }
    );
  }
}
