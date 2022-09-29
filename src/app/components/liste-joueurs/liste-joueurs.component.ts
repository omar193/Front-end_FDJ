import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueursService } from '../../services/joueurs.service';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
})
export class ListeJoueursComponent implements OnInit {

  players:any;
  errorMessage: any;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private playerService: JoueursService) { }

  ngOnInit(): void { 
    const playerId= this.route.snapshot.paramMap.get('id');
    if(playerId){
      this.playerService.getPlayersByTeamId(playerId)
      .subscribe((playerList: any) => {
        this.players=playerList,
        (error: any) => {this.errorMessage = <any>error}
      });
    }

  }

}
