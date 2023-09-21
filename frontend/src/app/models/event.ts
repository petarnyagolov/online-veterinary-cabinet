import {Animal} from "./animal";

export interface Event {
  id: string
  animal: Animal
  dateTime: Date
  comment: string
  diagnose: string
  treatment: string
}
