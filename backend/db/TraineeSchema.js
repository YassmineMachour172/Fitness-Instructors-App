/** @format */

const mongoose = require("mongoose");
console.log("traineeSchema")
const TraineeSchema = new mongoose.Schema({
    email: String,
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
module.exports = TraineeSchema;
