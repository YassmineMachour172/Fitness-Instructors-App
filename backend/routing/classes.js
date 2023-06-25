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


router.get('/MyClassesTrainer',async(req,res)=>{
    //shows all the trainers
    const email = req.query.email;

    try {
        
        const user = await classesTrainersModel.findOne({ email: email });
        
        if(user){
            res.send({ success: true, error: null, MyClassesTrainer: { user } });
            
        } 
        else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})
router.get('/MyClassesTrainee',async(req,res)=>{

    const email = req.query.email;

    try {
        
        const user = await classesTraineesModel.findOne({ email: email });
        
        if(user){
            res.send({ success: true, error: null, MyClassesTrainee: { user } });
            
        } 
        else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})
router.get('/MainTrainee',async(req,res)=>{

    const email = req.query.email;

    try {
        
        const user = await classesTraineesModel.findOne({ email: email }).exec();
        
        if(user){
            res.send({ success: true, error: null, MyClassesTrainee: { user } });
            
        } 
        else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})
router.post('/NewClass',async(req,res)=>{

    const name= req.query.ClassName;
    const keywords= req.query.Keywords;

    try {
        if(name!=null){
            const classN = await classesTrainersModel.findOne({ class: name }).exec();
        
        if(classN){
            res.send({ success: true, error: null, NewClass: { classN } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        }
        if(Keywords!=null)
        {
            const key = await KeywordModel.findOne({ keyword: keywords }).exec();
            
            if(key){
                res.send({ success: true, error: null, NewClass: { user } });
            }
            else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        }
        
        
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})



router.post("/CreateNewClass", async function (req, res) {
    const {NameOfC,description,cType,email,keywords}  = req?.body;
    console.log(req.body)
    try {
                    const user = await classesModel.insertMany([{ className:NameOfC,description,cType,email,keywords}])
                        console.log("save  exercise to DB",{user});
                  
                    res.send({ success: true, error: null, info: null });
    } catch (err) {
        res.send({ success: false, info: null, error: "Server error" });
        console.log(err)
    }
});

module.exports = router;