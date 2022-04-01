import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../shared/Match";

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.css']
})
export class SingleMatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() match!: Match;
}
