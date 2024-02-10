import { Router } from "express";
import asyncHandler from "express-async-handler";
import { HumanModel } from "../models/human.model";
import { AnimalModel } from "../models/animal.model";
import { AnimalTypeModel } from "../models/animal-type.model";
import { AnimalBreedModel } from "../models/animal-breed.model";
import authJwt from "../middlewares/authJwt"

const router = Router();
router.use(authJwt);
// router.get("/seed", asyncHandler(
//     async (req, res) => {
//         const animalCount = await AnimalModel.countDocuments();
//         if (animalCount > 0) {
//             res.send("Seed is already done!");
//             return;
//         }
//         await AnimalModel.create(ANIMALS)
//         res.send("Seed is Done!")
//     }));
router.get("/", asyncHandler(
    async (req, res) => {
        const animals = await AnimalModel.find().populate('type').populate('breed').populate('human');
        res.send(animals);
    }))

router.get("/:id", asyncHandler(
    async (req, res) => {
        var id = req.params.id
        AnimalModel.findOne({ _id: id }).populate('type').populate('breed').populate('human').then((animal) => {
            res.send(animal);
        })
    }))

router.get("/search/:search",
    async (req, res) => {
        const searchRegex = new RegExp(req.params.search, 'i')
        const animals = await AnimalModel.find({ name: { $regexp: searchRegex } });

        return res.send(animals);

    });

router.post('/create',
    asyncHandler(async (req: any, res: any) => {
        const requestAnimal = req.body;
        console.log(req.body)
        let typeData = requestAnimal.type;

        let breedData = requestAnimal.breed;
        let humanData = requestAnimal.human;
        try {

            const [existingType, existingBreed, existingHuman] = await Promise.all([
                AnimalTypeModel.findOne({ _id: typeData?._id }),
                AnimalBreedModel.findOne({ _id: breedData?._id }),
                HumanModel.findOne({ _id: humanData?._id })
            ]);

            let newType = null;
            let newBreed = null;
            let newHuman = null;

            if (typeData && !existingType) {
                newType = new AnimalTypeModel({type:typeData});
                await newType.save();
                typeData = newType._id;
            }

            if (breedData && !existingBreed) {
                newBreed = new AnimalBreedModel({breed:breedData, type:typeData});
                await newBreed.save();
                breedData = newBreed._id;
            }

            if (humanData && !existingHuman) {
                newHuman = new HumanModel(humanData);
                await newHuman.save();
                humanData = newHuman._id;
            }
            const newAnimal = new AnimalModel({ ...requestAnimal, type: typeData, breed: breedData, human: humanData });
            console.log(newAnimal);

            await newAnimal.save();
            res.send(newAnimal);
            console.log('Домашното животно е успешно записано в базата данни: ', newAnimal.get.name);
        } catch (error) {
            console.error('Грешка при записване на животното:', error);
        }

    })
)


export default router;