import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TennisCenter} from "../shared/TennisCenter";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {TournamentFactory} from "../shared/TournamentFactory";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  currentFactory: TournamentFactory = new TournamentFactory();

  constructor(private httpClient: HttpClient, public  router: Router) {
  }
}
