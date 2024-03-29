import { Human } from "./human";
import { BreedAnimal } from "./breed-animal";
import { TypeAnimal } from "./type-animal";

export class Animal {
  _id?: string;
  name!: string;
  type?: TypeAnimal;
  breed?: BreedAnimal;
  ages?: number;
  human?: Human;
}
