import {USERS} from "../mock-users";
import jwt from "jsonwebtoken";
import {Router} from "express";

import asyncHandler from "express-async-handler";
import {UserModel} from "../models/user.model";
import bcrypt from 'bcryptjs';
import { ServerSession } from "mongodb";
import User from "../../models/user"
const router = Router();

// method to import new user
// router.get("/seed", asyncHandler(
//     async (req, res) => {
//         const usersCount = await UserModel.countDocuments();
//         if (usersCount > 0) {
//             res.send("Seed is already done!");
//             return;
//         }
//         await UserModel.create(USERS)
//         res.send("Seed is Done!")
//     }));

router.post("/login",  async (req, res) => {
    const email = req.body['email'];
    const password = req.body['password'];
    const user = await UserModel.findOne({ email: email })
    if (user && (await bcrypt.compareSync(password, user.password))) {
        const token = generateTokenResponse(user);
let userView =
        user.set('token',token)
        res.status(200).send(generateTokenResponse(user))
    } else {
        res.status(400).send("Username or password is not valid!")
    }
})
router.post("/logout", async(req,res) =>{
        req.body.session.token = null;
        res.redirect('login')
        return res.status(205).send("You will be back...");
})

const generateTokenResponse = (user: any) => {
    let token = jwt.sign({
        email: user.email, name: user.name
    }, "secretOrPrivateKey", {
        expiresIn: "1d"
    });
     return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    };
}

export default router;