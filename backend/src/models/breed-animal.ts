import { model, Schema, Types } from "mongoose";
import { AnimalTypeModel } from "./animal-type.model";
export interface BreedAnimal {
    _id: Types.ObjectId;
    type:AnimalTypeModel;
    breed: string;
}
export const BreedSchema = new Schema<BreedAnimal>(
    {
        type: {type: String, required: true},
        breed: {type: String,required: true }
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
export const BreedModel = model<BreedAnimal>('breeds', BreedSchema);