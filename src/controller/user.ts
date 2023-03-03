import { Request, Response } from 'express';
import { UserService } from '../services/user';
import { generateToken } from "../helper/jwt.helper";
import { HTTP400Error } from "../helper/error.helper";
import { logger } from "../helper/loggerWinston.helper";

const UserServiceHelper = new UserService();

const signUp = async (req : Request, res : Response): Promise<Response>=>{
    const { email } = req.body;
    try{
        let user = await UserServiceHelper.getByCondition({ email });

        if(user) {
            logger.debug('The User already Exists');
            throw new HTTP400Error("The User already Exists");
        }

        user = await UserServiceHelper.create(req.body);
        return res.status(200).json({ user });

    }catch(err : any){

        return res.status(err.httpCode).send({ 
            result : 0 , 
            message : err.message, 
            status : err.httpCode 
        });

    }
}

const signIn = async (req : Request, res : Response): Promise<Response>=>{
    const { email , password } = req.body;
    try{
        const user = await UserServiceHelper.getByCondition({ email});

        if (!user) 
            throw new HTTP400Error("user not found");

        const isMatch = await user.comparePassword(password);

        if (!isMatch) 
            throw new HTTP400Error("Invalid Password");

        return res.status(400).json({ token: generateToken(user) });
        
    }catch(err : any){
        return res.status(err.httpCode).send({ 
            result : 0 , 
            message : err.message, 
            status : err.httpCode 
        });
    }
}

export default { signIn, signUp }
