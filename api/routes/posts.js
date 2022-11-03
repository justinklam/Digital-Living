import express from "express";
// Controller

const router = express.Router();

// Get
router.get("/");

router.get("/:id");

router.post("/");

router.delete("/:id");

router.update("/:id");

export default router;
