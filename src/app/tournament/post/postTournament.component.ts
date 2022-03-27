import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ages, Category, categoryMap} from "../../defaults";
import Enumerable from "linq";
import from = Enumerable.from;
import {Tournament} from "../../shared/Tournament";
import {TournamentService} from "../../services/tournament.service";
import {TennisCenterService} from "../../services/tennis-center.service";
import {TennisCenter} from "../../shared/TennisCenter";
import {TournamentFactory} from "../../shared/TournamentFactory";
import {GeneralService} from "../../services/general.service";
import {ROUTES} from "@angular/router";
import {appRoutes} from "../../../routes";

@Component({
  selector: 'app-tournament',
  templateUrl: './postTournament.component.html',
  styleUrls: ['./postTournament.component.css']
})

export class PostTournamentComponent implements OnInit {


  secondAgeIsNeeded = false;
  factory = new TournamentFactory();
  centers: TennisCenter[] = [];

  firstAge!: number;
  secondAge?: number;
  categoryLetters: string[] = [];
  ages = ages;
  pinned = false;
  selected = '';
  secondAges = ages;

  tennisCenters: TennisCenter[] = [];

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

  constructor(private formBuilder: FormBuilder,
              private tournamentService: TournamentService,
              private tennisCenterService: TennisCenterService,
              private general: GeneralService) {
  }

  form = this.formBuilder.group({
    name: [''],
    categoryDigit: [''],
    categoryLetter: [''],
    firstAge: [''],
    secondAge: [''],
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
    this.factory.dateRequest = new Date();
    this.factory.dateRequest!.setDate(this.form.value.dateStart.getDate() - 14);
    this.form.patchValue({
      dateRequest: this.factory.dateRequest,
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
    this.factory.category = this.form.value.categoryDigit + " " + this.form.value.categoryLetter;
  }

  categoryLetterClicked(): void {
    this.categoryLetters = this.getCategoryLetters(this.form.value.categoryDigit);
    this.updateCategory();
  }

  firstAgeValueChanged(event: any): void {
    this.form.patchValue({
      firstAge: event,
    });

    this.updateAge();
  }

  secondAgeValueChanged(event: any): void {
    this.form.patchValue({
      secondAge: event,
    });

    this.updateAge();
  }

  updateAge(): void {
    let array: number[] = [];
    array = this.secondAgeIsNeeded
      ? [this.form.value.firstAge, this.form.value.secondAge]
      : [this.form.value.firstAge];

    this.factory.ages = from(array).orderBy(x => x).toArray();
    this.secondAges = from(ages).skipWhile(x => x.max <= this.form.value.firstAge).toArray();
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

  addSecondAge(): void {
    this.secondAgeIsNeeded = true;
    if (this.factory.ages.length == 2)
      this.factory.ages.pop();

    this.updateAge();
  }

  removeSecondAge(): void {
    this.secondAgeIsNeeded = false;
    this.updateAge();
  }

  confirm(): void {
    this.tournamentService.postTournaments(this.factory)
      .subscribe(x => {
        console.log(x);
      });
  }
}
