/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const ExerciseSchema = require("../db/ExerciseSchema");
const keywordSchema = require("../db/keywordSchema");
const ExerciseModel = mongoose.model("exercises", ExerciseSchema);


router.post("/Upload", async function (req, res) {
    const { title, location, description, email } = req?.body;
    console.log(req.body)
    const mail=email;
    
    try {
                    const user = await ExerciseModel.insertMany([{ title,
                        location,
                        description,
                        email}])
                    //NewTrainee.save().then((docs) => {
                        console.log("save to DB");
                   // });*/
                    res.send({ success: true, error: null, info: null });
               
    } catch (err) {
        res.send({ success: false, info: null, error: "Server error" });
    }
});

router.post('/TrainersLib',async(req,res)=>{

    const email = req.query.email;
    const name= req.query.ex;
    const keywords= req.query.Keywords;

    try {
        if(name!=null){
            const user = await TraineeModel.findOne({ email: email }).exec();
        const EX =await ExerciseModel.find({ex:name}).exec();
        if(EX){
            res.send({ success: true, error: null, TrainersLib: { user } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        }
        if(keywords!=null)
        {
            const user = await TraineeModel.findOne({ email: email }).exec();
            const key =await keywordSchema.find({keyword:keywords}).exec();
            if(key){
                res.send({ success: true, error: null, TrainersLib: { user } });
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
router.post('/NewClass',async(req,res)=>{

    const name= req.query.ClassName;
    const keywords= req.query.Keywords;

    try {
        if(name!=null){
            const classN = await TraineeModel.findOne({ className: name }).exec();
        
        if(classN){
            res.send({ success: true, error: null, NewClass: { classN } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        }
        if(Keywords!=null)
        {
            const key = await keywordSchema.findOne({ keyword: keywords }).exec();
            
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


module.exports = router;