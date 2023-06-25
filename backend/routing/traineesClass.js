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


module.exports = router;
