/** @format */

const mongoose = require("mongoose");

const keywordSchema = new mongoose.Schema({
    keyword:{
        primary: true,
        type:String
    }
    ,email: String
});
{ _id: false }
module.exports = keywordSchema;
