/** @format */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TraineeSchema = require("../db/TraineeSchema");
const TraineeModel = mongoose.model("trainees", TraineeSchema);
const { validate } = require("check-email-validation");
const nodemailer =require('nodemailer');
const bcrypt = require('bcrypt');

router.post("/Register", function (req, res) {
    const { email, fName, lName, phone, password1 } = req?.body;
    console.log(req.body)
    let NewTrainee = new TraineeModel({
        email,
        fName,
        lName,
        phone,
        password1,
        age: 0,
        gender: 0,
        weight: 0,
        height: 0,
        Status: 0,
    });
    try {
        if (validate(email)) {
            TraineeModel.findOne({
                email: email,
            }).then(async function (doc) {
                if (doc?.length === 0 || doc?.length === [] || !doc) {
                    const user = await TraineeModel.insertMany([{ email,
                        fName,
                        lName,
                        phone,
                        password1,
                        age: 0,
                        gender: 0,
                        weight: 0,
                        height: 0,
                        Status: 1,}])
                    //NewTrainee.save().then((docs) => {
                        console.log("save to DB");
                   // });*/
                    res.send({ success: true, error: null, info: null });
                } else {
                    res.send({
                        success: false,
                        error: true,
                        info: "use exsit",
                    });
                }
            });
        } else {
            res.send({
                success: false,
                error: "Email is not Valid",
                info: null,
            });
        }
    } catch (err) {
        res.send({ info: null, error: "Server error" });
    }
});


  
router.post("/SignIn",  async function (req, res) {
    const { email, password1 } = req?.body;
    const user = await TraineeModel.findOne({ email });
    if (user===[]) {
        res.send({success:false,error:"Invalid email",info:null})
      }
    /*if(user.Status===1){
        res.send({
            success:false,
            error:"Already loged In",
            info:null
        })
    }*/
      //const validPassword = bcrypt.compare(pass, user.pass);
    if (!(password1===user.password1)) {
        res.send({
            success:false,
            error:"Invalid password",
            info:null
        })
    }
    const tr = await TraineeModel.updateOne(
        { email: req.body.email },
        { $set: { Status: 1 } }
      );
    res.send({
        success:true,
        error:null,
        info:'Logged in successfully'
    });
});

router.post('/Forgot', async (req, res) => {
    console.log("POST Forgot")
    
    /* Check if user already exist */
    const { email } = req?.body?.email;
    const user = await TraineeModel.findOne({ email });
    console.log(user)
   
      if(user===[]){
        res.status(400)
        res.send({success:false,error:"Email Doesn't Exist",info:null})
        return
      }
      // create transport for the email
      let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'Workoutin.Team@hotmail.com',
            pass: 'Project2023'
        },
        tls : { rejectUnauthorized: false }
    });

    // define the email
    let mailOptions ={
        from:'Workoutin.Team@hotmail.com',
        to: req.body.email,
        subject: 'Reset Password',
        text: 'Hello,\nEnter the following link to reset password:\nhttp://localhost:3000/#/resetPassword'
    };

    // send the email
    transporter.sendMail(mailOptions, function(err,info){
        if(err){
            console.log(err);
            return;
        }
        console.log("sent: "+info.response);
    })

    // define the response message
    const forgotPasswordMsg = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
        {
            title: 'forgotPasswordMsg',
            signUpResult: 'OK',
        })
    }
    res.type('application/json')
        res.send(forgotPasswordMsg) // send the response
    
});



router.post('/ResetPassword', async (req, res) => {
    console.log("POST resetPassword")
    console.log(req.body)

    try{
        const tr = await TraineeModel.updateOne(
            { email: req.body.email },
            { $set: { password1: req.body.password1 } }
          );
          
          console.log(tr.nModified + " document(s) updated");
          
        /*const tr=TraineeModel.updateMany({email:req.body.email},{$set:{password1:req.body.password1}},function(err,res){
            if( err) throw err;
            console.log(res.result.nModified + " document(s) updated");
        })*/
       /*const user = await TraineeModel.updateOne({ email: req.body.email }, { $set: { password1: req.body.password1 } }, function(err, result) {
            if (err) {
              console.log(err);
              return;
            }});*/
        res.send({success:true,error:null,info:'Logged in successfully'});
        
        /*console.log(user)
        if (user.affectedRows === 0) {
            res.status(400)//bad request
            res.send("Invalid email parameters.")
            return
        }*/

        // define the response message
        /*const resetPasswordMsg = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    title: 'resetPassword',
                    resetPasswordResult: 'OK',
                })
        }
        res.type('application/json')
        res.send(resetPasswordMsg) // send the response*/
    }catch(e){
        console.log(e);
    }
})

//profile get
router.get('/Profile', async (req, res) => {
    const email = req.query.email;
    console.log(email, "gettttttt");
  
    try {
      const user = await TraineeModel.findOne({ email: email }).exec();
      res.send({ success: true, error: null, info: { user } });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, error: 'An error occurred', info: null });
    }
  });

  router.post('/Profile', async (req, res) => {
    console.log("POST resetPassword");
    console.log(req.body);
    const { fName, email, phone, age, gender, height, weight } = req.body;
  
    try {
      const tr = await TraineeModel.updateOne(
        { email: email }, // Use email directly from req.body
        {
          $set: {
            fName: fName,
            email: email,
            phone: phone,
            age: age,
            gender: gender,
            height: height,
            weight: weight
          }
        }
      );
  
      console.log(tr.nModified + " document(s) updated");
      res.send({ success: true, error: null, info: 'Fields updated successfully' });
    } catch (e) {
      console.log(e);
      res.status(500).send({ success: false, error: 'An error occurred', info: null });
    }
  });
module.exports = router;
