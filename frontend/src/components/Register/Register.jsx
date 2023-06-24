import React, { useRef,useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { signUpSchema } from '../../Validations/FormsValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import md5 from 'md5';
import { Modal, Button } from "react-bootstrap";
import '../../css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */
    const [showModal, setShow] = useState(false);/*define state for the modal box */
    const [msgModal, setMsgModal] = useState('');/*define state for the message modal box */
     /* function that close the modal and reset the message modal*/
     const handleClose = () =>{
        setShow(false);
        setMsgModal('');
   }
   /* function that open the modal and displays it*/
   const handleShow = () =>{
       setShow(true);
   }

    /* function that navigates to the home page */
    const handleClickHome = () => {
        navigate('/');
    };
 /* function that navigates to the MainTrainee page */
 const handleClickMainTrainee = () => {
    navigate('/MainTrainee');
};

    /* function that navigates to the log in page */
    const handleClickLogIn = () => {
        navigate('/SignIn');
    };
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(signUpSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    const signUpForm = document.querySelector('#sign-up-form');
    
        const submitForm = async ( e) => {
            e.preventDefault()
            const fName = signUpForm.querySelector('#fname').value;
            const lName = signUpForm.querySelector('#lname').value;
            const email = signUpForm.querySelector('#emailin').value;
            const phone = signUpForm.querySelector('#phone').value;
            const password1 = signUpForm.querySelector('#password1').value;
            const password2 = signUpForm.querySelector('#password2').value;
            try{
                console.log("54")
                const res=await axios.post("http://localhost:8000/api/trainees/Register",{
                 fName,
                 lName,
                 email,
                 phone,
                 password1,
                 password2   
            })
            console.log("63")

           
            if(res?.data?.info==="use exsit"){
                console.log(res,"the user is already exists")
                setMsgModal("the user is already exists")
               handleShow()
            }
           if((res?.data?.info===null)){
                console.log("successful")
                handleClickMainTrainee()
           }
           else{
            console.log("error",res.error)
           }
            }catch(e){
                console.log(e)
            }
        }
    
    return(
<div className="container">
    <div className='backgroundcol'>
    <div class="alert alert-warning" id='warning'>
    <strong>Warning!</strong> Indicates a warning that might need attention.
    </div>
<div className="card o-hidden border-0 shadow-lg my-5">
    <div className="card-body p-0">
        <div className="row">
            <div className="col-lg-7">
            
                <div className="p-3" id='boxes'>
                    <div className="text-center row" id='title'>
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form action="POST" id='sign-up-form' className="user" onSubmit={handleSubmit(submitForm)}>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" name="firstName"
                                    id='fname' placeholder="First Name" {...register('fName')}/>
                                {errors.fName ? <p className='error-msg'>{errors.fName?.message}</p> : <br/>} {/* display error message if the first name is not valid */}
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" name="lastName" id='lname'
                                    placeholder="Last Name" {...register('lName')}/>
                                {errors.lName ? <p className='error-msg'>{errors.lName?.message}</p> : <p className='space'>{'.'}</p>} {/* display error message if the last name is not valid */}
                            </div>
                        </div>
                        <div className="form-group row" id='email'>
                        <div className="col-sm-6">
                            <input type="email" className="form-control form-control-user" name="email" id='emailin'
                                placeholder="Email Address" {...register('email')}/>
                            {errors.email ? <p className='error-msg'>{errors.email?.message}</p> : <br/>} {/* display error message if the email is not valid */}
                            </div>
                            <div className="col-sm-6">
                            <input type="text" className="form-control form-control-user" name="phone" id='phone'
                                    placeholder="Phone Number" {...register('phone')}/>
                                {errors.phone ? <p className='error-msg'>{errors.phone?.message}</p> : <br/>} {/* display error message if the phone number is not valid */}
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user"id='password1'
                                    name="password" placeholder="Password" {...register('password')}/>
                                {errors.password ? <p className='error-msg'>{errors.password?.message}</p> : <br/>} {/* display error message if the password is not valid */}
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user" id='password2'
                                    name="repeatPassword" placeholder="Repeat Password" {...register('repeatPassword')}/>
                                {errors.repeatPassword ? <p className='error-msg'>errors.repeatPassword.message</p> : <p className='space2'>{'.'}</p>} {/* display error message if the repeat password is not valid */}
                            </div>
                        </div>
                        <div className="form-group row" id='sub'>
                            <input type="submit" className="btn btn-primary btn-user btn-block" value={'Register Account'} onClick={submitForm}></input> 
                        </div>
                    </form>
                    <hr/>
                    <div className="text-center">
                        <a className="small cursor-pointer" onClick={handleClickLogIn}>Already have an account? Login!</a>
                    </div>
                </div>
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
    <div className="row" >               
        <div className="down-buttons">
            <hr/>
            <button className='home2' onClick={() => handleClickHome()}>Home</button>
            <button className='sign-in2' disabled >Sign In</button>
            <button className='about-us' onClick={() => navigate('/about')}>About Us</button>
        </div>
    </div>
</div>
</div>
    );
    };
    export default Register;