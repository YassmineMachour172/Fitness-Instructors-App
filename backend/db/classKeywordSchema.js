/** @format */

const { string } = require("check-types");
const mongoose = require("mongoose");
const keywordSchema = require("./keywordSchema");
const classSchema = require("./classSchema");

const classKeywordSchema = new mongoose.Schema({
    listNum:Number,
    keyword: {
      type:String,
      ref:'Keyword'
    },
    class: {
      type:String,
      ref:'Class'
    },
    
});
{ _id: false }
const Keyword = mongoose.model('Keyword', keywordSchema);
const Class = mongoose.model('Class', classSchema);
module.exports = classKeywordSchema;
