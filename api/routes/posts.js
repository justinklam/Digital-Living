import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Post Route");
});

export default router;
