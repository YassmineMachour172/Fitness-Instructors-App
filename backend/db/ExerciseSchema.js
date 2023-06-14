/** @format */

const mongoose = require("mongoose");
const trainerSchema = require("./trainerSchema");

const ExerciseSchema = new mongoose.Schema({
    exName:{
            primary: true,
            type:String
            },
    location: String,
    discription: String,
    trainer: {
        type: String,
        ref: 'Trainer',
      }
});
{ _id: false }
const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports = ExerciseSchema;
