import {Routes} from "@angular/router";
import {PostTournamentComponent} from "./app/tournament/post/postTournament.component";
import {PlayerComponent} from "./app/player/player.component";
import {GetTournamentComponent} from "./app/tournament/get/get-tournament.component";
import {GetFactoryComponent} from "./app/tournament/get-factory/get-factory.component";
import {GetSingleTournamentComponent} from "./app/tournament/get-single-tournament/get-single-tournament.component";
import {OverviewComponent} from "./app/tournament/get-single-tournament/overview/overview.component";


export const appRoutes: Routes = [
  {path: 'tournaments/get', component: GetTournamentComponent},
  {path: 'tournaments/post', component: PostTournamentComponent},
  {path: 'tournaments/factory', component: GetFactoryComponent},
  {path: 'tournaments/single', component: GetSingleTournamentComponent},
  {path: 'tournaments/single/overview', component: OverviewComponent, outlet: 'tournament'},

  {path: 'players', component: PlayerComponent},

  {path: '', redirectTo: '/tournaments/get', pathMatch: 'full'},
  {path: 'tournaments', redirectTo: '/tournaments/get', pathMatch: 'full'},
  {path: 'tournaments/single', redirectTo: '/tournaments/single/overview', pathMatch: 'full'},
];
