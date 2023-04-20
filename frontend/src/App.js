import { HashRouter as Router, Routes , Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from './components/Home/home';
import AppM from './components/ApplicationManual/AppM'
import About from './components/AboutUs/AboutUs'
import SignIn from './components/SignIn/SignIn'
import Forgot from './components/ForgotPassword/Forgot'
import Register from'./components/Register/Register'

import './App.css';

function App() {
    const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/SignIn")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
      fetch("http://localhost:8000/Register")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
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
            </Routes> 
        </Router>  
        
    </div>
);
}

export default App
