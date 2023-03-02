import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IAuthor } from '../interfaces/author';
import { IBook } from '../interfaces/book';

export const ValidateJoi = (schema : ObjectSchema ) => {
    return async (req: Request, res : Response, next : NextFunction)=> {
        try{
            await schema.validateAsync(req.body);
            return next();
        }catch(e){
            console.log("err : ", e);
            return res.status(422).json({ e });
        }
    }
}

export const Schemas = {
    author: {
        create: Joi.object<IAuthor>({
            name: Joi.string().required()
        }),
        update: Joi.object<IAuthor>({
            name: Joi.string().required()
        })
    },

    book: {
        create: Joi.object<IBook>({

            author: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            title: Joi.string().required()

        }),
        
        update: Joi.object<IBook>({
            author: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            title: Joi.string().required()
        })
    }
};