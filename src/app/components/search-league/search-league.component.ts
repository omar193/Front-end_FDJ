import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { League } from '../../models/league';
import { LeaguesService } from '../../services/leagues.service';

@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
})
export class SearchLeagueComponent implements OnInit {

  searchTerms = new Subject<string>();
  leagues$: Observable<League[]> | undefined;

  constructor(
    private router: Router,
    private leagueService: LeaguesService
    ) { }

  ngOnInit(): void {
    this.leagues$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.leagueService.searchLeaguesList(term))
    );   
  }

  search(term: string) {
    this.searchTerms.next(term);
    
  }

  goToDetail(league: League) {
    const link = ['/equipes', league._id];
    console.log(link)
    this.router.navigate(link);
  }


}
