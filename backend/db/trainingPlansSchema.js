/** @format */

const mongoose = require("mongoose");
const ExerciseSchema = require("./ExerciseSchema");
const classSchema = require("./classSchema");
const trainingPlansSchema = new mongoose.Schema({
    trainingName:String,
    exercisetitle: String,
    className:String,
    description:String,
    trainerEmail:String
});
{ _id: false }
module.exports = trainingPlansSchema;
