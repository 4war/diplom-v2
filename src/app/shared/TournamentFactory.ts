import {TennisCenter} from "./TennisCenter";
import {Gender} from "./Tournament";

export class TournamentFactory{
  name: string ='';
  category: string = '';
  ages: number[] = [];
  netRange = 32;

  hasQualification = true;
  numberOfQualificationWinners = 4;

  dateStart: Date = new Date();
  dateEnd: Date = new Date();
  dateRequest?: Date;

  TennisCenter!: TennisCenter;
  genders: number[] = [0,1];
}
