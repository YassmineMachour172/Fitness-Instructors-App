/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const classesTrainersSch= require("../db/classesTrainersSchema");
const classesTrainersModel=mongoose.model("MyClassesTrainer",classesTrainersSch);
const classesTraineesSch= require("../db/classesTraineesSchema");
const classesTraineesModel=mongoose.model("MyClassesTrainee",classesTraineesSch);
const keywordSchema = require("../db/keywordSchema");
const KeywordModel = mongoose.model("keyword", keywordSchema);
const classesSch= require("../db/classSchema");
const classesModel=mongoose.model("Classes",classesSch);



router.get("/MyClassesTrainer",async function (req, res) {
    const trainerEmail = req.query.email;
    console.log("heeeeeeeeeeeeere",trainerEmail)
    try {
        const user = await classesModel.find({ trainerEmail: trainerEmail }).exec();
        console.log(user)
        if(user){
            res.send({ success: true, error: null, MyClassesTrainee: { user } });
            
        } 
        else{
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
});


router.post("/CreateNewClass", async function (req, res) {
    const className = req.body.NameOfC;
    const description= req.body.description;
    const cType= req.body.cType;
    const trainerEmail= req.body.email;
    const keywords= req.body.keywords;
    try {
                    const user = await classesModel.insertMany([{ className,description,cType,trainerEmail,keywords}])
                        console.log("save  exercise to DB",{user});
                  
                    res.send({ success: true, error: null, info: null });
    } catch (err) {
        res.send({ success: false, info: null, error: "Server error" });
        console.log(err)
    }
});

router.get("/NewClass",async function (req, res) {
    try {
        const user = await classesModel.find({}).exec();
        console.log(user)
        if(user){
            res.send({ success: true, error: null, NewClass: { user } });
            
        } 
        else{
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
});
router.get("/ClassTrainningPlanes",async function (req, res) {
   const className=req.query.className;
    console.log(req.query.className)
    try {
        const user = await classesModel.find({className:className}).exec();
        console.log(user)
        if(user){
            res.send({ success: true, error: null, NewClass: { user } });
            
        } 
        else{
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
});

module.exports = router;