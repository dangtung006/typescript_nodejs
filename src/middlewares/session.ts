import { Request, Response, NextFunction } from "express";
import session from "express-session";

const sessionMiddleware = (req: Request, res : Response, next : NextFunction) =>{
    return session({
        secret : "test",
        resave : false,
        saveUninitialized : true
    })(req, res, next)
}

export default sessionMiddleware;