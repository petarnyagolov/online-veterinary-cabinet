import {Human} from "./human";

export interface Animal {
  id: number;
  name: string;
  type: string;
  breed: string;
  ages: number;
  owner: Human;
}
