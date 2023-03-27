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
            <div id='SignIn' className='backgroundcol'>


                <div className="path-con">
                    <h5 className='pa'>Home --{'>'} Sign In</h5>
                    <hr></hr>
                </div>


                <img src={logo} className="logo"/>

                
                <div className='picture-SignIn'>
                    <br /><br />
                    <img src={SignInpic} className="picture-SignIn"/>
                </div>


                <br /><br />

                <center>
                    <div className="form">
                        <div className="row"><center>
                            <br/>
                            <div className="circle"><center>
                                <h1 className='questionMark'>?</h1></center>
                            </div></center>
                        </div>
                        <br/><br/><br/>
                        <form>
                            <div className="input-container">

                                <div className="row">
                                    <center><input type="email" className='inputs' name="uname" required placeholder='Enter your email'/>**</center>
                                </div>

                                <br/><br/><br/>

                                <div className="row">
                                    <center><input type="password" className='inputs' name="pass" required placeholder='Enter a correct password' />**</center>
                                </div>

                                <br/>

                                <div className="row">
                                    <center><input type="submit" className='doneBtn' value='Done'/> </center>
                                </div>

                            </div> <br/>
                        <br/> 
                        <br/><br/><br/><br/>
                        </form>
                        
                    </div>
                </center>

                <hr/>
                <footer>
                    <center>
                        <div className="down-buttons">
                            <button className='home' onClick={() => navigate('../..//')}>Home</button>
                            <button className='sign-in' disabled >Sign In</button>
                            <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                        </div>
                    </center>
                </footer>
            </div>
        </div>
    );
};

export default SignIn;