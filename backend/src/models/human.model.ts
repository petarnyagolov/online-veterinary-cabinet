import { model, Schema, Types } from "mongoose";

export interface Human {
    _id: Types.ObjectId;
    name: string;
    email: string;
    phone: string;
    animals?: string[];

}

export const HumanSchema = new Schema<Human>(
    {
        name: { type: String, required: true },
        email: { type: String },
        phone: { type: String },
        animals: [{ type: String, ref: 'Animal' }]
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
export const HumanModel = model<Human>('Human', HumanSchema);