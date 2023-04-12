const express = require('express');
const cors = require('cors');
const  Mongoose  = require('mongodb');
const { default: mongoose, connect } = require('mongoose');

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
 

}

database();
/* listen to port */
app.listen(port, () => {
  console.log(`Fitness-Instructor-App server listening on http://localhost:${port}`)
})
