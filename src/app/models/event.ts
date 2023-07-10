import {Animal} from "./animal";

export interface Event {
  id: number
  animal: Animal
  dateTime: Date
  comment: string
  // diagnose: string
  // treatment: string
}
