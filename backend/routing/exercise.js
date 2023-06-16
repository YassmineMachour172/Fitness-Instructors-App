/** @format */
const express = require("express");
const youtube = require('youtube-api');
const uuid = require('uuid/v4');
const cors = require('cors');
const open=require('open');
const multer =require('multer');
const router = express.Router();
const mongoose = require("mongoose");
const fs = require('fs');
const storage= multer.diskStorage({
    destination:'/',
    filename(req,file,cb){
        const newFileName = `${uuid()}-${file.originalname}`

        cb(null,newFileName)
    }
})

const uploadVideoFilel = multer({
    storage:storage
}).single("videoFile");

app.post('/Upload',uploadVideoFile,(req,res)=>{
    if(req.file){
        const filename=req.file.filename;
        const{title,description}=req.body;
        open(oAuth.generateAuthUrl({
            access_type:'offline',
            scope:'https://www.googleapis.com/auth/youtube.upload',
            state:JSON.stringify({
                filename,title,description
            })
        }))
    }
})

app.get('/oauth2callback',(req,res)=>{
    res.redirect('http://localhost:3000/#/TrainersLib')
    const {filename,title,description}=JSON.parse(req.query.state)

    oAuth.getToken(req.query.code,(err,tokens)=>{
        if(err){
            console.log(err);
            return;
        }

        oAuth.setCredentials(tokens)

        youtube.video.insert({
            resource:{
            snippet:{title,description},
            status:{privacyStatus:'private'}
        },
        part:'snippet,status',
        media:{
            body:fs.createReadStream(filename)
        }
        },(err,data)=>{
            console.log("Done");
            res.send("Done");
        })
    })
})
const oAuth = youtube.authenticate({
    type:'oauth',
    client_id:credentials.web.client_id,
    client_secret: credentials.web.client_secret,
    redirect_uri:credentials.web.redirect_uris[0]
})
const ExerciseSchema = require("../db/ExerciseSchema");
const credentials = require('../credentials.json');
const ExerciseModel = mongoose.model("exercises", ExerciseSchema);