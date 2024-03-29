/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const ExerciseSchema = require("../db/ExerciseSchema");
const keywordSchema = require("../db/ExerciseKeywordSchema");
const ExerciseModel = mongoose.model("exercises", ExerciseSchema);
const KeywordModel = mongoose.model("Exercisekeyword", keywordSchema);


router.post("/Upload", async function (req, res) {
    const {title,location,description,email,keywords}  = req?.body;
    console.log(req.body)
    try {
                    const user = await ExerciseModel.insertMany([{ title,
                        location,
                        description,
                        email}])
                        console.log("save  exercise to DB");
                    const key=await KeywordModel.insertMany([{listNum:1,keywords,title}])
                    console.log("save  exercise to DB")
                    res.send({ success: true, error: null, info: null });
    } catch (err) {
        //res.send({ success: false, info: null, error: "Server error" });
        console.log(err)
    }
});

router.post("/UploadeNewEx", async function (req, res) {
    const {title,location,description,email,keywords}  = req?.body;
    console.log(req.body)
    try {
                    const user = await ExerciseModel.insertMany([{ title,
                        location,
                        description,
                        email,keywords}])
                        console.log("save  exercise to DB");
                  
                    res.send({ success: true, error: null, info: null });
    } catch (err) {
        //res.send({ success: false, info: null, error: "Server error" });
        console.log(err)
    }
});


router.post("/UploadeNewEx", async function (req, res) {
    const {title,location,description,email,keywords}  = req?.body;
    console.log(req.body)
    try {
                    const user = await ExerciseModel.insertMany([{ title,
                        location,
                        description,
                        email,keywords}])
                        console.log("save  exercise to DB");
                  
                    res.send({ success: true, error: null, info: null });
    } catch (err) {
        //res.send({ success: false, info: null, error: "Server error" });
        console.log(err)
    }
});


router.get('/TrainersLib',async(req,res)=>{
    console.log(req?.query.email)
    const email = req.query.email;
    try {
        
        const user =await ExerciseModel.find({email:email});
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
router.get('/TrainersLibSelect',async(req,res)=>{
    console.log(req?.query.email)
    const email = req.query.email;
    try {
        
        const user =await ExerciseModel.find({email:email});
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
    console.log(req?.query.exercisetitle)
    const exercisetitle = req.query.exercisetitle;
    try {
        
        const user =await ExerciseModel.find({exercisetitle:exercisetitle});
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
router.delete('/TrainersLib',async(req,res)=>{
    console.log(req?.query.title)
    const title = req.query.title;
    try {
        
        const user =await ExerciseModel.deleteOne({title:title});
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