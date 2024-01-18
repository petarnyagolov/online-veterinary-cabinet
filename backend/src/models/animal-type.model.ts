import { model, Schema, Types } from "mongoose";

export interface AnimalType {
    _id: Types.ObjectId;
    type: string;
}

export const AnimalTypeSchema = new Schema<AnimalType>(
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
export const AnimalTypeModel = model<AnimalType>('AnimalType', AnimalTypeSchema);