import {Component, ViewChild} from '@angular/core';
import {Animal} from "../models/animal";
import {AnimalService} from "../animal.service";
import {MatTable, MatTableModule} from '@angular/material/table';
import { ANIMALS } from "../mock-animals";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
})
export class AnimalsComponent {
  displayedColumns: string[] = [ 'id','type','breed','name'];
  animals: Animal[] = [];
  dataSource = [...ANIMALS]
  @ViewChild(MatTable) table: MatTable<Animal>;
  constructor(private animalService: AnimalService) {
    this.table = {} as MatTable<Animal>;
  }
  ngOnInit(): void{
    this.getAnimals();

  }

  getAnimals(): void {
    this.animalService.getAnimals()
      .subscribe( animals => this.animals=animals)
  }
  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.animals.length);
    this.dataSource.push(this.animals[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
