import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ages, Category, categoryMap} from "../../defaults";
import Enumerable from "linq";
import from = Enumerable.from;
import {Tournament} from "../../shared/Tournament";
import {TournamentService} from "../../services/tournament.service";
import {TennisCenterService} from "../../services/tennis-center.service";
import {TennisCenter} from "../../shared/TennisCenter";

@Component({
  selector: 'app-tournament',
  templateUrl: './postTournament.component.html',
  styleUrls: ['./postTournament.component.css']
})

export class PostTournamentComponent implements OnInit {

  tournament = new Tournament();

  getCategoryDigits(): string[] {
    return from(categoryMap.keys()).toArray();
  }

  getCategoryLetters(digit: string): string[] {
    if (digit == null || digit.length == 0)
      return [];

    if (!categoryMap.has(digit))
      return [];

    return categoryMap.get(digit)!;
  }

  categoryLetters: string[] = [];
  ages = ages;
  pinned = false;
  selected = '';

  tennisCenters: TennisCenter[] = [];

  constructor(private formBuilder: FormBuilder,
              private tournamentService: TournamentService,
              private tennisCenterService: TennisCenterService) {
  }

  form = this.formBuilder.group({
    name: [''],
    categoryDigit: [''],
    categoryLetter: [''],
    age: [''],
    netRange: 32,
    dateStart: Date,
    dateEnd: Date,
    tennisCenter: TennisCenter
  });

  ngOnInit(): void {
  }

  updateDateEnd(): void {
    if (!this.pinned)
      return;

    let finishTime = new Date();
    finishTime.setDate(this.form.value.dateStart.getDate() + 5);
    this.form.patchValue({
      dateEnd: finishTime,
    });
  }

  categoryDigitValueChanged(event: any): void {
    this.form.patchValue({
      categoryDigit: event,
    })
  }

  categoryLetterClicked(): void {
    this.categoryLetters = this.getCategoryLetters(this.form.value.categoryDigit);
  }

  ageValueChanged(event: any): void {
    this.form.patchValue({
      age: event,
    })
  }

  tennisCenterValueChanged(event: any): void{
    this.form.patchValue({
      tennisCenter: event,
    })
  }

  categoryLetterValueChanged(event: any): void {
    this.form.patchValue({
      categoryLetter: event,
    })
  }

  updatePinStartEndDate(): void {
    this.pinned = !this.pinned;
    this.updatePinStartEndDate();
  }

  listTennisCenters(): void {
    this.tennisCenterService.getTennisCenters().subscribe(response =>
      this.tennisCenters = response
    );
  }

  confirm(): void {
    this.tournamentService.postTournament(this.tournament);
  }
}
