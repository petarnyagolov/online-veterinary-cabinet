import {Component, OnInit} from '@angular/core';
import {Animal} from "../models/animal";
import {AnimalService} from "../services/animal.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  animals: Animal[] = [];
  title = 'Online Veterinary Cabinet';
  when = ''

  constructor(private animalService: AnimalService, activatedRoute: ActivatedRoute) {
    let animalObservable: Observable<Animal[]>;
    activatedRoute.params.subscribe((params) => {
      if (params["search"])
        animalObservable = this.animalService.getAllAnimalsWithSearch(params["search"])
      else
        animalObservable = this.animalService.getAllAnimals()

      animalObservable.subscribe((serverAnimals) => {
        this.animals = serverAnimals
      })
    })

  }

  ngOnInit(): void {
    this.getAnimals();
    this.when = 'Today'
  }

  getAnimals(): void {
    this.animalService.getAllAnimals()
      .subscribe(animals => this.animals = animals)
  }

  changeWhen(button: string): void {
    if (button === 'tomorrow') {
      this.when = 'Tomorrow`s meetings'
    } else {
      this.when = 'Today`s meetings'
    }
  }
}
