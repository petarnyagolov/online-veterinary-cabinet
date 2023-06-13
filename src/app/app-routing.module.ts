import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalsComponent} from "./animals/animals.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {AnimalDetailComponent} from "./animal-detail/animal-detail.component";
import {AboutComponent} from "./about/about.component";
import {HumansComponent} from "./humans/humans.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";
import {EventComponent} from "./event/event.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'events', component: EventComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: AnimalDetailComponent },
  { path: 'animals', component: AnimalsComponent} ,
  { path: 'humans', component: HumansComponent} ,
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
