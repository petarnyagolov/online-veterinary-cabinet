import {Animal} from "./animal";

export interface Event{
  id: number
  animal: Animal
  dateTime: Date
  description: string
}
