import controllers from "./exercise.controllers";
import express, { Router } from "express";

const router = express.Router();
router
  .route("/")
  .get(controllers.getMany)
  .post(controllers.createOne);
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
