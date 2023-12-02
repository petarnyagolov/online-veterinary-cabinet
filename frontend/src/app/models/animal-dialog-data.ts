import { Human } from "./human";
import { BreedAnimal } from "./breed-animal";

export interface AnimalDialogData{
  id: string;
  name: string;
  type: string;
  breed: BreedAnimal;
  ages: number;
  owner?: Human;
}
