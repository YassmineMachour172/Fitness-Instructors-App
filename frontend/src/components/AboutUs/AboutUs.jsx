import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import logo from '../../images/logo.png'
import nadeen from '../../images/nadeen.jpeg'
import yassmine from '../../images/yassmine.jpeg'

const styleObj = {
    fontSize: 20,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
    }
/* Application manual Component */
const AboutUs = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */

    
    return (
        <div className="container">
            <div id='about-us' className='backgroundcol'>
                
                <div className="path">
                    <h5 className='pa'>Home--About us</h5>
                    <hr></hr>
                </div>
                
                <div className="navbar">
                    <div className="navbar-container">
                        <img src={logo} className="logo"/>
                       <div className="row">
                        <div className="col">
                            <img src={yassmine} className="yassmine" height={300} width={300}/>
                        </div>
                        <div className="col">
                        <p className='description'>
                        
                        Yassmine Machour {'\n'}
                        Software engineer student at ORT BRAUDE COLLEGE{'\n'}

                        Contact Yassmine : {'\n'}
                        *Yassmine.machour@e.braude.ac.il{'\n'}
                        *0545317545{'\n'}
                        
                           </p>
                
                        
                        
                            <br/>
                        </div>
                       </div>
                        <div className='picture-Yassmine'>
                            <br /><br />
                            <img src={yassmine} className="yassmine" height={300} width={300}/>
                            <br />
                        
                            <p className='description'>
                        
                        Yassmine Machour {'\n'}
                        Software engineer student at ORT BRAUDE COLLEGE{'\n'}

                        Contact Yassmine : {'\n'}
                        *Yassmine.machour@e.braude.ac.il{'\n'}
                        *0545317545{'\n'}
                        
                           </p>
                
                        
                        
                            <br/>
                            <br/> <br/>
                        </div>
                            <br /><br />
                       
                       <br/>
                       
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/>
                        <hr/>
                        
                        <center>
                            <div className="down-buttons">
                                <button className='home' onClick={() => navigate('/')}>Home</button>
                                <button className='sign-in' onClick={() => navigate('/')}>Sign In</button>
                                <button className='about-us' disabled >About Us</button>
                            </div>
                        </center>
                        
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;