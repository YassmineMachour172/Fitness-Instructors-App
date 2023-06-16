const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { MongoClient } = require("mongodb");
var path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //parse request parameters
const app = express(); // Create express app
const port = process.env.PORT || 8000; // Port to listen on
const youtube = require('youtube-api');
const uuid = require('uuid/v4');
const open=require('open');
const multer =require('multer');
const fs = require('fs');
const url =
    "mongodb+srv://yassminemach:Ya123456@cluster0.dxdqjyq.mongodb.net/mydb?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//
//
// when you wants to trigre trainees API and run trainees schema you shoudld pass this URL /api/trainees/Register
// you need to replace the /Register  with /api/trainees/
// evrey API call should start with /api and then the schema name for example if you want to use users schema should be /api/users/...
//
//
//

app.use(express.static(__dirname)); //specifies the root directory from which to serve static assets [images, CSS files and JavaScript files]
app.use(bodyParser.urlencoded({ extended: true })); //parsing bodies from URL. extended: true specifies that req.body object will contain values of any type instead of just strings.
app.use(bodyParser.json()); //for parsing json objects
app.listen(8180);
app.use(cors());

const userTrainees = require("./routing/trainees");
const userExercise = require("./routing/exercise");
app.use("/api/trainees", userTrainees);const storage= multer.diskStorage({
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


/* listen to port */
app.listen(port, () => {
    console.log(
        `Fitness-Instructor-App server listening on http://localhost:${port}`
    );
});