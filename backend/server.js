const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { MongoClient } = require("mongodb");
var path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //parse request parameters

const userTrainees = require("./routing/trainees");
const userExercise = require("./routing/exercises");
const userClass = require("./routing/classes");
const userTrainer = require("./routing/trainers");
const userMyTrainee = require("./routing/myTrainees");
const userMessages = require("./routing/messages");
const usertrainingPlans = require("./routing/trainingPlans");

const app = express(); // Create express app
const port = process.env.PORT || 8000; // Port to listen on

//const uuid = uuidv4();
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

app.use("/api/trainees", userTrainees);
app.use("/api/exercises", userExercise);
app.use("/api/classes", userClass);
app.use("/api/trainers", userTrainer);
app.use("/api/myTrainees",userMyTrainee);
app.use("/api/messages",userMessages)
app.use("/api/trainingPlans",usertrainingPlans)

/* listen to port */
app.listen(port, () => {
    console.log(
        `Fitness-Instructor-App server listening on http://localhost:${port}`
    );
});