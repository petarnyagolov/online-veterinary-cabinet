import {Injectable} from '@angular/core';
import {Animal} from '../models/animal';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import { ANIMALS, ANIMALS_URL_CREATE } from "../shared/constants/urls";
import {ANIMALS_SEARCH_URL} from "../shared/constants/urls";
import {ANIMAL_BY_ID_URL} from "../shared/constants/urls";
import { AnimalData } from "../models/animal-data";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {
  }
getAllAnimals(page: number, size: number): Observable<Animal[]> {
    return this.http.get<Animal[]>(ANIMALS + '?page=' + page + '&size=' + size);
}

  getAllAnimalsWithSearch(search: string): Observable<Animal[]> {

    return this.http.get<Animal[]>(ANIMALS_SEARCH_URL + search);
  }

  getAnimalById(animalId: string): Observable<Animal> {

    return this.http.get<Animal>(ANIMAL_BY_ID_URL + animalId);
  }

  private log(message: string) {
    console.log(`AnimalService: ${message}`);
  }

  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return new Observable<T>();
    };
  }

  saveAnimal(animalDialogData: Animal): Observable<Animal> {
    return this.http.post<Animal>(ANIMALS_URL_CREATE, animalDialogData);
  }
}
