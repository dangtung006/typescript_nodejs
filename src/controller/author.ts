import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { AuthorService } from '../services/author';

const AuthorServiceHelper = new AuthorService();

const createAuthor = async (req: Request, res : Response) => {
    const { name } = req.body;
    try{
        const author = await AuthorServiceHelper.create({ name });
        return res.status(201).json({ author });
    }catch(e){
        return res.status(500).json({ e });
    }
}

const getAuthorDetail = async (req: Request, res: Response) => {
    const { authorId } = req.params;
    try{
        const author = await AuthorServiceHelper.getById(authorId);

        if(!author)
            throw new Error("Author not found");

        return res.status(201).json({ author });
    }catch(e){
        console.log(e);
        return res.status(500).json({ e });
    }
}

const getAllAuthors = async (req : Request, res : Response) => {
    try{
        const authors = await AuthorServiceHelper.getAll();
        return res.status(201).json(authors);
    }catch(e){
        console.log("er : ", e);
        return res.status(500).json({ e });
    }
}

const updateAuthor = async (req : Request, res: Response) => {
    const { authorId } = req.params;

    try{
        let author = await AuthorServiceHelper.getById(authorId);

        if(!author)
            throw new Error("author not found!!!");
        author.set(req.body);
        author = await author.save();
        return res.status(201).json({ author });
    }catch(e){
        console.log("err : ", e);
        return res.status(500).json({ e });
    }
}

const removeAuthor = async (req : Request, res: Response) => {
    const { authorId } = req.params;
    try{
        const author = await AuthorServiceHelper.removeById(authorId);
        console.log("author : " , author);
        if(!author._id)
            throw new Error("Fail to delete");
        return res.status(201).json({ result : "ok"});

    }catch(e){
        console.log("err : " , e);
        return res.status(500).json({ e });
    }
}

export default { createAuthor, getAuthorDetail, getAllAuthors, updateAuthor, removeAuthor };