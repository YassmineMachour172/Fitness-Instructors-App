/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const ExerciseSchema = require("../db/ExerciseSchema");
const keywordSchema = require("../db/keywordSchema");
const ExerciseModel = mongoose.model("exercises", ExerciseSchema);
const KeywordModel = mongoose.model("keyword", keywordSchema);


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

router.get('/TrainersLib',async(req,res)=>{

    const email = req.query.email;
    const name= req.query.ex;
    const keywords= req.query.Keywords;

    try {
        if(name){
        const user =await ExerciseModel.find({email:email},{title:name});
        if(user){
            res.send({ success: true, error: null, TrainersLib: { user } });
        } else{
            console.error(error);
            res.status(500).send({ success: false, error: 'no results found', info: null });
            }
        }
        if(keywords)
        {
            
            const user =await KeywordModel.find({email:email},{keyword:keywords});
            if(user){
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



module.exports = router;