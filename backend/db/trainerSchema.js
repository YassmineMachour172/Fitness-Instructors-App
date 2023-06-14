/** @format */

const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
    email: {
        primary: true,
        type:String
    },
    fName: String,
    lName: String,
    phone: String,
    password1: String,
    age: Number,
    gender: String,
    weight: Number,
    height: Number,
    Status: Number,
});
{ _id: false }
module.exports = trainerSchema;
