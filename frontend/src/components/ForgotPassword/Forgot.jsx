import React, { useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";
const Forgot = () => {
    const navigate = useNavigate();
    const [showModal, setShow] = useState(false);/*define state for the modal box */
    const [msgModal, setMsgModal] = useState('');/*define state for the message modal box */
     /* function that close the modal and reset the message modal*/
     const handleClickLogIn=()=>{
        navigate('https://localhost:3000/#/SignIn');
     }
     const handleClose = () =>{
        setShow(false);
        setMsgModal('');
   }
   /* function that open the modal and displays it*/
   const handleShow = () =>{
       setShow(true);
   }
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    
    const forgetForm = document.querySelector('#forgot-form'); 
    const submitForm = async ( e) => {
        console.log("finishing the form")
        const email = forgetForm.querySelector('#emailin').value;
    /* define the request message */
    try{
        /* send the request to the server */
        console.log("before post")

        const res=await axios.post("https://localhost:8000/api/trainees/Forgot",{
         email 
        })
        console.log("requesting");
        console.log(res)

        if (res?.data?.error==="Email Doesn't Exist") { /* if the response is not ok, alert the user */
            setMsgModal('Invalid Details');/* if the response is not ok, alert the user */
            handleShow();
            return;
        }
        /* if the response is ok, alert the user */
        const responseData = await res.json();
       console.log(responseData);
        setMsgModal('Sent! Check your mail.');/* if the response is not ok, alert the user */
        handleShow();
        handleClickLogIn();
    }catch(e){
        console.log(e)
    }
    };
    return (
        <div className="container-fluid">
            <div className="col">
            <div className="row">
                        <div className="path-con">
                            <h5 className='pa'>Sign In --{'>'} Forgot Password</h5>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="row">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className='row'>
                    <div className="row" id='form-con'>
                                        <form action="POST" id='forgot-form' onSubmit={handleSubmit(submitForm)} >
                                            <div className="text-con">
                                                <div className='text' Style="color:Black;">Enter Email Address to recover your password :</div>
                                                <center><input id="emailin" type="email" className="form-control form-control-user"
                                                    name="email" aria-describedby="emailHelp"
                                                    placeholder="Email Address" {...register('email')}/>**</center>
                                                {errors.email ? <p className='error-msg'>{errors.email?.message}</p> : <br/>} {/* display error message if the email is not valid */}
                                                <center><input type="submit" className="btn btn-primary btn-user btn-block" value={'Recover'} onClick={submitForm}/></center>
                                              
                                                </div>
                                                </form>
                    </div>
            </div>
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
    );
};

export default Forgot;