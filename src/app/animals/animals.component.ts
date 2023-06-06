import { Component } from '@angular/core';
import {Animal} from "../models/animal";
import {AnimalService} from "../animal.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {}
  ngOnInit(): void{
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals()
      .subscribe( animals => this.animals=animals)
  }

}
