import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TypeAnimal } from "../models/type-animal";
import { Human } from "../models/human";

@Injectable({
  providedIn: 'root'
})
export class HumanService {


  constructor(private http: HttpClient) {
  }

  getAllHumans(): Observable<Human[]> {
    return new Observable(observer => {
      let human: Human = { 'id': 'id', 'name': 'Pesho Goshov','phone':'0881234567','email':'gosho@email.com' }
      observer.next([human]);
      observer.complete();
    })
  }
}
