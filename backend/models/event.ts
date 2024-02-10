import { Types } from "mongoose";

export interface Event {
  _id: Types.ObjectId;
  animal: Types.ObjectId;
  dateTime: Date
  comment: string
  diagnose: string
  treatment: string
}
