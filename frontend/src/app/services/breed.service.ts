import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BreedAnimal } from "../models/breed-animal";
import { TypeAnimal } from "../models/type-animal";
import { Injectable } from "@angular/core";
import { BREEDS, BREEDS_CREATE, TYPES_CREATE } from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  constructor(private http: HttpClient) {
  }

  getAllBreeds(): Observable<BreedAnimal[]> {
    return this.http.get<BreedAnimal[]>(BREEDS)
  }

  saveBreed(breed: any) {
    return this.http.post<TypeAnimal>(BREEDS_CREATE, breed)
  }
}
