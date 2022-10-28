import { db } from "../db";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    // fail route
    if (err) return res.json("Register Error:", err);

    // success route
    // if user is found - data.length exists
    if (data.length) return res.status(409).json("User account exists!");
  });
};

export const login = (req, res) => {
  console.log("login");
};

export const logout = (req, res) => {
  console.log("logout");
};
