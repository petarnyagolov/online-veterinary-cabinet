import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalsComponent} from "./animals/animals.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {AnimalDetailComponent} from "./animal-detail/animal-detail.component";
import {AboutComponent} from "./about/about.component";
import {HumansComponent} from "./humans/humans.component";
import {LoginComponent} from "./login/login.component";
import {EventComponent} from "./event/event.component";
import { AuthGuard } from "./auth.guard";
import { AnimalCreateComponent } from "./animal-create/animal-create.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'events', component: EventComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'animals/:animalId', component: AnimalDetailComponent },
  { path: 'animals', component: AnimalsComponent,canActivate: [() => inject(AuthGuard).canActivate()]} ,
  { path: 'animals/create', component: AnimalCreateComponent,canActivate: [() => inject(AuthGuard).canActivate()]} ,
  { path: 'humans', component: HumansComponent} ,
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
