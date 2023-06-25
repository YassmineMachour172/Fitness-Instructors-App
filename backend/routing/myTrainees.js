/** @format */
const express = require("express");
const cors = require('cors');
const router = express.Router();
const mongoose = require("mongoose");
const myTraineeSchema = require("../db/myTraineeSchema");
const myTraineeModel = mongoose.model("myTrainees", myTraineeSchema);



/*router.get('/MyTrainee',async(req,res)=>{

    const email = req.query.email;

    try {
        
        const user = await myTraineeModel.find({ email: email });
        
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
