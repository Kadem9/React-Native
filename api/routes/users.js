import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import { config } from "../config.js";

const connection = mysql.createConnection(config);

const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (error, results, fields) => {
    if (error) throw error;

    res.send(results);
  });
});

export default router;
