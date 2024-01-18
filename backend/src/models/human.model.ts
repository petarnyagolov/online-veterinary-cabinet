import { model, Schema } from "mongoose";

export interface Human{
    _id: string;
    name: string;
    email: string;
    phone: string;
    animals?: string[];



}
export const HumanSchema = new Schema<Human>(
    {
        _id: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true},
        animals: [{type: String, ref: 'Animal'}]
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
export const HumanModel = model<Human>('Human', HumanSchema);