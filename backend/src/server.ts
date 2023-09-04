import express from "express";
import cors from "cors";
import {ANIMALS} from "./mock-animals";
import {HUMANS} from "./mock-humans";
import {EVENTS} from "./mock-events";
import {USERS} from "./mock-users";
import {User} from "../models/user";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json())
// FE -> localhost:4200
// BE -> localhost:5000
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
var fs = require('fs');

app.get("/api/animals", (req, res) => {
    res.send(JSON.stringify(ANIMALS));
})

app.get("/api/animals/:animalId", (req, res) => {
    var animalId = req.params.animalId
    res.send(ANIMALS.find(animal => animalId === animal.id.toString()));
})

app.get("/api/animals/search/:search", (req, res) => {
    const search = req.params.search;
    return res.send(ANIMALS.filter(animal => animal.name.includes(search)
        || animal.type.includes(search)
        || animal.breed.includes(search)));
})

app.get("/api/humans", (req, res) => {
    res.send(JSON.stringify(HUMANS));
})

app.get("/api/events", (req, res) => {
    res.send(JSON.stringify(EVENTS));
})

app.get("/api/events/search/:search", (req, res) => {
    const search = req.params.search;
    res.send(EVENTS.filter(event => event.animal.name.includes(search)));
})

app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = USERS.find(user => {
        user.email === email && user.password === password

        if (user) {
            res.send()
        }else{
            res.status(400).send("Username or password is not valid!")
        }
    })
})

const generateTokenResponse = (user: User) => {
    const token = jwt.sign({
        email: user.email, name: user.name
    }, "secretOrPrivateKey", {
        expiresIn: "30d"
    })
    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})


