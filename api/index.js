import express from "express";

import dotenv from "dotenv";
import cors from "cors";

// Routes
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Use Routes
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server connected at ${port}! 🐅`);
});
