import { config } from "../config.js";
import express from "express";
import mysql from "mysql";

const connection = mysql.createConnection(config);
const router = express.Router();

router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, email } = req.body;

  connection.query(
    "UPDATE user SET firstname = ?, lastname = ?, email = ? WHERE id = ?",
    [firstname, lastname, email, id],
    (error, results) => {
      if (error) throw error;
      console.log(results);
      res.send("User updated successfully.");
    }
  );
});

export default router;
