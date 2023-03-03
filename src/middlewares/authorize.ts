
import { Request, Response, NextFunction } from "express";

export const isAdministratorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { user }: any = req;
    if(!user) {
        return res.send("Sorry, you arent logged in.")
    }

    if(user.isAdmin) 
        return next();
    return res.send("Sorry, only admin's can perform this.");
}

export const isMember = (req: Request, res: Response, next: NextFunction) => {

}