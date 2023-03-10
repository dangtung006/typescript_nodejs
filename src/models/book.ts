import mongoose, { Document, Schema } from 'mongoose';
import { IBook } from '../interfaces/book';


export interface IBookModel extends IBook, Document {}

const BookSchema: Schema = new Schema(
    {
        title: {  type: String, required: true },
        author :  { type : String}
        // author: { type: Schema.Types.ObjectId, required: true,  ref: 'Author' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IBookModel>('Book', BookSchema);