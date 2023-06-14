/** @format */

const mongoose = require("mongoose");
const TraineeSchema = require("./TraineeSchema");
const classSchema = require("./classSchema");

const classesTraineesSchema = new mongoose.Schema({
    listNum:Number,
    trainee: {
        type: String,
        ref: 'Trainee',
      },
      class: {
        type: String,
        ref: 'Class',
      }
});
{ _id: false }
const Trainee= mongoose.model('Trainee', TraineeSchema);
const Class= mongoose.model('Class', classSchema);
module.exports = classesTraineesSchema;
