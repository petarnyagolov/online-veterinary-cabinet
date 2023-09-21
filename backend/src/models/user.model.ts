import {model, Schema} from "mongoose";

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    isAdmin: boolean;

}

export const UserSchema = new Schema<User>({
    id: {type: String, default: (Math.random() + 1).toString(36).substring(7)},
    email: {type: String, required: true},
    password: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    isAdmin: {type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

export const UserModel = model<User>('users', UserSchema);