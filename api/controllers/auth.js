import { db } from "../db.js";
import bcrypt from "bcryptjs";

// REGISTER
export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    // fail route
    if (err) return res.status(500).json(err);

    // success route
    // if user is found - data.length exists
    if (data.length)
      return res.status(409).json("User account already exists!");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";

    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(`${req.body.username} has been registered!`);
    });
  });
};

// LOGIN
export const login = (req, res) => {
  // CHECK USER
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) return res.status(404).json("User not found!");
  });

  // CHECK PASSWORD
};

// LOGOUT
export const logout = (req, res) => {
  console.log("logout");
};
