import express from "express";

// import db connection
import connectToDatabase from "./database/mongodb.js";

// routes
import cacheRouter from "./routes/cache.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/cache", cacheRouter);

app.get("/", (req, res) => {
  res.send("Hello cactro backend test");
});

app.listen(3000, async () => {
  console.log(`Server listening on port 3000`);
  await connectToDatabase();
});
