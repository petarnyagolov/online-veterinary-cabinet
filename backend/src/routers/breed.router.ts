import { Router } from "express";
import asyncHandler from "express-async-handler";
import authJwt from "../middlewares/authJwt"
import { AnimalBreedModel } from "../models/animal-breed.model";

const router = Router();
// router.use(authJwt);

router.get("/", asyncHandler(
    async (req, res) => {
        const breeds = await AnimalBreedModel.find();
        res.send(breeds);
    }
));
router.post('/create',
    asyncHandler(async (req: any, res: any) => {
        const requestBreed = req.body;
        const newBreed = new AnimalBreedModel({ ...requestBreed });
        await newBreed.save();
        res.send(newBreed);
    }));









export default router;