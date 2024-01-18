import { model, Schema, Types } from "mongoose";
import { TypeEvent, TypeEventSchema } from "./type-event";
import { Animal } from "../../models/animal";

export interface Event {
    _id: Types.ObjectId;
    date: Date;
    type: TypeEvent;
    animal: Animal;
    description:String;
}

export const EventSchema = new Schema<Event>(
    {

        animal: {type: Types.ObjectId, ref: 'Animal', required: true},
        date: {type: Date, required: true},
        type: {type: String, required: true},
        description: {type: String, required: true},
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
export const EventModel = model<Event>('Event', EventSchema);