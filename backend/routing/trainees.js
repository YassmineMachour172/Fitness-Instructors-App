/** @format */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TraineeSchema = require("../db/TraineeSchema");
const TraineeModel = mongoose.model("trainees", TraineeSchema);
const { validate } = require("check-email-validation");
const bcrypt = require('bcrypt');
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
        res.send({ info: null, error: "Server error" });
    }
});


  
router.post("/SignIn",  async function (req, res) {
    const { email, pass } = req?.body;
    const user = await TraineeModel.findOne({ email });
    if (!user) {
        res.send({success:false,error:"Invalid email or password",info:null})
      }
      //const validPassword = bcrypt.compare(pass, user.pass);
    if (!(pass===user.pass)) {
        res.send({success:false,error:"Invalid email or password",info:null})
    }
    
    res.send({success:true,error:null,info:'Logged in successfully'});
});

module.exports = router;
