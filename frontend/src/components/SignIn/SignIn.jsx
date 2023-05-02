import React, { useRef, useState, useEffect } from 'react';
import { logInSchema } from '../../Validations/FormsValidation';
import { useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import logo from '../../images/logo.png';
import SignInpic from '../../images/SignInP.png';
import { Modal, Button } from "react-bootstrap";
import { yupResolver } from '@hookform/resolvers/yup';
import md5 from 'md5';
import axios from 'axios';
const SignIn = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */
    const [msgModal, setMsgModal] = useState('');/*define state for the message modal box */
    const [showModal, setShow] = useState(false);/*define state for the modal box */
    const handleClickDashboard = () => {
        navigate('/Forgot');
    };
    /* function that navigates to the forgot password page */
    const handleClickForgotPassword = () => {
        navigate('/Forgot');
    };
    const handleClose = () =>{
        setShow(false);
        setMsgModal('');
   }
   /* function that open the modal and displays it*/
   const handleShow = () =>{
       setShow(true);
   }
    /* function that navigates to the sign up page */
    const handleClickSignUp = () => {
        navigate('/Register');
    };
    const handleClickMainTrainee = () => {
        navigate('/MainTrainee');
    };
    /* define useForm for the logIn form */
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    const signInForm = document.querySelector('#sign-in-form'); 
const submitForm = async (data, e) => {
    const email = signInForm.querySelector('#emailin').value;
    const password = signInForm.querySelector('#password').value;

    try{
        const res=await axios.post("http://localhost:8000/api/trainees/SignIn",{
         email,
         password   
    })
    console.log("requesting");
    console.log(res)
    
    if(res?.data?.success===false){
        console.log(res,"Invalid email or password")
        setMsgModal("Invalid email or password")
       handleShow()
    }
    if((res?.data?.success===true)){
        console.log("successful")
        handleClickMainTrainee()
   }
}catch(e){
    console.log(e)
}
}
    return (
        <footer>
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
                                <div className='border' >
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
                                        <form action="POST" id='sign-in-form' onSubmit={handleSubmit(submitForm)}>
                                            <div className="text-con">
                                                <center><input id="emailin" type="email" className="form-control form-control-user"
                                                    name="email" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." {...register('email')}/>**</center>
                                                {errors.email ? <p className='error-msg'>{errors.email?.message}</p> : <br/>} {/* display error message if the email is not valid */}
                                                <center><input id="password" type="password" className="form-control form-control-user"
                                                    name="password" placeholder="Password" {...register('password')}/>
                                                {errors.password ? <p className='error-msg'>{errors.password?.message}</p> : <br/>} {/* display error message if the password is not valid */}**</center>
                                                
                                            </div>
                                            <div className="forgot">
                                                <b><a className="small cursor-pointer" onClick={handleClickForgotPassword}>Forgot your password?</a></b>
                                            </div>
                                            <div className="submit-btn">
                                                <center><input type="submit" className='doneBtn' value='Done'/> </center>
                                            </div>
                                            </form>
                                            <center>
                                            <div className="row" id='new-account'>
                                            <b> <span>Don't Have An Account?</span><br/><a className="small cursor-pointer" onClick={handleClickSignUp}>Click me!</a></b>
                                            </div>
                                            </center>
                                        </div>
                                        <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='msg-modal-title'>ALERT!</Modal.Title>
                </Modal.Header>
                <Modal.Body><p className='msg-modal'>{msgModal}</p></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>  
                            </div>
                            </center>
                        
                    
                    <div className="row" >
                    
                    <center>
                            <div className="down-buttons">
                                <hr/>
                                <button className='home2' onClick={() => navigate('../..//')}>Home</button>
                                <button className='sign-in2' disabled >Sign In</button>
                                <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                            </div>
                        </center>
                    </div>

                </div></div> 
        </div>
        </footer>
    );
};
export default SignIn;