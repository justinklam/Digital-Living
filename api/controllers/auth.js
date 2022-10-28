import { db } from "../db.js";
import bcrypt from "bcryptjs";

// REGISTER
export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    // fail route
    if (err) return res.json("Registration Error:", err);
    // success route
    // if user is found - data.length exists
    if (data.length) return res.status(409).json("User account exists!");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
  });
};

// LOGIN
export const login = (req, res) => {
  console.log("login");
};

// LOGOUT
export const logout = (req, res) => {
  console.log("logout");
};
