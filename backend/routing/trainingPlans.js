/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const trainingPlansSchema = require("../db/trainingPlansSchema");
const TrainingPlansModel = mongoose.model("trainingPlans", trainingPlansSchema);
var count=0;
function increase(){
    count++;
}
router.post("/TrainersLibSelect", async function (req, res) {
    const {exercisetitle,className,description,trainerEmail }  = req?.body;
    console.log(req.body)
    try {
                    const user = await TrainingPlansModel.insertMany([{exercisetitle,className,description,trainerEmail}])
                        console.log("save  training to DB");
                        increase();
                    res.send({ success: true, error: null, info: user. trainingNum});
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


module.exports = router;


