/** @format */

const mongoose = require("mongoose");
const trainerSchema = require("./trainerSchema");

const classSchema = new mongoose.Schema({
    className:{
        primary: true,
        type:String
    },
    cType: String,
    discription: String,
    classStatus:{
        type: String,
        enum: ['published', 'saved'],
        default: 'saved',
      },
    trainer: {
        type: String,
        ref: 'Trainer',
      }
});
{ _id: false }
const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports = classSchema;
