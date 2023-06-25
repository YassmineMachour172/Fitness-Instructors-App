/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const trainingPlansSchema = require("../db/trainingPlansSchema");
const TrainingPlansModel = mongoose.model("trainingPlans", trainingPlansSchema);


router.post("/TrainersLibSelect", async function (req, res) {
    const {exercisetitle,className,description,trainerEmail }  = req?.body?.params;
    try {
                    const user = await TrainingPlansModel.insertMany([{trainingName:className,exercisetitle,className,description,trainerEmail}])
                    res.send({ success: true, error: null, info: null});
    } catch (err) {
        res.send({ success: false, info: null, error: "Server error" });
        console.log(err)
    }
});

router.get('/CreateNewClass',async(req,res)=>{
    console.log(req?.query.className)
    const className = req.query.className;
    try {
        
        const user =await TrainingPlansModel.find({className:className});
        if(user){
            console.log(user);
            res.send({ success: true, error: null, TrainersLib: { user } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
});

router.get('/ClassTrainningPlanes',async(req,res)=>{
    console.log(req?.query.className)
    const className = req.query.className;
    try {
        
        const user =await TrainingPlansModel.find({className:className});
        if(user){
            console.log(user);
            res.send({ success: true, error: null, NewClass: { user } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        
        
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'An error occurred', info: null });
      }
});
module.exports = router;


