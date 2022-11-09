import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

// Routes
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";

const app = express();
dotenv.config();

const port = parseInt(process.env.PORT) || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Upload
const upload = multer({ dest: "uploads/" });

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", usersRoutes);
app.post("/api/upload", upload.single("file"), function (req, res, next) {
  res.status(200).json("Image has been uploaded!");
});

app.listen(port, () => {
  console.log(`Server connected at ${port}! 🐅`);
});
