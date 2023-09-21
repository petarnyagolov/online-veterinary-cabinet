import {Human} from "./human";

export interface Animal {
  id: string;
  name: string;
  type: string;
  breed: string;
  ages: number;
  owner: Human;
}
