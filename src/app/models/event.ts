import {Animal} from "./animal";
import {Human} from "./human";


export interface Event{
  id: number
  animal: Animal
  dateTime: Date
  description: string
}
