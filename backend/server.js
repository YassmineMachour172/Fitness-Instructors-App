const express = require('express');
const cors = require('cors');
const  Mongoose  = require('mongodb');
const { default: mongoose, connect } = require('mongoose');
const Trainee =require('./db/trainee')

const app = express() // Create express app
const port =  process.env.PORT || 8000 // Port to listen on

app.use(express.json());
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
    console.log('not successful')
  }
 
  
    app.post('/logIn', (req, res) => {
      console.log("POST login")
    
      if (req.body.title !== "LogIn") { // check if the request is valid
          res.status(400)
          res.send("Bad Login Request.")
          return
      }
    
      /* retrieve user from db */
      const trainee=new Trainee({email:"String",
        email:req.body.email,
        fName:"String",
        lName:"String",
        phone:"String",
        pass:req.body.password,
        age:5,
        gender:"String",
        weight:6,
        height:6,
        Status:0})
        console.log(trainee)
        trainee.save()
        console.log(trainee)
       // define the response message
      const resMsg = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
                title: 'signUp',
                signUpResult: 'OK',
            })
    }
      res.type('application/json')
      res.send(resMsg) // send the response
    });
    
  }


database();



/* listen to port */
app.listen(port, () => {
  console.log(`Fitness-Instructor-App server listening on http://localhost:${port}`)
})
