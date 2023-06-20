/** @format */

const { number } = require("check-types");
const mongoose = require("mongoose");
const TraineeSchema = require("./TraineeSchema");
const trainerSchema = require("./trainerSchema");


const messageSchema = new mongoose.Schema({
    messageNum: {
        primary: true,
        type:number
    },
    message: String,
    TimeAndDate: Date,
    trainee: {
        type:String,
        ref:'Trainee'
        ,email: String
      },
      trainer: {
          type: String,
          ref: 'Trainer',
          email: String
        }
});
{ _id: false }
const Trainee = mongoose.model('Trainee', TraineeSchema);
const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = messageSchema;
