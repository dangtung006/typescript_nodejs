import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./item/item.router";
import mongoose from 'mongoose';
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

        app.use("/items", itemsRouter);

        const server = app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });

    }catch(e){
        console.log("fail to connect DB" , e);
    }
}

connectDB();