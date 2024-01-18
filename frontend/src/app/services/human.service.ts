import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TypeAnimal } from "../models/type-animal";
import { Human } from "../models/human";
import { HUMANS, HUMANS_CREATE } from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class HumanService {


  constructor(private http: HttpClient) {
  }

  getAllHumans(): Observable<Human[]> {
    return this.http.get<Human[]>(HUMANS)
  }

  saveHuman(human: Human) {
    return this.http.post<Human>(HUMANS_CREATE, human)
  }
}
