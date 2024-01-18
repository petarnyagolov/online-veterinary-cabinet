import { Router } from "express";
import { ANIMALS } from "../mock-animals";
import asyncHandler from "express-async-handler";
import { AnimalModel } from "../models/animal.model";
import { AnimalTypeModel } from "../models/animal-type.model";
import { AnimalBreedModel } from "../models/animal-breed.model";
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
        const animals = await AnimalModel.find().populate('type').populate('breed').populate('human');
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
        console.log(req.body)
        let typeData = requestAnimal.type;

        let breedData = requestAnimal.breed;
        try {
            const [existingType, existingBreed] = await Promise.all([
                AnimalTypeModel.findOne({ _id: typeData.id }),
                AnimalBreedModel.findOne({ _id: breedData.id })
            ]);

            if (!existingType) {
                typeData = await AnimalTypeModel.create(typeData);
            }

            if (!existingBreed) {
                breedData.type = existingType?._id;
                breedData = await AnimalBreedModel.create(breedData);
            }

            const newAnimal = new AnimalModel({...requestAnimal});
            console.log(newAnimal);
            await newAnimal.save();
            res.send(newAnimal);
            console.log('Домашното животно е успешно записано в базата данни:', newAnimal);
        } catch (error) {
            console.error('Грешка при записване на животното:', error);
        }

    })
)


export default router;