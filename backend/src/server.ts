import express from "express";
import cors from "cors";
import {ANIMALS} from "./mock-animals";
import {HUMANS} from "./mock-humans";
import {EVENTS} from "./mock-events";

const app = express();
// FE -> localhost:4200
// BE -> localhost:5000
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));
var fs = require('fs');

const port = 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:" + port);
})

app.get("/api/animals", (req,res) =>{
    res.send( JSON.stringify(ANIMALS));
})

app.get("/api/animals/:animalId", (req,res) =>{
    var animalId = req.params.animalId
    res.send( ANIMALS.find(animal=> animalId == animal.id.toString()));
})

app.get("/api/animals/search/:search", (req, res) =>{
    const search = req.params.search;
    return res.send( ANIMALS.filter(animal => animal.name.includes(search)
        || animal.type.includes(search)
        || animal.breed.includes(search)));
})

app.get("/api/humans", (req,res) =>{
    res.send( JSON.stringify(HUMANS));
})

app.get("/api/events", (req,res) =>{
    res.send( JSON.stringify(EVENTS));
})

app.get("/api/events/search/:search", (req,res) =>{
    const search = req.params.search;
    res.send(EVENTS.filter(event=> event.animal.name.includes(search)));
})


