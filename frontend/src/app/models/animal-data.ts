import { Human } from "./human";
import { BreedAnimal } from "./breed-animal";
import {TypeAnimal} from "./type-animal";

export interface AnimalData {
  id: string;
  name: string;
  type: TypeAnimal;
  breed: BreedAnimal;
  ages: number;
  human?: Human | null;
}
