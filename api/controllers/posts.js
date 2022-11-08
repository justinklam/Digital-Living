import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  // req.query.cat takes everything after the URL address cat
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  // users u posts p to shorten
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json("fromController");
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid!");
  });
};

export const updatePost = (req, res) => {
  res.json("fromController");
};
