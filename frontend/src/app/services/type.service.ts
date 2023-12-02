import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TypeAnimal } from "../models/type-animal";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private http: HttpClient) {
  }

  getAllTypes(): Observable<TypeAnimal[]> {
    return new Observable(observer => {
      let typeAnimal: TypeAnimal = { 'id': 'id', 'type': 'CAT' }
      observer.next([typeAnimal]);
      observer.complete();
    })
  }
}
