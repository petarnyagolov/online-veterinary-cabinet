import { model, Schema, Types } from "mongoose";
import { AnimalBreedModel } from "./animal-breed.model";
import { AnimalType } from "./animal-type.model";
import { AnimalBreed } from "./animal-breed.model";
import { Human } from "./human.model";


export interface Animal {
    _id: Types.ObjectId;
    name: string;
    type?: AnimalType;
    breed?: AnimalBreed;
    birthDate?: Date;
    description?: string;
    human?: Types.ObjectId;
}


export const AnimalSchema = new Schema<Animal>(
    {
        name: { type: String, required: true },
        type: { type: Types.ObjectId, ref: 'AnimalType', required: true },
        breed: { type: Types.ObjectId, ref: 'AnimalBreed' },
        birthDate: { type: Date },
        description: { type: String },
        human: { type: Types.ObjectId, ref: 'Human' }

    }, {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
)
export const AnimalModel = model<Animal>('animals', AnimalSchema);