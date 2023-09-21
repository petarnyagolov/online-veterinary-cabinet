import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import {HUMANS} from "./mock-humans";
import {EVENTS} from "./mock-events";
import animalRouter from "./routers/animal.router";
import userRouter from "./routers/user.router";
import {dbConnect} from "./configs/database.config";
dbConnect();

const app = express();
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api/animals",animalRouter);
app.use("/api/users",userRouter);

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

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})


