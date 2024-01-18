import { Router } from "express";
import authJwt from "../middlewares/authJwt"
import asyncHandler from "express-async-handler";
import { AnimalTypeModel } from "../models/animal-type.model";
const router = Router();
// router.use(authJwt);

router.get("/", asyncHandler(async (req, res) => {
    const types = await AnimalTypeModel.find();
    res.send(types);
}));

router.post('/create', asyncHandler(async (req, res) => {
    const requestType = req.body;
    const newType = new AnimalTypeModel({ ...requestType });
    await newType.save();
    res.send(newType);
}));

export default router;