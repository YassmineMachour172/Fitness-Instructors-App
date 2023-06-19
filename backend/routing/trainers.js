/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const TrainerSchema = require("../db/trainerSchema");
const TrainerModel = mongoose.model("trainer", TrainerSchema);

router.get('/MyClassesTrainer',async(req,res)=>{
    //shows all the trainers
    const email = req.query.email;

    try {
        
        const user = await TrainerModel.findOne({ email: email });
        
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
