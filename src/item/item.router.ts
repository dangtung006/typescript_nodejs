/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./item.service";
import { Item } from "./item.interface";
import { Items } from "./items.interface";
/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */
itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Items = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
        console.log(e);
        res.status(404).send("there is an err");
    }
});
// GET items/

// GET items/:id

// POST items/

// PUT items/

// DELETE items/:id