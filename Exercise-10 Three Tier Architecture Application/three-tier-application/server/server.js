const express = require("express");  
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/student");

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(function(users){
        res.json(users);
    }).catch(function(err){
        res.json(err)
    })
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})
