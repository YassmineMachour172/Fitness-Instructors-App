const express = require('express');
const cors = require('cors');
const axios = require('axios');
const  { MongoClient }  = require('mongodb');
//const { default: mongoose, connect } = require('mongoose');
const Trainee =require('./db/trainee')
var path = require('path');
var bodyParser = require('body-parser') //parse request parameters


const app = express() // Create express app
const port =  process.env.PORT || 8000 // Port to listen on


app.use(express.static(__dirname));  //specifies the root directory from which to serve static assets [images, CSS files and JavaScript files]
app.use(bodyParser.urlencoded({extended:true})); //parsing bodies from URL. extended: true specifies that req.body object will contain values of any type instead of just strings.
app.use(bodyParser.json()); //for parsing json objects

app.listen(8180);
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors()); 
const uri = 'mongodb+srv://yassminemach:Ya123456@cluster0.dxdqjyq.mongodb.net/mydb?retryWrites=true&w=majority';
  const client = new MongoClient(uri);
  async function connectToDatabase() {
    try {
      await client.connect();
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error(err);
    }
  }
connectToDatabase();
app.listen(port, () => {
  console.log(`Fitness-Instructor-App server listening on http://localhost:${port}`)
})