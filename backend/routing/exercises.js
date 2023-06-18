/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const ExerciseSchema = require("../db/ExerciseSchema");
const ExerciseModel = mongoose.model("exercises", ExerciseSchema);


router.post("/Upload", async function (req, res) {
    const { title, location, description, email } = req?.body;
    console.log(req.body)
    let NewExercise = new ExerciseModel({
        title,
        location,
        description,
        email
    });
    try {
                    const user = await TraineeModel.insertMany([{ title:"123",
                        location:"C:\Users\yassmine machour\Downloads\5 MIN HOME WORKOUT YOU CAN DO EVERY MORNING l 매일 아침 5분 전신 홈트레이닝.mp4",
                        description:"123546",
                        email}])
                    //NewTrainee.save().then((docs) => {
                        console.log("save to DB");
                   // });*/
                    res.send({ success: true, error: null, info: null });
               
    } catch (err) {
        res.send({ info: null, error: "Server error" });
    }
});

module.exports = router;