import {USERS} from "../mock-users";
import jwt from "jsonwebtoken";
import {Router} from "express";

import asyncHandler from "express-async-handler";
import {UserModel} from "../models/user.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {
            res.send("Seed is already done!");
            return;
        }
        await UserModel.create(USERS)
        res.send("Seed is Done!")
    }));
router.post("/login", (req, res) => {
    const {email, password} = req.body;
    var user = USERS.find(user => {
        user.email == email && user.password == password
        console.log("email:", email, "password:", password)
        console.log(user.name, user.email)
        if (user) {
            res.send(generateTokenResponse(user));
            console.log("token")

        } else {
            res.status(400).send("Username or password is not valid!")
            console.log("error")
        }
    })
})

const generateTokenResponse = (user: any) => {
    user.token = jwt.sign({
        email: user.email, name: user.name
    }, "secretOrPrivateKey", {
        expiresIn: "1d"
    });
    return user;
}

export default router;