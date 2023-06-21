/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const messageSchema = require("../db/messageSchema");
const messageModel = mongoose.model("messages", messageSchema);
router.get('/TrainerMessage',async(req,res)=>{
    
    const email = req.query.email;

    try {
        
        const user = await messageModel.findOne({ emailTrainer: email });
        
        if(user){
            res.send({ success: true, error: null, MyMessagesTrainer: { user } });
            
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
router.post('/TraineeMessage',async(req,res)=>{

    const email = req.query.email;

    try {
        
        const user = await messageModel.findOne({ emailTrainee: email }).exec();
        
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
module.exports = router;

