/** @format */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TraineeSchema = require("../db/trainerSchema");
const myTraineeSchema= require("../db/myTraineeSchema");
const TraineeModel = mongoose.model("trainers", TraineeSchema);
const { validate } = require("check-email-validation");
const nodemailer =require('nodemailer');
const bcrypt = require('bcrypt');
const { default: MyTrainee } = require("../../frontend/src/components/MyTrainee/MyTrainee");

router.get('/MyClassesTrainer',async(req,res)=>{

    const email = req.query.email;

    try {
        
        const user = await classesTrainerSchema.findOne({ email: email }).exec();
        
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
router.get('/TraineeMessage',async(req,res)=>{

    const email = req.query.email;

    try {
        
        const user = await messageSchema.findOne({ email: email }).exec();
        
        if(user){
            res.send({ success: true, error: null, TraineeMessage: { user } });
            
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
router.get('/MyTrainee',async(req,res)=>{

    const email = req.query.email;

    try {
        
        const user = await myTraineeSchema.findOne({ trainersTraineesNum: trainersName }).exec();
        
        if(user){
            res.send({ success: true, error: null, MyTrainee: { user } });
            
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
/*router.get('/MyName',async(req,res)=>{

    const email = req.query.email;
   

    try {
        
        const user = await TraineeSchema.findOne({ email: email }).exec();
        
        if(user){
            res.send({ success: true, error: null, MyTrainee: { user } });
            
        } 
        else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
       
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})*/

module.exports = router;
