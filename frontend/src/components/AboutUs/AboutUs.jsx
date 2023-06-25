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

    localStorage.removeItem('saved');/* save the email in the local storage*/ 
    /*in the follwoing section the about us will be displayed that contains the names and titles of the founders of the app and also two photos */
    return (
        
         <center>
        <div className="container-fluid">
        
        <div className="navbar">
        <div className="navbar-container">
            <div id='about-us' className='col'>
                
                <div className="path">
                    <h5 className='pa'>Home--About us</h5>
                    <hr></hr>
                </div>
                <div className="header">
                <br/><br/>
                        <img src={logo} className="logo"/>
                       <br/>
                       <br/>
                        <div className="col">
                        <div className="row">
                            <img src={nadeen} className="picture-Nadeen" />
                        </div>
                        <div className="row">
                        <div className='descriptionAboutUs'>
                        Nadine Shanan<br/>
                        Software engineer student at ORT BRAUDE COLLEGE<br/>
                        Contact Nadine:<br/>
                        *nadeenmoradsh@gmail.com<br/>
                        *0509408199<br/>
                        </div>
                        </div>
                        <div className='row'>
                        <img src={yassmine} className="picture-Yassmine" />
                        </div>
                        <div className="row">
                           <div className='descriptionAboutUs'>
                           Yassmine Machour <br/>
                           Software engineer student at ORT BRAUDE COLLEGE<br/>
                           Contact Yassmine : <br/>
                           *Yassmine.machour@e.braude.ac.il<br/>
                           *0545317545<br/>
                           </div>
                        </div>
                        <div className='row'>
                        <center>
                            <div className="down-buttons">
                                <button className='home2' onClick={() => navigate('/')}>Home</button>
                                <button className='sign-in2' onClick={() => navigate('/SignIn')}>Sign In</button>
                                <button className='about-us2' disabled >About Us</button>
                            </div>
                        </center>
                        </div>
                    </div>
                    
                        
                           
                       
                        
                        </div>
                        
                       
                        
                         
                    </div>
                    </div>
              
            </div>
        </div>
        
        </center>
        
    );
};

export default AboutUs;