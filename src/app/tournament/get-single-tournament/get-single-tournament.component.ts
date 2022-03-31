import { Component, OnInit } from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {Tournament} from "../../shared/Tournament";


@Component({
  selector: 'app-get-single-tournament',
  templateUrl: './get-single-tournament.component.html',
  styleUrls: ['./get-single-tournament.component.scss']
})
export class GetSingleTournamentComponent implements OnInit {
  tournament: Tournament;

  constructor(private general: GeneralService) {
    this.tournament = general.currentTournament;
  }

  ngOnInit(): void {
  }

}
