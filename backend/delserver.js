/*import Register from'./components/Register/Register'*/
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const  Mongoose  = require('mongodb');
const { default: mongoose, connect } = require('mongoose');
const Trainee =require('./db/trainee')
const Register =require('./frontend/src/components/Register')
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
    console.log('not successful');
  }
 
  // Parse incoming request bodies in a middleware before your handlers
  app.use(bodyParser.urlencoded({ extended: false }));
  /**app.get("../SignIn",cors(),(req,res)=>{

  })*/
}
/** POST request to sign up 
app.post('../Register',async (req, res) => {
  console.log("POST Sign-Up")

  const d ={
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
  console.log(d)
  //await Trainee.insertMany([d])
})
  /**app.post("/Register",async(req,res)=>{
    if (req.body.title !== "Register") { // check if the request is valid
      res.status(400)
      res.send("Bad Request.")
      return
  }
  /** 
   * Check if user already exist
   * 
   * 
   * 
   * 
   * 
   *   
   * */


  /**
   *  Insert new user 
   */
   // console.log("insert new user" + req);

    /**const d={
      email:req.body.email,
      fName:req.body.fName,
      lName:req.body.lName,
      phone:req.body.phone,
      pass:req.body.password,
      age:5,
      gender:"String",
      weight:6,
      height:6,
      Status:0
    }
    console.log (d);
    await Trainee.insertMany([d])
    // define the response message
    /**
    const signUpMsg = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
          {
              title: 'Register',
              signUpResult: 'OK',
          })
    }

    res.type('application/json')
    res.send(signUpMsg) // send the response 
  })*/

database();



/* listen to port */
app.listen(port, () => {
  console.log(`Fitness-Instructor-App server listening on http://localhost:${port}`)
})
