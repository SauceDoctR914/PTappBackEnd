import mongoose from "mongoose";
import validator from "validator";
const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  reps: {
    type: Number,
    trim: true
  },
  duration: {
    type: Number
  }
});
export const Exercise = mongoose.model("exercise", exerciseSchema);