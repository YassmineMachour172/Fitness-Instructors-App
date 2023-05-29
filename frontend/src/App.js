import { HashRouter as Router, Routes , Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from './components/Home/home';
import AppM from './components/ApplicationManual/AppM'
import About from './components/AboutUs/AboutUs'
import SignIn from './components/SignIn/SignIn'
import Forgot from './components/ForgotPassword/Forgot'
import Register from'./components/Register/Register'
import MainTrainee from './components/MainTrainee/MainTrainee'
import Info from './components/Info/Info'
import MyClassesTrainee from './components/MyClassesTrainee/MyClassesTrainee'
import TraineeMessage from './components/TraineeMessage/TraineeMessage'
import Profile from './components/Profile/Profile'
import NewClass from './components/NewClassTrainee/NewClass'
import MainTrainer from './components/MainTrainer/MainTrainer'
import Statics from './components/Statics/Statics'
import StartVideo from './components/StartVideo/StartVideo'
import Description from './components/Description/Description'
import TrainerMessage from './components/TrainerMessage/TrainerMessage'
import MyClassesTrainer from './components/MyClassesTrainer/MyClassesTrainer'
import CreateNewClass from './components/CreateNewClass/CreateNewClass'
import MyTainee from './components/MyTrainee/MyTrainee'
import TrainersLib from './components/TrainersLib/TrainersLib'
import UploadeNewEx from './components/UploadNewEx/UploadeNewEx';
import TrainersLibAfterSearch from './components/TrainersLibAfterSearch/TrainersLibAfterSearch'
import TrainningPlanes from './components/TrainningPlanes/TrainningPlanes'
import NewCLassAfterSearch from './components/NewClassAfterSearch/NewClassAfterSearch'
import './App.css';

function App() {
  /**
   * This sends an HTTP GET request from 
   * React to the npm api to search for all react packages 
   * using the query q=react, then assigns the total returned 
   * in the response to the component state property 
   * totalReactPackages so it can be displayed in the render() method.
   */

    <Router basename="/Register"></Router>
    const [message, setMessage] = useState("");
    const API_URL= "/Register";
  useEffect(() => {
     
      const fetchItems = async () =>{
        try{
         const respons=await fetch("http//localhost:8000/");
         const listUsers= await respons.json();
         console.log(listUsers);
        }catch(err){
            console.log(err.stack);
        }
        try{
          const respons=await fetch("/Register");
          const listUsers= await respons.json();
          console.log(listUsers);
         }catch(err){
             console.log(err.stack);
         }
      } 
      (async()=> await fetchItems())();
  }, []);
  return (
    <div id='App'>
        {/* Router is the parent component of all other components. It is used to route the user to the desired component. */}
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="AppM" element={<AppM/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="SignIn" element={<SignIn/>}/>
                <Route path="Forgot" element={<Forgot/>}/>
                <Route path="Register" element={<Register/>}/>
                <Route path="MainTrainee" element={<MainTrainee/>}/>
                <Route path="Info" element={<Info/>}/>
                <Route path="MyClassesTrainee" element={<MyClassesTrainee/>}/>
                <Route path="Profile" element={<Profile/>}/>
                <Route path="NewClass" element={<NewClass/>}/>
                <Route path="MainTrainer" element={<MainTrainer/>}/>
                <Route path="Statics" element={<Statics/>}/>
                <Route path="StartVideo" element={<StartVideo/>}/>
                <Route path="Description" element={<Description/>}/>
                <Route path="TraineeMessage" element={<TraineeMessage/>}/>
                <Route path="TrainerMessage" elemnt={<TrainerMessage/>}/>
                <Route path="MyClassesTrainer" element={<MyClassesTrainer/>}/>
                <Route path="CreateNewClass" element={<CreateNewClass/>}/>
                <Route path="MyTrainee" element={<MyTainee/>}/>
                <Route path="TrainersLib" element={<TrainersLib/>}/>
                <Route path="UploadeNewEx" element={<UploadeNewEx/>}/>
                <Route path="TrainersLibAfterSearch" element={<TrainersLibAfterSearch/>}/>
                <Route path="TrainningPlanes" element={<TrainningPlanes/>}/>
                <Route path="NewCLassAfterSearch" element={<NewCLassAfterSearch/>}/>
                
            </Routes> 
        </Router>  
        
    </div>
);
}


  
export default App;
