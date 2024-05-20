const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const UserModel = require("./model/user.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/infoBatch1");

app.post("/send", (req, res) => {
    const { username, userage } = req.body;  //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(`Searching for ${username} aged ${userage}`);	
    UserModel.findOne({ username, userage })
        .then(result => res.json(result))
        .catch(err => console.log(err));
});

app.post("/insert", (req, res) => {
    const { username, userage } = req.body;	 //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(`Inserting ${username} aged ${userage}`);
    UserModel.create({ username, userage })
        .then(result => res.json(result))
        .catch(err => console.log(err));
});

app.post("/delete", (req, res) => {
    const { username, userage } = req.body;	 //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(`Deleting ${username} aged ${userage}`);
    UserModel.deleteOne({ username, userage })
        .then(result => res.json(result))
        .catch(err => console.log(err));
});

app.post("/update", (req, res) => {
    const { username, userage, newUsername, newUserage } = req.body;	 //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(`Updating ${username} aged ${userage} to ${newUsername} aged ${newUserage}`);
    UserModel.findOneAndUpdate({ username, userage }, { username: newUsername, userage: newUserage }, { new: true })
        .then(result => res.json(result))
        .catch(err => console.log(err));
});

app.listen(3002, () => {
    console.log("Server is running on PORT 3002");
});
