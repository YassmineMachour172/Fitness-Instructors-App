/** @format */
const { string, integer } = require("check-types")
const mongoose =require("mongoose")
const { Str } = require("prelude-ls")
const trainerSchema = require("./trainerSchema");

const ExerciseSchema = new mongoose.Schema({
    title:{
            primary: true,
            type:String
            },
    location: String,
    description: String,
    email: {
        type: String,
        ref: 'Trainer',
      }
});
{ _id: false }
//const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports=mongoose.model('exercises',ExerciseSchema)
module.exports = ExerciseSchema;
