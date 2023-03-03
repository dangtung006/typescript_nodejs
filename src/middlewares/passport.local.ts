import passport from 'passport';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

export const initPassportLocal  = () =>{
    passport.use(new LocalStrategy((username : string, password: string, done )=>{

    }));

    passport.serializeUser((user : any, done)=>{
        done(null, user._id);
    });

    passport.deserializeUser((_id, done)=>{
        done(null, null);
    });
}
