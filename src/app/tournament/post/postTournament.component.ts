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
  centers: TennisCenter[] = [];

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
    dateRequest: Date,
    tennisCenter: TennisCenter
  });

  ngOnInit(): void {
    this.listTennisCenters();
  }

  updateDateEnd(): void {
    this.tournament.dateRequest = new Date();
    this.tournament.dateRequest!.setDate(this.form.value.dateStart.getDate() - 14);
    this.form.patchValue({
      dateRequest: this.tournament.dateRequest,
    });

    if (!this.pinned)
      return;

    let dateEnd = new Date();
    dateEnd.setDate(this.form.value.dateStart.getDate() + 4);
    this.form.patchValue({
      dateEnd: dateEnd,
    });
  }

  categoryDigitValueChanged(event: any): void {
    this.form.patchValue({
      categoryDigit: event,
    });
    this.updateCategory();
  }


  updateCategory(): void {
    this.tournament.category = this.form.value.categoryDigit + " " + this.form.value.categoryLetter;
  }

  categoryLetterClicked(): void {
    this.categoryLetters = this.getCategoryLetters(this.form.value.categoryDigit);
    this.updateCategory();
  }

  ageValueChanged(event: any): void {
    this.form.patchValue({
      age: event,
    });
  }

  tennisCenterValueChanged(event: any): void {
    this.form.patchValue({
      tennisCenter: event,
    });
  }

  categoryLetterValueChanged(event: any): void {
    this.form.patchValue({
      categoryLetter: event,
    })
  }

  updatePinStartEndDate(): void {
    this.pinned = !this.pinned;
    this.updateDateEnd();
  }

  listTennisCenters(): void {
    this.tennisCenterService.getTennisCenters().subscribe(response => {
        this.tennisCenters = response;
      }
    );
  }

  confirm(): void {
    this.tournamentService.postTournament(this.tournament).subscribe(x => console.log(x));
  }
}
