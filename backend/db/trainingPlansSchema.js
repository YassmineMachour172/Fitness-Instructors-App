/** @format */

const mongoose = require("mongoose");
const ExerciseSchema = require("./ExerciseSchema");
const classSchema = require("./classSchema");
const trainingPlansSchema = new mongoose.Schema({
    trainingNum:{
        primary: true,
        type:Number
    },
    exercise: {
      type:String,
      ref:'Exercise'
    },
    class: {
      type:String,
      ref:'Class'
    },
    discription:String
});
{ _id: false }
const Exercise = mongoose.model('Exercise', ExerciseSchema);
const Class = mongoose.model('Class', classSchema);
module.exports = trainingPlansSchema;
