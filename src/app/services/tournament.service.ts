import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tournament} from "../shared/Tournament";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private httpClient: HttpClient) {
  }

  getTournaments() {
    return this.httpClient.get('https://localhost:5001/api/tournament/')
      .subscribe(response => JSON.stringify(response));
  }

  postTournament(tournament: Tournament) {
    return this.httpClient.post('https://localhost:5001/api/tournament/', tournament)
      .subscribe(response => {
        console.log(response);
      })
  }

}
