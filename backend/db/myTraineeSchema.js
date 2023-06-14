/** @format */

const mongoose = require("mongoose");

const TraineeSchema = require("./TraineeSchema");
const trainerSchema = require("./trainerSchema");

const myTraineeSchema = new mongoose.Schema({
    trainersTraineesNum:{
        primary: true,
        type:Number
    },
    trainee: {
      type:String,
      ref:'Trainee'
    },
    trainer: {
        type: String,
        ref: 'Trainer',
      }

});
{ _id: false }
const Trainer = mongoose.model('Trainer', trainerSchema);
const Trainee = mongoose.model('Trainee', TraineeSchema);

module.exports = myTraineeSchema;
