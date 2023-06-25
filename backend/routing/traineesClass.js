/** @format */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TraineeclassSchema = require("../db/classesTraineesSchema");
const TraineeclassModel = mongoose.model("traineeClass", TraineeclassSchema);

router.post('/NewClass',async(req,res)=>{

    const {exercisetitle,traineeEmail,className,cType,description,keywords,trainerEmail}= req.body.params;
    console.log(req.body.params)
    try {
        
            const classN = await TraineeclassModel.insertMany([{ exercisetitle,traineeEmail,className,cType,description,keywords,trainerEmail }]);
            console.log("HELOOOOOOOOOOOOOOO",classN)
        if(classN){
            res.send({ success: true, error: null, NewClass: { classN } });
        } else{
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})

router.get('/MainTrainee',async(req,res)=>{
    console.log(req?.query.traineeEmail)
    const traineeEmail = req.query.traineeEmail;
    try {
        
        const user =await TraineeclassModel.find({traineeEmail:traineeEmail});
        if(user){
            console.log(user);
            res.send({ success: true, error: null, TraineesClass: { user } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})
router.get('/MyClassesTrainee',async(req,res)=>{
    console.log(req?.query.traineeEmail)
    const traineeEmail = req.query.traineeEmail;
    try {
        
        const user =await TraineeclassModel.find({traineeEmail:traineeEmail});
        if(user){
            console.log(user);
            res.send({ success: true, error: null, TraineesClass: { user } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})
router.post('/MyClassesTrainee',async(req,res)=>{

    const className= req.body.params.className;
    const traineeEmail= req.body.params.traineeEmail;

    console.log(req.body.params)
    try {
            const user = await TraineeclassModel.deleteOne({
                $or: [{className:className},{traineeEmail:traineeEmail}]
              });
            console.log("HELOOOOOOOOOOOOOOO",user)
        if(user){
            res.send({ success: true, error: null, MyClassesTrainee: { user } });
        } else{
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})
router.get('/MyTrainee',async(req,res)=>{
    console.log(req?.query)
    const trainerEmail = req.query.trainerEmail;
    try {
        
        const user =await TraineeclassModel.find({trainerEmail:trainerEmail});
        if(user){
            console.log(user);
            res.send({ success: true, error: null, TraineesClass: { user } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
})
module.exports = router;
