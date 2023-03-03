import User from "../models/user";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
};

console.log("opts : " , opts);

export default new Strategy(opts, async (payload : any, done : any) => {
    try {
        console.log("payload : ", payload);
        const user = await User.findById(payload._id);
        console.log("user 233333 : " , user);

        if (user) {
            return done(null, user);
        }

        return done(null, false);
    } catch (error) {
        console.log(error);
    }
});