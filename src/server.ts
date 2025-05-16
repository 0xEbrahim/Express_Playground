import express from "express";
import { AppRouter } from "./Config/App.Router";

const app = express();
const router = AppRouter.getInstance;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log("Server started running at PORT 3000");
});
