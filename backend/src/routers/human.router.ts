import { Router } from "express";
import authJwt from "../middlewares/authJwt"
import asyncHandler from "express-async-handler";
import { HumanModel } from "../models/human.model";

const router = Router();
// router.use(authJwt);

router.get("/", asyncHandler(async (req, res) => {
    const humans = await HumanModel.find();
    res.send(humans);
}));

export default router;