import { Exercise } from "./exercise.model";
import { crudControllers } from "../routers/crud";
import mongoose from "mongoose";
export default crudControllers(Exercise);