import {Router} from "express";
import {ANIMALS} from "../mock-animals";
import asyncHandler from "express-async-handler";
import { Animal, AnimalModel } from "../models/animal.model";
import authJwt from "../middlewares/authJwt"
const router = Router();
router.use(authJwt);
router.get("/seed", asyncHandler(
    async (req, res) => {
        const animalCount = await AnimalModel.countDocuments();
        if (animalCount > 0) {
            res.send("Seed is already done!");
            return;
        }
        await AnimalModel.create(ANIMALS)
        res.send("Seed is Done!")
    }));
router.get("/", asyncHandler(
    async (req, res) => {
        const animals = await AnimalModel.find();
        res.send(animals);
    }
))

router.get("/:animalId", (req, res) => {
    var animalId = req.params.animalId
    res.send(ANIMALS.find(animal => animalId === animal.id.toString()));
})

router.get("/search/:search",
    async (req, res) => {
        const searchRegex = new RegExp(req.params.search, 'i')
        const animals = await AnimalModel.find({name: {$regexp: searchRegex}});

        return res.send(animals);

    });

router.post('/create',
    asyncHandler(async (req:any, res:any) => {
        const requestAnimal = req.body;
        const newAnimal = new AnimalModel({...requestAnimal});
        await newAnimal.save();
        res.send(newAnimal);
    })
)


export default router;