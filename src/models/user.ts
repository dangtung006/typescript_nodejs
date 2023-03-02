import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        email: { type: String, unique: true, required: true, lowercase: true, trim: true },
        password: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IUserModel>('User', UserSchema);