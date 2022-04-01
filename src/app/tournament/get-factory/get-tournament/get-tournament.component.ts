import { Component, OnInit } from '@angular/core';
import {GeneralService} from "../../../services/general.service";
import {Tournament} from "../../../shared/Tournament";
import {SingleEliminationTreeComponent} from "ng-tournament-tree/lib/single-elimination-tree/single-elimination-tree.component";
import {NgttRound, NgttTournament} from "ng-tournament-tree";


@Component({
  selector: 'app-get-single-tournament',
  templateUrl: './get-tournament.component.html',
  styleUrls: ['./get-tournament.component.scss']
})
export class GetTournamentComponent implements OnInit {
  tournament: Tournament;
  tournamentViewModel: NgttTournament;

  constructor(private general: GeneralService) {
    this.tournament = general.currentTournament;
    this.tournamentViewModel = general.singleTournamentViewModel;
  }

  ngOnInit(): void {
    this.tournamentViewModel.rounds.push(new SingleRound());
  }

}

class SingleRound implements NgttRound{
  matches: any[] = ['asd'];
  type: "Winnerbracket" | "Loserbracket" | "Final" = "Winnerbracket";
}


