/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const classesTrainersSch= require("../db/classesTrainersSchema");
const classesTrainersModel=mongoose.model("MyClassesTrainer",classesTrainersSch);
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
        
        const user = await classesTraineeSchema.findOne({ email: email }).exec();
        
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
        
        const user = await classesTraineeSchema.findOne({ email: email }).exec();
        
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
module.exports = router;