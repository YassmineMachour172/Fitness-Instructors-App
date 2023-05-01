const express = require('express');
const cors = require('cors');
const axios = require('axios');
const  { MongoClient }  = require('mongodb');
var path = require('path');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser') //parse request parameters



const app = express() // Create express app
const port =  process.env.PORT || 8000 // Port to listen on
const Trainee=mongoose.model('trainees',{
  email:String,
  fName:String,
  lName:String,
  phone:String,
  pass:String,
  age:Number,
  gender:String,
  weight:Number,
  height:Number,
  Status:Number
})

app.use(express.static(__dirname));  //specifies the root directory from which to serve static assets [images, CSS files and JavaScript files]

app.use(bodyParser.urlencoded({extended:true})); //parsing bodies from URL. extended: true specifies that req.body object will contain values of any type instead of just strings.
app.use(bodyParser.json()); //for parsing json objects


app.listen(8180);
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors()); 




  const uri = 'mongodb+srv://yassminemach:Ya123456@cluster0.dxdqjyq.mongodb.net/mydb?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


  async function connectToDatabase() {
    try {
      await client.connect();
      console.log('Connected to MongoDB Atlas');
      
      
    } catch (err) {
      console.error(err);
    }
  }

connectToDatabase();

 app.post('/Register', function (req, res)  {
  //console.log(req.body)
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
       const collection1 = client.db('mydb').collection('trainees');
       console.log("line 71")

      const dbName = 'mydb';
      const db = client.db(dbName);
      const collection = db.collection('trainees');
      MongoClient.db('mydb').collection('trainees').find({}).toArray(function(err, docs) {
    if (err) throw err;
    console.log(docs);  });
      
       const result = collection1.insertOne(trainee);
       res.send({ data: 'User created successfully!' ,error:null });
     } catch (err) {
       res.send({ data:null, error: 'Server error' });
     }
 });
 
/* listen to port */

app.listen(port, () => {
  console.log(`Fitness-Instructor-App server listening on http://localhost:${port}`)
})