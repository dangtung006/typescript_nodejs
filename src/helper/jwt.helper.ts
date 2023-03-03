import { IUserSignIn } from "../interfaces/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

export const generateToken = (user : IUserSignIn)=> {
    return jwt.sign(
        { email : user.email, _id : user._id },
        config.jwtSecret, 
        { expiresIn: 5 * 60 * 60 }
    )
}