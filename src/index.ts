import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./item/item.router";
import mongoose from 'mongoose';

const connectDB = async function():Promise<void> {
    try{
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/employee_management",
            {
                retryWrites: true, w: 'majority'
            }
        )
        console.log("connect successfull");
    }catch(e){
        console.log("fail to connect DB" , e);
    }
}

connectDB();
dotenv.config();

const app = express();
app.use("/items", itemsRouter);


const PORT: number = parseInt(process.env.PORT as string, 10);
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});