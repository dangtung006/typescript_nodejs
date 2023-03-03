import passport from 'passport';
import passportLocal from 'passport-local';
import {UserService } from "../services/user";

const UserServiceHelper = new UserService();
const LocalStrategy     = passportLocal.Strategy;

export const initPassportLocal  = () =>{
    passport.use(new LocalStrategy(
        {
            usernameField : "username",
            passwordField : "password"
        },
        async (username : string, password: string, done )=>{
            let user  = await UserServiceHelper.getByCondition({ email : username});
            const isValidPassword = await user.comparePassword(password);

            if(!user || !isValidPassword) 
                return done(null, false);

            done(null, user);

        }
    ));

    passport.serializeUser((user : any, done)=>{
        done(null, user._id);
    });

    passport.deserializeUser(async (_id : string, done)=>{
        try{
            const user = await UserServiceHelper.getById(_id);
            done(null, user);
        }catch(error){
            done(error);
        }
    });
}
