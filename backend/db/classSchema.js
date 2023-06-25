/** @format */

const mongoose = require("mongoose");
const trainerSchema = require("./trainerSchema");

const classSchema = new mongoose.Schema({
    className:{
        primary: true,
        type:String
    },
    cType: String,
    description: String,
    classStatus:{
        type: String,
        enum: ['published', 'saved'],
        default: 'saved',
      },
    trainerEmail: String,
    traineeEmail:String,
    keywords:String
});
{ _id: false }
module.exports = classSchema;
