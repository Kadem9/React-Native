import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js";
import { config } from "./config.js";
import updateUserRouter from "./routes/updateUsers.js";
import authRouter from "./routes/auth.js";

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error("erreur : " + err.stack);
    return;
  }

  console.log(connection.threadId);
});

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRouter.loginRoute);
app.use("/users", userRouter);
app.use("/update", updateUserRouter);
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
