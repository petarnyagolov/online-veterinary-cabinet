import {Component, OnInit} from '@angular/core';
import {Animal} from "../models/animal";
import {AnimalService} from "../animal.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  animals: Animal[] = [];
  title='Online Veterinary Cabinet';
  when = ''

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
    this.when = 'Today'
  }

  getAnimals(): void {
    this.animalService.getAnimals()
      .subscribe( animals => this.animals=animals)
  }
  changeWhen(button: string): void {
    if(button==='tomorrow'){
      this.when='Tomorrow`s meetings'
    }else {
      this.when='Today`s meetings'
    }
  }
}
