import express from "express";

// import db connection
import connectToDatabase from "./database/mongodb.js";

// environment
import { PORT } from "./config/env.js";

// routes
import cacheRouter from "./routes/cache.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/cache", cacheRouter);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  await connectToDatabase();
});
