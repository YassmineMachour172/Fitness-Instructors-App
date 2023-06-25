/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const messageSchema = require("../db/messageSchema");
const messageModel = mongoose.model("messages", messageSchema);



router.get('/TraineeMessage',async(req,res)=>{
    
    const email = req.query.email;

    try {
        
        const user = await messageModel.find({
            $or: [{ sender: email }, { receiver: email }]
          });
        
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
router.post('/Message',async(req,res)=>{

    const sender = req.body.params.sender;
    const reciever=req.body.params.reciever;
    const message=req.body.params.message;
    console.log(sender,reciever,message );

    try {
        
        const user = await messageModel.insertMany([{ sender,reciever,message }]);
        
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

