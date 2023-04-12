const { string, integer } = require("check-types")
const mongoose =require("mongoose")
const { Str } = require("prelude-ls")

const traineeSchema=new mongoose.Schema({
    email:String,
    fName:String,
    lName:String,
    phone:String,
    pass:String,
    age:Number,
    gender:String,
    weight:Number,
    height:Number,
    Status:Number
})

module.exports=mongoose.model("Trainee",traineeSchema)