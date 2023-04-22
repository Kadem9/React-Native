import dotenv from "dotenv";
import env from "react-native-dotenv";

dotenv.config(".env");

export const config = {
  host: process.env.REACT_APP_HOST,
  user: process.env.REACT_APP_USER,
  password: process.env.REACT_APP_PASSWORD,
  database: process.env.REACT_APP_DATABASE,
};
