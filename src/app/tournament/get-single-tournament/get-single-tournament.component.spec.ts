import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleTournamentComponent } from './get-single-tournament.component';

describe('GetSingleTournamentComponent', () => {
  let component: GetSingleTournamentComponent;
  let fixture: ComponentFixture<GetSingleTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
