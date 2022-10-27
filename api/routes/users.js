import express from "express";

const router = express.Router();

// Get
router.get("/", (req, res) => {
  res.json("Users Get Route");
});

export default router;
