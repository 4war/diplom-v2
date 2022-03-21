export class Tournament{
  id = 0;
  name: string = '';
  categoryDigit: string = '';
  categoryLetter: string = '';
  age: number = 0;
  netRange = 32;
  dateStart: Date = new Date();
  dateEnd:  Date = new Date();
  gender: Gender = Gender.Male;

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
