import express from "express";

const router = express.Router();

// Get
router.get("/", (req, res) => {
  res.json("Auth Get Route");
});

export default router;
