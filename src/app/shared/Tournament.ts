import {TennisCenter} from "./TennisCenter";

export class Tournament{

  id = 0;
  name: string = '';
  categoryDigit: string = '';
  categoryLetter: string = '';
  age: number = 0;
  netRange = 32;
  gender: Gender = Gender.Male;
  tennisCenter!: TennisCenter;

  centers: TennisCenter[] = [];

  get dateStart(): Date {
    return this._dateStart;
  }

  set dateStart(value: Date) {
    this.dateRequest.setDate(this.dateStart.getDate() - 14)
    this._dateStart = value;
  }

  private _dateStart: Date = new Date();
  dateEnd:  Date = new Date();
  dateRequest:  Date = new Date();

  get genderViewValue(): string {
    return this.gender.toString();
  }

  get category(): string {
    return this.categoryDigit + " " + this.categoryLetter;
  }

}

export enum Gender{
  Male = 'М',
  Female = 'Ж'
}
