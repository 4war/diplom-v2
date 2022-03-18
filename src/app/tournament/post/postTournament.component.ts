import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ages, Category, categoryMap} from "../../defaults";
import Enumerable from "linq";
import from = Enumerable.from;
import {Tournament} from "../../shared/Tournament";
import {TournamentService} from "../../services/tournament.service";

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

  constructor(private formBuilder: FormBuilder, private tournamentService: TournamentService) {
  }

  form = this.formBuilder.group({
    name: [''],
    categoryDigit: [''],
    categoryLetter: [''],
    age: [''],
    netRange: 32,
    dateStart: Date,
    dateEnd: Date,
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

  categoryLetterValueChanged(event: any): void {
    this.form.patchValue({
      categoryLetter: event,
    })
  }

  updatePinStartEndDate(): void {
    this.pinned = !this.pinned;
    this.updatePinStartEndDate();
  }


  confirm(): void {
    console.log(JSON.stringify(this.form.value));
    //todo: call controller

    // let tournament = new Tournament();
    // tournament.age = 'TestFromAngular';
    // tournament.categoryDigit = 'TestFromAngular';
    // tournament.categoryDigit = 'TestFromAngular';
    // tournament.name = 'TestFromAngular';
    // tournament.netRange = 64;
    // tournament.dateStart = new Date();
    // tournament.dateEnd = new Date();
    this.tournamentService.postTournament(this.tournament);

    //todo: replace with form data
  }
}
