/** @format */


/** @format */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TraineeSchema = require("../db/TraineeSchema");
const TraineeModel = mongoose.model("trainees", TraineeSchema);
const { validate } = require("check-email-validation");

router.post("/Register", function (req, res) {
    const { email, fName, lName, phone, pass } = req?.body;
    let NewTrainee = new TraineeModel({
        email,
        fName,
        lName,
        phone,
        pass,
        age: 0,
        gender: 0,
        weight: 0,
        height: 0,
        Status: 0,
    });
    try {
        if (validate(email)) {
            TraineeModel.findOne({
                email: email,
            }).then(function (doc) {
                if (doc?.length === 0 || doc?.length === [] || !doc) {
                    NewTrainee.save().then((docs) => {
                        console.log("save to DB");
                    });
                    res.send({ success: true, error: null, info: null });
                } else {
                    res.send({
                        success: false,
                        error: true,
                        info: "use exsit",
                    });
                }
            });
        } else {
            res.send({
                success: false,
                error: "Email is not Valid",
                info: null,
            });
        }
    } catch (err) {
        res.send({ data: null, error: "Server error" });
    }
});

module.exports = router;
    //"start": "node server.js"
