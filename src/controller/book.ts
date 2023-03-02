import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { BookService } from '../services/book';

const BookServiceHelper = new BookService();

const createBook = async (req: Request, res : Response) => {
    const { author, title } = req.body;
    try{
        const book = await BookServiceHelper.create({
            author, 
            title 
        });

        return res.status(201).json({ book });

    }catch(e){
        console.log("er : ", e);
        return res.status(500).json({ e });
    }
}

const getBookDetail = async (req: Request, res: Response) => {
    const { bookId } = req.params;
    try{
        const book = await BookServiceHelper.getById(bookId);
        return res.status(201).json({ book });
    }catch(e){
        console.log(e);
        return res.status(500).json({ e });
    }
}

const getAllBook = async (req : Request, res : Response) => {
    try{
        const books =  await BookServiceHelper.getAll();
        return res.status(201).json({ books });

    }catch(e){
        console.log("er : ", e);
        return res.status(500).json({ e });
    }
}

const updateBook = async (req : Request, res: Response) => {
    try{
        const { bookId } = req.params;
        let book = await BookServiceHelper.getById(bookId);

        if(!book)
            throw new Error("book not existed");

        book.set(req.body);
        book = await book.save();
        return res.status(201).json({ book });

    }catch(e){
        console.log("err : ", e);
        return res.status(500).json({ e });
    }
}

const removeBook = async (req : Request, res: Response) => {
    try{
        const { bookId } = req.params;
        const result = await BookServiceHelper.removeById(bookId);

        if(!result._id)  {
            throw new Error("delete fail");
        }

        return res.status(201).json({ result : "ok" });

    }catch(e){
        console.log("err : " , e);
        return res.status(500).json({ e });
    }
}

export default { createBook, getBookDetail, getAllBook, updateBook, removeBook };