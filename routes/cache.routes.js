import { Router } from "express";
import { createData } from "../controllers/cache.controllers.js";

const cacheRouter = Router();

cacheRouter.post("/", createData);

cacheRouter.get("/:key");

cacheRouter.delete("/:key");

export default cacheRouter;
