import {Event} from '../models/event';
import { ObjectId } from "mongodb";
import { Types } from "mongoose";

export const EVENTS: Event[] = [

{
   _id: new Types.ObjectId(),
  animal: new Types.ObjectId(),
  dateTime: new Date(),
  comment: 'Example Comment',
  diagnose: 'Example Diagnose',
  treatment: 'Example Treatment',
}

];
