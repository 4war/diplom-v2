import { Component, OnInit } from '@angular/core';
import {TournamentFactory} from "../../shared/TournamentFactory";
import {TournamentService} from "../../services/tournament.service";
import {GeneralService} from "../../services/general.service";
import {ages} from "../../defaults";
import Enumerable from "linq";
import from = Enumerable.from;

@Component({
  selector: 'app-get-factory',
  templateUrl: './get-factory.component.html',
  styleUrls: ['./get-factory.component.css', '../../../styles.css']
})
export class GetFactoryComponent implements OnInit {

  factory: TournamentFactory;

  constructor(private tournamentService: TournamentService, private general: GeneralService) {
    this.factory = general.currentFactory;
  }

  ngOnInit(): void {
  }

  getGender(gender: number): string{
    return gender == 0 ? 'М' : 'Ж';
  }

  getStage(stage: number): string{
    return stage == 0 ? 'Основной тур' : 'Квалификация';
  }

  getAge(age: number): string{
    return from(ages).first(x => x.max == age).viewValue;
  }
}
