/** @format */

const { number } = require("check-types");
const mongoose = require("mongoose");
const TraineeSchema = require("./TraineeSchema");
const trainerSchema = require("./trainerSchema");


const messageSchema = new mongoose.Schema({
    sender: String,
    reciever: String,
    message: String,
});

module.exports = messageSchema;
