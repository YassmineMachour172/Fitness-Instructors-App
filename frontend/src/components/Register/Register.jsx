import React, { useRef, useState, useEffect } from 'react';
import { logInSchema } from '../../Validations/FormsValidation';
import { useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import logo from '../../images/logo.png';

const Register = () => {
    return(
<div className="container-fluid">
           
<div className="col">

    <div className="row">
        <div className="path-con">
            <h5 className='pa'>Home --{'>'} Sign In</h5>
            <hr></hr>
        </div>
    </div>
    <div className="info">
        <h6>Please fill the following <b>FORM</b></h6>
    </div>
    <div className="row"><div className="col"><div className="col"></div></div></div>
    <div className="row"><div className="col"><div className="col"></div></div></div>
    <div className="row"><div className="col"><div className="col"></div></div></div>
    <div className="row"><div className="col"><div className="col"></div></div></div>
    <div className="row"><div className="col"><div className="col"></div></div></div>
    <div className="row"><div className="col"><div className="col"></div></div></div>

    <div className="row">
        <img src={logo} className="logo"/>
    </div>
    </div></div>

    );
    };
    export default Register;