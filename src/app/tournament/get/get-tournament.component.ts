import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../../services/tournament.service";
import {Gender, Tournament} from "../../shared/Tournament";
import {ages, Category} from "../../defaults";
import Enumerable from "linq";
import from = Enumerable.from;

@Component({
  selector: 'app-get-tournament',
  templateUrl: './get-tournament.component.html',
  styleUrls: ['./get-tournament.component.css', '../../../styles.css']
})
export class GetTournamentComponent implements OnInit {
  singleTournament?: Tournament;
  tournaments: Tournament[] = [];
  response: any;

  displayedColumns: string[] = ['Id', 'Name', 'Category', 'Age', 'Gender'];
  clickedRows = new Set<Tournament>();

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void{
    this.tournamentService.getTournaments().subscribe(response => {
      this.tournaments = response;
    });
  }

  getSingle(id: number): void{
    this.tournamentService.getSingleTournament(id).subscribe(response => {
      if (response == null){
        this.singleTournament = new Tournament();
        return;
      }

      this.singleTournament = response;
    });
  }

  getAgeViewValue(age: number) : string{
    let first = from(ages).firstOrDefault(x => x.max == age);
    if (first == null)
      return '';

    return first.viewValue;
  }

  getGender(gender: number) : string{
    return gender == 0 ? 'М' : 'Ж';
  }
}
