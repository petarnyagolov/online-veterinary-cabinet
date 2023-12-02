import { model, Schema, Types } from "mongoose";

export interface TypeEvent {
    _id: Types.ObjectId;
    type: string;
}

export const TypeEventSchema = new Schema<TypeEvent>(
    {
        type: {type: String, required: true}
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
export const TypeEventModel = model<TypeEvent>('event_types', TypeEventSchema);