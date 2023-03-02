import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { AuthorService } from '../services/author';

const AuthorServiceHelper = new AuthorService();

const createAuthor = async (req: Request, res : Response) => {
    // const { author, title } = req.body;
    try{

    }catch(e){
        console.log("er : ", e);
    }
}

const getAuthorDetail = async (req: Request, res: Response) => {
    const { bookId } = req.params;
    try{
      
    }catch(e){
        console.log(e);
    }
}

const getAllAuthors = async (req : Request, res : Response) => {
    try{

    }catch(e){
        console.log("er : ", e);
    }
}

const updateAuthor = async (req : Request, res: Response) => {
    try{
    }catch(e){
        console.log("err : ", e);
    }
}

const removeAuthor = async (req : Request, res: Response) => {
    try{
    }catch(e){
        console.log("err : " , e);
    }
}

export default { createAuthor, getAuthorDetail, getAllAuthors, updateAuthor, removeAuthor };