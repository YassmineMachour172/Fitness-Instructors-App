import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppM.css';
import logo from '../../images/logo.png'


/* Application manual Component */
const AppM = () => {
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
        <div className="container">
            <div id='ApplicationManual' className='backgroundcol'>
                
                <div className="path">
                    <h5 className='pa'>Home--Application Manual</h5>
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
                            Each interface has its own functionality, to start the application the user chooses if he wants to only look at the training plans or to participate in some groups, in order to participate in a group he must have an account.
                            On the one hand if he chooses to sign up then he will be asked to enter his personal data such as :name, ID,age, cell number,email and of course he will be asked to allow access to the camera and microphone ,he will be asked to set a strong password to his account in case and he would like to open it from another computer.
                            If everything he entered is correct( ID contains exactly 9 numbers ,cell number contains 10 numbers exactly ,age is reasonable, email has .com at the end..) he will get a confirmation that the account is successfully created and he can sign in.
                            Once he sign in he can do the following :
                            Viewing the progress (statistics).
                            Register to a course (choosing from a courses list)
                            During the training:
                            Checking in a V the straining that have been done
                            Record the training (performance)
                            Sending questions to the instructor or leaving a note to the instructor
                            Able to easily navigate between the straining/missions
                            Viewing the uploaded training video to the courses that the trainee is signed up to
                            Chat with an instructor
                            Uploading a recorded training (performance) in the end of each training

                            Every home page for all the users have this button →Turn into instructor, once the user presses this button he will become an instructor and he will be able to do the following:
                            Upload a new video to the training list
                            Creating a new course
                            Length
                            Choosing the relevant training from the list (creating the routine video)
                            description
                            Viewing list of open / available courses
                            Responding to a trainee (feedback / answering questions / viewing the performance of the trainee etc)
                            Chat with trainee
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
                        <hr/>
                        
                        <center>
                            <div className="down-buttons">
                                <button className='home' onClick={() => navigate('../..//')}>Home</button>
                                <button className='sign-in' onClick={() => navigate('../../SignIn')}>Sign In</button>
                                <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                            </div>
                        </center>
                        
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppM;