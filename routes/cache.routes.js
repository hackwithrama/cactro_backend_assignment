import { Router } from "express";
import {
  createData,
  deleteById,
  getById,
} from "../controllers/cache.controllers.js";

const cacheRouter = Router();

cacheRouter.post("/", createData);

cacheRouter.get("/:key", getById);

cacheRouter.delete("/:key", deleteById);

export default cacheRouter;
