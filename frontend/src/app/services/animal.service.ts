import {Injectable} from '@angular/core';
import {Animal} from '../models/animal';
import {ANIMALS} from "../mock-animals";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {ANIMALS_URL} from "../shared/constants/urls";
import {ANIMALS_SEARCH_URL} from "../shared/constants/urls";
import {ANIMAL_BY_ID_URL} from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {
  }

  getAllAnimals(): Observable<Animal[]> {

    return this.http.get<Animal[]>(ANIMALS_URL);
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return new Observable<T>();
    };
  }

}
