import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import logo from '../../images/logo.png'
import nadeen from '../../images/nadeen.jpeg'
import yassmine from '../../images/yassmine.jpeg'

/* Application manual Component */
const AboutUs = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */

    
    return (
        <footer>
         <body>
        <div className="container-fluid">
        
        <div className="navbar">
        <div className="navbar-container">
            <div id='about-us' className='backgroundcol'>
                
                <div className="path">
                    <h5 className='pa'>Home--About us</h5>
                    <hr></hr>
                </div>
                <div className="header">
                <br/><br/>
                        <img src={logo} className="logo"/>
                       <div className="row">
                        <div className="col">
                        <div className="row">
                        <div className="col">
                            <img src={nadeen} className="picture-Nadeen" />
                        </div>
                        <div className="col">
                        <div className='descriptionAboutUs'>
                        Nadine Shanan
                        Software engineer student at ORT BRAUDE COLLEGE
                        Contact Nadine:
                        *nadeenmoradsh@gmail.com
                        *0509408199
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                       <div className="navbar">
                         <div className="navbar-container">
                          
                        <div className="row">
                           <div className="col">
                           <div className="row">
                        <div className="col">
                           <img src={yassmine} className="picture-Yassmine" />
                        </div>
                        <div className="col">
                           <div className='descriptionAboutUs'>
                           Yassmine Machour 
                           Software engineer student at ORT BRAUDE COLLEGE
                           Contact Yassmine : 
                           *Yassmine.machour@e.braude.ac.il
                           *0545317545
                           </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <center>
                            <div className="down-buttons">
                                <button className='home2' onClick={() => navigate('../..//')}>Home</button>
                                <button className='sign-in2' onClick={() => navigate('../../SignIn')}>Sign In</button>
                                <button className='about-us' disabled >About Us</button>
                            </div>
                        </center>
                        
                         
                    </div>
                    </div>
              
            </div>
        </div>
        </div>
        </body>
        </footer>
    );
};

export default AboutUs;