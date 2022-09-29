import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchLeagueComponent } from './components/search-league/search-league.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { ListeEquipesComponent } from './components/liste-equipes/liste-equipes.component';
import { ListeJoueursComponent } from './components/liste-joueurs/liste-joueurs.component';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesService } from './services/leagues.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '',component: SearchLeagueComponent },
  { path: 'equipes/:id', component: ListeEquipesComponent},
  { path: 'joueurs/:id', component: ListeJoueursComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SearchLeagueComponent,
    ListeEquipesComponent,
    ListeJoueursComponent,
    BorderCardDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [LeaguesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
