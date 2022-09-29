import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { League } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  constructor(private http: HttpClient) {}

  searchLeaguesList(term: string): Observable<League[]> {
    if(term.length <= 1) {
      return of([]);
    } 

    return this.http.get<League[]>(`http://localhost:8000/getListLeagues/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
