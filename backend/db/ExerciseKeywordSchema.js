/** @format */

const { string } = require("check-types");
const mongoose = require("mongoose");
const ExerciseSchema = require("./ExerciseSchema");
const keywordSchema = require("./keywordSchema");

const ExerciseKeywordSchema = new mongoose.Schema({
    listNum:Number,
    keyword: {
      type:String,
      ref:'Keyword'
    },
    exercise: {
      type:String,
      ref:'Exercise'
    },
    
});
{ _id: false }
const Keyword = mongoose.model('Keyword', keywordSchema);
const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = ExerciseKeywordSchema;
