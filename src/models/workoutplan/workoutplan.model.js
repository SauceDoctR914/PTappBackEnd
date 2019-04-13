import mongoose from "mongoose";
import exerciseSchema from "../exercise/exercise.model";

const workoutSchema = mongoose.Schema({
  plan: {
    type: [exerciseSchema]
  }
});

export const Workout = mongoose.model("workout", workoutSchema);
