/*import Register from'./components/Register/Register'*/
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const  { MongoClient }  = require('mongodb');
//const { default: mongoose, connect } = require('mongoose');
const Trainee =require('./db/trainee')
var path = require('path');
//var bodyParser = require('body-parser') //parse request parameters


const app = express() // Create express app
const port =  process.env.PORT || 8000 // Port to listen on


app.use(express.static(__dirname));  //specifies the root directory from which to serve static assets [images, CSS files and JavaScript files]
//app.use(bodyParser.urlencoded({extended:true})); //parsing bodies from URL. extended: true specifies that req.body object will contain values of any type instead of just strings.
//app.use(bodyParser.json()); //for parsing json objects

app.listen(8180);
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors()); 

/*const database =module.exports=() =>{
  const connectionParams = {
    useNewUrlParser :true,
    useUnifiedTopology: true,
  }*/
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
  /*try{
    mongoose.connect('mongodb+srv://yassminemach:Ya123456@cluster0.dxdqjyq.mongodb.net/mydb?retryWrites=true&w=majority',connectionParams)
    console.log('success')
  }catch(error){
    console.log(error)
    console.log('not successful');
  }*/

//}
connectToDatabase();

/*app.get('/Register',cors(), (req, res) => {
  
  //res.sendFile(path.join(__dirname + '/Home.jsx'));
  console.log("5666666666666")
 
});*/
app.post('/Register',async (req, res) => {
  console.log("Register Post Request")
  
  const trainee =new Trainee({
    email:req.body.email,
    fName:req.body.fName,
    lName:req.body.lName,
    phone:req.body.phone,
    pass:req.body.password1,
    age:5,
    gender:"String",
    weight:6,
    height:6,
    Status:0}) 
  await Trainee.insertMany([trainee]);
});
 /*app.post('/Register', function (req, res)  {
   console.log(req);
   const trainee=new Trainee({
     email:req.body.email,
     fName:req.body.fName,
     lName:req.body.lname,
     phone:req.body.phone,
     pass:req.body.password1,
     age:0,
     gender:0,
     weight:0,
     height:0,
     Status:0})  
     try {
       const collection = client.db('mydb').collection('trainees');
       const result = collection.insertOne(trainee);
       console.log(result);
       res.status(201).json({ message: 'User created successfully!' });
     } catch (err) {
       console.error(err);
       res.status(500).json({ message: 'Server error' });
     }
   // TODO: Create a new user in the database
   /**res.send("user: " + req.body.user + " password: " + req.body.password);
 });*/
/* listen to port */
app.listen(port, () => {
  console.log(`Fitness-Instructor-App server listening on http://localhost:${port}`)
})
