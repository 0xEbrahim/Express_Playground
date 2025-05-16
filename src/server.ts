import express from "express";
import "reflect-metadata";
import { AppRouter } from "./Config/App.Router";
import "./Controllers/auth.controller";

const router = AppRouter.getInstance;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3001, () => {
  console.log("Server started running at PORT 3001");
});
