import express from "express";

const router = express.Router();

// Get
router.get("/", (req, res) => {
  res.json("Post Route");
});

export default router;
