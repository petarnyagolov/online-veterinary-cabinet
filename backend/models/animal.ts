import {Human} from "./human";
import { Types } from "mongoose";

export interface Animal {
  name: string;
  type: string;
  breed: string;
  ages: number;
  owner: Human;
}
