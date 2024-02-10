import { Human } from "./human";
import { BreedAnimal } from "./breed-animal";
import {TypeAnimal} from "./type-animal";

export interface AnimalData {
  name: string;
  type: TypeAnimal;
  breed: BreedAnimal;
  birthDate: Date;
  ages: number;
  human?: Human | null;
  comment?: string;
}
