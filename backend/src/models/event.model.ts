import { Schema, Types } from "mongoose";
import { TypeEvent } from "./type-event";
import { Animal } from "../../models/animal";

export interface Event {
    _id: Types.ObjectId;
    date: Date;
    type: Types.ObjectId;
    animal: Types.ObjectId;
    description:String;
}

export const EventSchema = new Schema<Event>(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        breed: {type: String },
        ages: {type: Number, required: true}
    }, {
        toJSON: {
            virtuals: true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)
export const AnimalModel = model<Animal>('animals', AnimalSchema);