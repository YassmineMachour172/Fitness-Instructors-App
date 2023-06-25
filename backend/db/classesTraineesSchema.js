/** @format */

const mongoose = require("mongoose");

const classesTraineesSchema = new mongoose.Schema({
    traineeEmail:String,
    className:String,
    cType:String,
    description:String,
    keywords:String,
    trainerEmail:String
});
module.exports = classesTraineesSchema;
