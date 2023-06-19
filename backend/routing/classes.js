/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const ClassSchema = require("../db/classSchema");
const ClassModel = mongoose.model("classes", ClassSchema);


module.exports = router;