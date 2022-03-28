import {Routes} from "@angular/router";
import {PostTournamentComponent} from "./app/tournament/post/postTournament.component";
import {PlayerComponent} from "./app/player/player.component";
import {GetTournamentComponent} from "./app/tournament/get/get-tournament.component";


export const appRoutes: Routes = [
  {path: 'tournaments/get', component: GetTournamentComponent},
  {path: 'tournaments/post', component: PostTournamentComponent},
  {path: 'players', component: PlayerComponent},

  {path: '', redirectTo: '/tournaments/get', pathMatch: 'full'},
  {path: 'tournaments', redirectTo: '/tournaments/get', pathMatch: 'full'},
];
