import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tournament} from "../shared/Tournament";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private httpClient: HttpClient) {
  }

  getTournaments() : Observable<Tournament[]> {
    return this.httpClient.get<Tournament[]>('https://localhost:5001/api/tournament/');
  }

  getSingleTournament(id: number) {
    return this.httpClient.get<Tournament>(`https://localhost:5001/api/tournament/${id}`);
  }

  postTournament(tournament: Tournament) : Observable<any> {
    return this.httpClient.post('https://localhost:5001/api/tournament/', tournament);
  }

}
