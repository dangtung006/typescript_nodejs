import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./item/item.router";


dotenv.config();

const app = express();
app.use("/items", itemsRouter);


const PORT: number = parseInt(process.env.PORT as string, 10);
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});