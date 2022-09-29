import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../../models/team';
import { TeamsService } from '../../services/teams.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-liste-equipes',
  templateUrl: './liste-equipes.component.html',
})
export class ListeEquipesComponent implements OnInit {

  teams: any
  errorMessage: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService
  ) {}
  
  ngOnInit(): void {
   const teamId = this.route.snapshot.paramMap.get('id');
    if(teamId){
      this.teamsService.getTeamsByLeagueId(teamId)
      .subscribe(teamsList => {
        this.teams=teamsList,
        (error: any) => {this.errorMessage = <any>error}
      });
      
    }
  }


  goToPlayers(team: Team) {
    const link = ['/joueurs',team._id];
    console.log(link)
    this.router.navigate(link);
  }
}
