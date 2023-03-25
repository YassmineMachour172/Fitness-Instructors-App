import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import SignInpic from '../../images/SignInP.png'
import  { useState } from 'react';
/*import{ useHistroy } from 'react-router-dom';*/
/* Sign in Component */
const SignIn = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };
 
return (
        <div className="container-fluid">
            <div id='SignIn' className='backgroundcol'>
                <div className="path">
                    <h5 className='pa'>Home --{'>'} Sign In</h5>
                    <hr></hr>
                </div>
                <div className="navbar">
                    <div className="navbar-container">
                        <div /*className="row"*/>
                            <div className='picture-SignIn'>
                                <br /><br />
                                <img src={SignInpic} className="picture-SignIn"/>
                            </div>
                        </div>
                            <br /><br />
                            <center>
                                <div className="form">
                                        <div className="row">
                                            <div className="circle">
                                                <h1 className='questionMark'><center>?</center></h1>
                                            </div>
                                        </div>
                                        <form>
                                        <div className="input-container">
                                            <input type="email" name="uname" required placeholder='enter your email'/>**
                                                {renderErrorMessage("uname")}
                                        </div>
                                            <br/><br/><br/>
                                            <div className="input-container">
                                                <input type="password" name="pass" required placeholder='Enter a correct password' />**
                                                    {renderErrorMessage("pass")}
                                            </div>
                                            <br/><br/><br/>
                                            <div className="button-container">
                                                <input type="submit" className='doneBtn' value='Done'/>
                                            </div>
                                    </form>
                                </div>
                            </center>
                        <br />
                    
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/>
                        <hr/>
                        
                        <center>
                            <div className="down-buttons">
                                <button className='home2' onClick={() => navigate('../..//')} >Home</button>
                                <button className='sign-in2' disabled>Sign In</button>
                                <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                            </div>
                        </center>
                        
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
    
