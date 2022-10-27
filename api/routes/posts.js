import express from "express";

const router = express.Router();

// Get
router.get("/", (req, res) => {
  res.json("Posts Get Route");
});

export default router;
