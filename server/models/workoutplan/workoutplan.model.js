import { WorkoutPlan } from "./workoutplan.model";
import { crudControllers } from "../routers/crud";
import mongoose from "mongoose";

export default crudControllers(WorkoutPlan);
