import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import logo from '../../images/logo.png'
import SignInpic from '../../images/SignInP.png'
import  { useState } from 'react';

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid">
           
                <div className="col">

                    <div className="row">
                        <div className="path-con">
                            <h5 className='pa'>Home --{'>'} Sign In</h5>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="row">
                        <img src={logo} className="logo"/>
                    </div>

                    <div className="row-lg-2">
                    <br /><br />
                        <img src={SignInpic} className="picture-SignIn"/>
                    </div>
                        <div className="row-lg-7">
                            
                                <br/>
                                <br/>
                                <center>
                                <div className='cont' >
                                    <div className="row">
                                        <center>
                                            <div className="circle">
                                                <center>
                                                    <h1 className='questionMark'>?</h1>
                                                </center>
                                            </div>
                                        </center>
                                        <br/>
                                    </div>
                                        <div className="row" id='form-con'>
                                        <form>
                                            <div className="text-con">
                                                <center><input type="email" className='inputs' name="uname" required placeholder='Enter your email'/>**</center>
                                                <center><input type="password" className='inputs' name="pass" required placeholder='Enter a correct password' />**</center>
                                            </div>
                                            <div className="forgot">
                                                <b><a className="forA" href='#'>Forgot your password?</a></b>
                                            </div>
                                            <div className="submit-btn">
                                                <center><input type="submit" className='doneBtn' value='Done'/> </center>
                                            </div>
                                            </form>
                                            <div className="row" id='new-account'>
                                            <b> <span>Don't Have An Account?</span><br/><a href='#'>Click Here!</a></b>
                                            </div>
                                        </div>
                                        
                            </div>
                            </center>
                        </div> 
                    
                    <div className="row" >
                    
                    <center>
                            <div className="down-buttons">
                                <hr/>
                                <button className='home' onClick={() => navigate('../..//')}>Home</button>
                                <button className='sign-in' disabled >Sign In</button>
                                <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                            </div>
                        </center>
                    </div>

                </div>
        </div>/*container-fluid*/
    );
};

export default SignIn;