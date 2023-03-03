import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user';
import { generateToken } from "../helper/jwt.helper";

const UserServiceHelper = new UserService();


const signUp = async (req : Request, res : Response): Promise<Response>=>{
    const { email , password } = req.body;
    try{
        let user = UserServiceHelper.getByCondition({ email });

        if(user) 
            throw new Error("User not found");

        user = await UserServiceHelper.create(req.body);
        console.log(user);
        return res.status(200).json({ user });

    }catch(err){
        console.log("There is an err", err);
        return res.status(500).send({ err });
    }
}

const signIn = async (req : Request, res : Response): Promise<Response>=>{
    const { email , password } = req.body;
    try{
        const user = await UserServiceHelper.getByCondition({ email});

        if (!user) 
            throw new Error("user not found");

        const isMatch = await user.comparePassword(password);

        if (!isMatch) 
            throw new Error("Invalid Password");

        return res.status(400).json({ token: generateToken(user) });
        
    }catch(err){
        console.log("There is an err", err);
        return res.status(500).send({ err });
    }
}

export default { signIn, signUp }
