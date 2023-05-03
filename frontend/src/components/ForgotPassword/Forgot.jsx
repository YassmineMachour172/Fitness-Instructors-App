import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
const Forgot = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
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
                                        <form action="POST" id='sign-in-form' >
                                            <div className="text-con">
                                                <div className='text' Style="color:Black;">Enter Email Address to recover your password :</div>
                                                <center><input id="emailin" type="email" className="form-control form-control-user"
                                                    name="email" aria-describedby="emailHelp"
                                                    placeholder="Email Address" {...register('email')}/>**</center>
                                                {errors.email ? <p className='error-msg'>{errors.email?.message}</p> : <br/>} {/* display error message if the email is not valid */}
                                                
                                              
                                                </div>
                                                </form>
                                                <center>
                                                <div className="RecoverButton">
                                                 <hr/>
                                                 <button className='RecoverButton' Style="background-color:#D6A650;" onClick={() => navigate('../..//')}>Recover </button>
                                
                                                 </div>
                                                 </center>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Forgot;