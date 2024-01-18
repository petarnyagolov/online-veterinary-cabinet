import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TypeAnimal } from "../models/type-animal";
import { Injectable } from "@angular/core";
import { TYPES_CREATE, TYPES } from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private http: HttpClient) {
  }

  getAllTypes(): Observable<TypeAnimal[]> {
    return this.http.get<TypeAnimal[]>(TYPES)
  }

  saveType(typeAnimal: TypeAnimal): Observable<TypeAnimal> {
    return this.http.post<TypeAnimal>(TYPES_CREATE, typeAnimal);
  }
}
