import {Component, OnInit} from '@angular/core';
import {Animal} from "../models/animal";
import {ActivatedRoute, Router} from "@angular/router";
import {AnimalService} from "../services/animal.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  animal!: Animal;


  constructor(activatedRoute: ActivatedRoute, animalService: AnimalService) {
    activatedRoute.params.subscribe((params)=>{
        animalService.getAnimalById(params['animalId']).subscribe((animalDetails) => {
          this.animal = animalDetails;
        })
    })
  }


  ngOnInit(): void {
  }

}
