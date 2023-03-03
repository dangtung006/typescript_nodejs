import express from "express";
import * as dotenv from "dotenv";
import passport from 'passport'
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./item/item.router";
import mongoose from 'mongoose';
import bookRoutes from './route/book';
import authorRoutes from './route/author';
import userRoutes from './route/user';
import passportMiddleware from './middlewares/passport.Jwt';

dotenv.config();

const connectDB = async function():Promise<void> {
    try{
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/employee_management",
            {
                retryWrites: true, w: 'majority'
            }
        )
        console.log("connect successfull");
        const app = express();
        const PORT: number = parseInt(process.env.PORT as string, 10);

        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(passport.initialize());
        passport.use(passportMiddleware);

        

        // Middlewares :
        
        app.use((req, res, next) => {
            // /** Log the req */
            // Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    
            // res.on('finish', () => {
            //     /** Log the res */
            //     Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
            // });
            next();
        });

        /** Rules of our API */
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
            if (req.method == 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return res.status(200).json({});
            }
    
            next();
        });

        // app.use("/items", itemsRouter);
        app.use("/book", bookRoutes);
        app.use("/author", authorRoutes);
        app.use("/user", userRoutes);

        const server = app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });

    }catch(e){
        console.log("fail to connect DB" , e);
    }
}

connectDB();