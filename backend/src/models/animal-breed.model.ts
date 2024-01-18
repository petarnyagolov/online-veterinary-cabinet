import { model, Schema, Types } from "mongoose";
import { AnimalType, AnimalTypeModel } from "./animal-type.model";
export interface AnimalBreed {
    _id: Types.ObjectId;
    type: AnimalType;
    breed: string;
}

export const AnimalBreedSchema = new Schema<AnimalBreed>(
    {
        type: { type: Types.ObjectId, ref: 'AnimalType', required: true },
        breed: {type:String,required: true }
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
export const AnimalBreedModel = model<AnimalBreed>('AnimalBreed', AnimalBreedSchema);
