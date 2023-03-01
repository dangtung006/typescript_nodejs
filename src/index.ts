import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { Request, Response } from "express";
dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);



app.get("/", function(req : Request , res : Response){
    return res.send("ok")
})

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});