import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';
import { Teams } from '../models/teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {

  teams: Teams;

  constructor(
    private teamsService: TeamsService,
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
