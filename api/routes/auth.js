import Express from "express";
import { login } from "./../controller/authController.js";

const router = Express.Router();

const loginRoute = router.post("/login", login);

const Router = {
  loginRoute,
};

export default Router;
