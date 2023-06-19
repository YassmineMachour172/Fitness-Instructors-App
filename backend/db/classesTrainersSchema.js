/** @format */

const mongoose = require("mongoose");
const TraineeSchema = require("./trainerSchema");
const classSchema = require("./classSchema");

const classesTrainersSchema = new mongoose.Schema({
    listNum:Number,
    trainer: {
        type: String,
        ref: 'Trainer',
      },
      class: {
        type: String,
        ref: 'Class',
      }
});
{ _id: false }
const Trainee= mongoose.model('Trainer', trainerSchema);
const Class= mongoose.model('Class', classSchema);
module.exports = classesTrainersSchema;
