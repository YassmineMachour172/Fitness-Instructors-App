const express = require('express');
const cors = require('cors');
const axios = require('axios');
const  Mongoose  = require('mongodb');
const { default: mongoose, connect } = require('mongoose');
const Trainee =require('./db/trainee')

const app = express() // Create express app
const port =  process.env.PORT || 8000 // Port to listen on

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors()); 

//Database
const database =module.exports=() =>{
  const connectionParams = {
    useNewUrlParser :true,
    useUnifiedTopology: true,
  }
  try{
    mongoose.connect('mongodb+srv://yassminemach:Ya123456@cluster0.dxdqjyq.mongodb.net/mydb?retryWrites=true&w=majority',connectionParams)
    console.log('success')
  }catch(error){
    console.log(error)
    console.log('not successful');y
  }
 
  // Parse incoming request bodies in a middleware before your handlers
  //app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/SignIn",cors(),(req,res)=>{

  })
}



  app.post("/",async(req,res)=>{

    console.log("from serverrrrrrrrrrrrrrrrr" + req);

    const d={
      email:req.body.email,
      fName:"String",
      lName:"String",
      phone:"String",
      pass:req.body.password,
      age:5,
      gender:"String",
      weight:6,
      height:6,
      Status:0
    }
    console.log (d);
    await Trainee.insertMany([d])

  })

database();



/* listen to port */
app.listen(port, () => {
  console.log(`Fitness-Instructor-App server listening on http://localhost:${port}`)
})
