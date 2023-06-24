import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import logo from '../../images/logo.png'
import pic from '../../images/pic.jpg'
/*import{ useHistroy } from 'react-router-dom';*/
/* Home Component */
const Home = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */

    /* function that navigate to the logIn page */
    
    
    
    
    return (

        <center>
        <footer >
         <center>
        <div className="container-fluid" >
            <div id='home' className='backgroundcol'>
                <div className="path">
                    <h5 className='pa'>Home</h5>
                    <hr></hr>
                </div>
                    <div className="header">
                        <br/><br/>
                        <img src={logo} className="logo"/>
                        <div className='picture-home'>
                            <br /><br />
                            <img src={pic} className="pic"/>
                        </div>
                        <br />
                        
                            <p className='description'>
                                This application represents the perfect combination of workout with an 
                                instructor and staying at home while performing the training.
                                
                            </p>
                            <br/>
                            <br/>
                            <div className="buttons">
                                <button className='training-plans' onClick={() => navigate('/main-trainee/:email')}>Training Plans</button>
                                <button className='application-manual' onClick={() => navigate('/AppM')}>Application Manual</button>
                            </div>
                            <br/><br/>
                        <br/> <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/> 
                        <br/>
                        <hr/>
                        
                                <div className="down-buttons">
                                    <button className='home' disabled >Home</button>
                                    <button className='sign-in2' onClick={() => navigate('/SignIn')}>Sign In</button>
                                    <button className='about-us' onClick={() => navigate('/about')}>About Us</button>
                                </div>
                                </div>
                                </div>
                                </div>
            
                            </center>
                        </footer>
                        </center>
                    
             
    );
};

export default Home;