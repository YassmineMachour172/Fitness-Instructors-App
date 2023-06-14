/** @format */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ExerciseSchema = require("../db/ExerciseSchema");
const ExerciseModel = mongoose.model("exercises", ExerciseSchema);