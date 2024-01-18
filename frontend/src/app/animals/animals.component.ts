import { Component, ViewChild } from '@angular/core';
import { Animal } from "../models/animal";
import { AnimalService } from "../services/animal.service";
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterLink } from "@angular/router";
import { TypeAnimal } from "../models/type-animal";
import { map, Observable } from "rxjs";
import { BreedAnimal } from "../models/breed-animal";
import { Human } from "../models/human";
import { TypeService } from "../services/type.service";
import { BreedService } from "../services/breed.service";
import { HumanService } from "../services/human.service";
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, RouterLink],
})
export class AnimalsComponent {
  page: number = 0;
  size: number = 100;
  displayedColumns: string[] = ['name', 'type', 'breed', 'id'];
  animals: Animal[] = [];
  @ViewChild(MatTable) table: MatTable<Animal>;
  private typeAnimal$: Observable<TypeAnimal[]>;
  private breedAnimal$: Observable<BreedAnimal[]>;
  private human$: Observable<Human[]>;

  constructor(private animalService: AnimalService,
              private typeService: TypeService,
              private breedService: BreedService,
              private humanService: HumanService) {

    this.typeAnimal$ = this.typeService.getAllTypes();
    this.breedAnimal$ = this.breedService.getAllBreeds();
    this.human$ = this.humanService.getAllHumans();
    this.table = {} as MatTable<Animal>;
  }

  ngOnInit(): void {

    this.getAllAnimals();

  }

  getAllAnimals(): void {
    this.animalService.getAllAnimals(this.page, this.size).subscribe({
      next: animals => {
        this.animals = animals;
        console.log('Animals:', animals);
      },
      error: err => {
        console.log(err);
      }

    });
  }
}
