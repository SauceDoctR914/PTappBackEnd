import { User } from "./user.model";
import { crudControllers } from "../../routers/crud";
import mongoose from "mongoose";

export default crudControllers(User);
