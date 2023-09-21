import {Human} from "./human";

export class Animal {
  id!: string;
  name!: string;
  type!: string;
  breed!: string;
  ages!: number;
  owner: Human=new Human();
}
