const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:String,
    userage:Number
});

const UserModel=mongoose.model("users",UserSchema);

module.exports=UserModel;

