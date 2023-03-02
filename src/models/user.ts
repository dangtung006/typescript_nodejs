import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from "bcrypt";
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

UserSchema.pre<IUser>("save", async function(next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

UserSchema.methods.comparePassword = async function(
    password: string
): Promise<Boolean> {
    return await bcrypt.compare(password, this.password);
};

export default mongoose.model<IUserModel>('User', UserSchema);