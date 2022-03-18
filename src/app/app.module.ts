import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {appRoutes} from "../routes";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostTournamentComponent} from './tournament/post/postTournament.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {PlayerComponent} from './player/player.component';
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_FORMATS, MatNativeDateModule} from "@angular/material/core";
import {MyFormats} from "./MyFormats";
import {ReactiveFormsModule} from "@angular/forms";

import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {TournamentService} from "./services/tournament.service";
import { HttpClientModule} from "@angular/common/http";
import { GetTournamentComponent } from './tournament/get/get-tournament/get-tournament.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    PostTournamentComponent,
    PlayerComponent,
    GetTournamentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers:
    [FormBuilder,
      {provide: MAT_DATE_FORMATS, useValue: MyFormats},
      {provide: LOCALE_ID, useValue: 'ru'},
      TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
