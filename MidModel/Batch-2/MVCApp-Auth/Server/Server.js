const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const UserModel = require("./models/Users.js");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/info");


app.post("/send", (req, res) => {
    const data = req.body.username;
    console.log(data);
    UserModel.findOne({ username: data })
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

app.post("/insert", (req, res) => {
    const data = req.body.username;
    console.log(data);
    UserModel.create({ username: data })
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => console.log(err))
})


app.post("/delete", (req, res) => {
    const data = req.body.username;
    console.log(data);
    UserModel.deleteOne({ username: data })
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => console.log(err))
})


app.listen(3001, () => {
    console.log("Server listening on PORT 3001");
})