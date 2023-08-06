import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalsComponent } from './animals/animals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatLineModule} from "@angular/material/core";
import { MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import { HeaderComponent } from './header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalSearchComponent } from './animal-search/animal-search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HumansComponent } from './humans/humans.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {CalendarModule} from "angular-calendar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {FullCalendarModule} from '@fullcalendar/angular';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {EventComponent} from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AnimalDetailComponent,
    AnimalSearchComponent,
    CalendarComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatLineModule,
    MatChipsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    NgOptimizedImage,
    MatListModule,
    MatDatepickerModule,
    CalendarModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    AnimalsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
