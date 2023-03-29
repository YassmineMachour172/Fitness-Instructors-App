import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
const Forgot = () => {
    const navigate = useNavigate();
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
            </div>
        </div>/**Container-fluid */
    );
};

export default Forgot;