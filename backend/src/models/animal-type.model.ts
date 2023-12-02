import { model, Schema, Types } from "mongoose";

export interface AnimalType {
    _id: Types.ObjectId;
    type: string;
}

export const TypeAnimalSchema = new Schema<AnimalTypeModel>(
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
export const TypeAnimalModel = model<AnimalTypeModel>('animal_types', TypeAnimalSchema);