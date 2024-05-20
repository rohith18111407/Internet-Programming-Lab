const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const UserModel=require("./model/user.js");

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MVCPractice");

app.post("/send",(req,res)=>{
    const {username,userage}=req.body;   //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(username+" "+userage);
    console.log(`Searching ${username} with ${userage}`);
    UserModel.findOne({username:username,userage:userage})
        .then(result=>res.json(result))
        .catch(err=>console.log(err))
});

app.post("/insert",(req,res)=>{
    const {username,userage}=req.body;   //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(`Inserting ${username} with ${userage}`);
    UserModel.create({username:username,userage:userage})
        .then(result=>res.json(result))
        .catch(err=>console.log(err))
});

app.post("/delete",(req,res)=>{
    const {username,userage}=req.body;   //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(`Deleting ${username} with age ${userage} `);
    UserModel.deleteOne({username:username,userage:userage})
        .then(result=>res.json(result))
        .catch(err=>console.log(err))
});

app.post("/update",(req,res)=>{
    const {username,userage,newuserName,newuserAge}=req.body;   //LHS variable name should be same as the var name assigned and sent in App.js
    console.log(`Updating ${username} having ${userage} with ${newuserName} having ${newuserAge}`);
    UserModel.findOneAndUpdate({username,userage},{username:newuserName,userage:newuserAge},{new:true})
        .then(result=>res.json(result))
        .catch(err=>console.log(err))
});

// New endpoint to fetch all users
app.get("/users", (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
});

app.listen(3001,()=>{
    console.log("Server is listening on port 3001");
})
