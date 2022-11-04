import express from "express";
// Controller
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

// Get All Posts
router.get("/", getPosts);

// Get a Post
router.get("/:id", getPost);

// Add a Post
router.post("/", addPost);

// Delete Post
router.delete("/:id", deletePost);

// Update Post
router.put("/:id", updatePost);

export default router;
