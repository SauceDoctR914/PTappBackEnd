import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

import cors from "cors";
import mongoose from "mongoose";

import userRouter from "./models/user/user.router";
import exerciseRouter from "./models/exercise/exercise.router";
import workoutplanRouter from "./models/workoutplan/workoutplan.router";

export const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
console.log(exerciseRouter.stack[0].route);
app.use("/api/user", userRouter);
app.use("/api/exercise", exerciseRouter);
// app.get("/api/exercise", (req, res) => {
//   res.send({ message: "hi" });
// });
app.use("/api/workoutplan", workoutplanRouter);

export const start = () => {
  app.listen(6000, () => {
    console.log("server is on 6000");
  });
};
