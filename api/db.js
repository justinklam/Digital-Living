import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPW,
  database: "j-blog",
});
