import {Routes} from "@angular/router";
import {PostTournamentComponent} from "./app/tournament/post/postTournament.component";
import {PlayerComponent} from "./app/player/player.component";


export const appRoutes: Routes = [
  {path: 'tournaments', component: PostTournamentComponent},
  {path: 'players', component: PlayerComponent},

  {path: '', redirectTo: '/tournaments', pathMatch: 'full'},
];
