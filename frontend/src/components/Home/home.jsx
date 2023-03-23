import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import logo from '../../images/logo.png'
import pic from '../../images/pic.jpg'
/*import{ useHistroy } from 'react-router-dom';*/
/* Home Component */
const Home = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */

    /* function that navigate to the logIn page */
    
    
    
    
    return (
        <div className="container">
            <div id='home' className='backgroundcol'>
                
                <div className="path">
                    <h5 className='pa'>Home</h5>
                    <hr></hr>
                </div>
                
                <div className="navbar">
                    <div className="navbar-container">
                        <img src={logo} className="logo"/>
                        <div className='picture-home'>
                            <br /><br />
                            <img src={pic} className="pic"/>
                        </div>
                        <br />
                        <center>
                            <p className='description'>
                                This application represents the perfect combination of workout with an 
                                instructor and staying at home while performing the training.
                                This application has a unique feature which is recording the 
                                performance, sending a note or questions, marking it as done
                                and getting from the instructor a review on your performance.
                            </p>
                            <br/>
                            <br/>
                            <div className="buttons">
                                <button className='training-plans' onClick={() => navigate('/')}>Training Plans</button>
                                <button className='application-manual' onClick={() => navigate('AppM')}>Application Manual</button>
                            </div>
                            <br/><br/>
                        </center><br/> <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/>
                        <hr/>
                        
                        <center>
                            <div className="down-buttons">
                                <button className='home' disabled >Home</button>
                                <button className='sign-in' onClick={() => navigate('/')}>Sign In</button>
                                <button className='about-us' onClick={() => navigate('about')}>About Us</button>
                            </div>
                        </center>
                        
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;