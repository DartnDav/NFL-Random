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
  teamid: string;

  constructor(
    private teamsService: TeamsService,
    private teamService: TeamService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    this.teamService.getTeam(this.teamid).subscribe(
      (response: any) => {
        this.team = response;
        console.log(response);
      }
    );
  }
}
// [0].TeamID
      //   getTeamID() {
      //     for (this.teamid in this.team) {
      //       if (this.teamid = this.team.TeamID) {
      //         return this.team;

      //         console.log(this.team[0].TeamID);
      //       };
      //     }
      //   };
      // }
  // getTeam(): void {
  //   this.teamService.getTeam(this.teamid).subscribe(
  //     (response: any) => {
  //       this.team = response;
  //       console.log(response[0].teamid);
  //     }
  //   )
  // (response: any) => {
  // this.team = response;
  // console.log(response[0].teamid);  
  // this.team = return;
