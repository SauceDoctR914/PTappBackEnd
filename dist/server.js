import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./models/user.router";
import exerciseRouter from "./models/exercise.router";
import workoutplanRouter from "./models/workoutplan.router";
export const app = express();
const router = express.Router();
app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({
  extended: true
}));
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/excerise", exerciseRouter);
app.use("/api/workoutplan", workoutplanRouter);
export const start = () => {
  app.listen(4000, () => {
    console.log("server is on 4000");
  });
};