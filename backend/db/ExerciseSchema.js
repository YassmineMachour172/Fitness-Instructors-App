/** @format */
const mongoose =require("mongoose")
//const { Str } = require("prelude-ls")
//const trainerSchema = require("./trainerSchema");

const ExerciseSchema = new mongoose.Schema({
    title:String,
    location: String,
    description: String,
    email: String
});

//const Trainer = mongoose.model('Trainer', trainerSchema);
//module.exports=mongoose.model("exercises",{ExerciseSchema})


//const Trainer = mongoose.model('Trainer', trainerSchema);
//module.exports=mongoose.model('exercises',ExerciseSchema)

module.exports = ExerciseSchema;
