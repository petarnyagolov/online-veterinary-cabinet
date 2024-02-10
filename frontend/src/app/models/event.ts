import {Animal} from "./animal";

export interface Event {
  _id: string
  animal: Animal
  dateTime: Date
  comment: string
  diagnose: string
  treatment: string
}
