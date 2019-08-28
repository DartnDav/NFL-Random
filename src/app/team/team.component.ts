import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';
import { TeamService } from '../team.service';
import { Teams } from '../models/teams';
import { Team } from '../models/team';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Team;

  constructor(
    private teamsService: TeamsService,
    private teamService: TeamService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    this.teamService.getTeam().subscribe(
      (response: any) => {
        this.team = response;
        console.log(response);
      }
    );
  }
}
