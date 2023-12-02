import { Expression, model, Schema, Types } from "mongoose";
import { AnimalTypeModel, TypeAnimalSchema } from "./animal-type.model";
import { BreedModel } from "./breed-animal";

export interface Animal {
    _id: Types.ObjectId;
    name: string;
    type: Types.ObjectId;
    breed: Types.ObjectId;
    birthDate: Date;
    description: string;
}


export const AnimalSchema = new Schema<Animal>(
    {
        name: { type: String, required: true },
        type: { type: Types.ObjectId, ref: TypeAnimalModel, required: true },
        breed: { type: Types.ObjectId, ref: BreedModel, required: true },
        birthDate: { type: Date, required: true },
        description: { type: String }

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