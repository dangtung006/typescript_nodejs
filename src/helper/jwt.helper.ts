import { IUser } from "../interfaces/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

export const generateToken = (user : IUser)=> {
    return jwt.sign(
        { email : user.email },
        config.jwtSecret, 
        { expiresIn: 5 * 60 * 60 }
    )
}