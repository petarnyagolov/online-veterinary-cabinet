import {Human} from "./human";
import { BreedAnimal } from "./breed-animal";

export class Animal {
  id!: string;
  name!: string;
  type!: string;
  breed!: BreedAnimal;
  ages!: number;
  owner: Human=new Human();
}
