import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'


/* Application manual Component */
const Description = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */

    /* function that navigate to the home page */
    const handleClickHome = () => {
        navigate('/Home');
    };
    /* function that navigate to the SignIn page */
    const handleClickSignIn=()=>{

    };
    /* function that navigate to the AboutUs page */
    const handleClickAboutUs=()=>{

    }
    
    return (
        <div className="container-fluid">
            <div id='ApplicationManual' className='backgroundcol'>
                
                <div className="path">
                    <h5 className='pa'>Home--{">"}Training Plans--{">"}Description</h5>
                    <hr></hr>
                </div>
                
                <div className="navbar">
                    <div className="navbar-container">
                        <img src={logo} className="logo"/>
                        <div className='picture-ApplicationM'>
                            <br /><br />
                        
                        </div>
                        <br />
                        <center>
                            <p className='descriptionApp'>
                           
                            </p>
                            <br/>
                            <br/>
                            <br/><br/>
                        </center><br/> <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/>
                        
                        <footer>
                        <hr/>
                        
                        <center>
                            <div className="down-buttons">
                                <button className='home' onClick={() => navigate('../..//')}>Home</button>
                                <button className='sign-in2' onClick={() => navigate('../../SignIn')}>Sign In</button>
                                <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                            </div>
                        </center>
                        </footer>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
