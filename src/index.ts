import express from "express";
import { Request, Response } from "express";
const app = express();


app.get("/", function(req : Request , res : Response){
    return res.send("ok")
})

const server = app.listen(3000, () => {
    console.log(`Listening on port ${3000}`);
});