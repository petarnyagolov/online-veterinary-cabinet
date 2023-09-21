import {Human} from "../../models/human";
import {model, Schema} from "mongoose";
import {ObjectId} from "mongodb";

export interface Animal {
    id: string;
    name: string;
    type: string;
    breed: string;
    ages: number;
    // owner: Human = new Human();
}

export const AnimalSchema = new Schema<Animal>(
    {
        id: {type:String, default:(Math.random() + 1).toString(36).substring(7)        },
        name: {type: String, required: true},
        type: {type: String, required: true},
        breed: {type: String, default: "none"},
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