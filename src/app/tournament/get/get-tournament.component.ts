import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../../services/tournament.service";
import {Gender, Tournament} from "../../shared/Tournament";
import {ages, Category} from "../../defaults";
import Enumerable from "linq";
import from = Enumerable.from;
import {TournamentFactory} from "../../shared/TournamentFactory";

@Component({
  selector: 'app-get-tournament',
  templateUrl: './get-tournament.component.html',
  styleUrls: ['./get-tournament.component.css', '../../../styles.css']
})
export class GetTournamentComponent implements OnInit {
  factories: TournamentFactory[] = [];
  response: any;

  displayedColumns: string[] = ['Name', 'City', 'Date', 'Category', 'Ages'];

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void{
    this.tournamentService.getTournamentFactories().subscribe(response => {
      this.factories = response;
      console.log(this.factories);
    });
  }

  open(name: string): void{

  }

  getAgeViewValue(ageArray: number[]) : string{
    return from(ageArray).select(a => from(ages).first(x => x.max == a).viewValue).toArray().join('; ');
  }

  getGender(gender: number) : string{
    return gender == 0 ? 'М' : 'Ж';
  }
}
