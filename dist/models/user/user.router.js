import controllers from "./user.controllers";
import { Router } from "express";
const router = Router();
router.route("/").get(controllers.getMany).post(controllers.createOne);
router.route("/:id").get(controllers.getOne).put(controllers.updateOne).delete(controllers.removeOne);
export default router;