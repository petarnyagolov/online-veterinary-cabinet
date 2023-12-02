import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BreedAnimal } from "../models/breed-animal";
import { TypeAnimal } from "../models/type-animal";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  constructor(private http: HttpClient) {
  }

  getAllTypesByTypeAnimal(): Observable<BreedAnimal[]> {
    return new Observable(observer => {
      let typeAnimal:TypeAnimal = { 'id':'id','type':'CAT' }
      let breedAnimal: BreedAnimal = { 'id': 'id', 'type':typeAnimal, 'breed': 'No breed' }
      observer.next([breedAnimal])
      observer.complete();
    })
  }
}
