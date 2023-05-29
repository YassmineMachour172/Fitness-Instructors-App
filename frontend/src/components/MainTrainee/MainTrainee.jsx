import React, { useRef,useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../../css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainTrainee.css';
import logo from '../../images/logo.png'
import HomeIc from '../../images/home1.png'
import info from '../../images/info.jpg'
import info1 from '../../images/info1.png'
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import NewW from '../../images/NewW.jpg'
import changAccount from '../../images/changeAcc.png'
import MyClasses from '../../images/MyClasses.png'
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';
import Profile from '../Profile/Profile';


const MainTrainee = () => {

    //const [mail,setMail]=useState(email);
    const { email } = useParams();
    const [mail, setMail]=useState('');
    
    console.log("main",{email})

    const navigate = useNavigate();
    const location = useLocation();
  //setMail(location.state?.data);
    //console.log("main",mail)
    /* function that navigates to the home page */
    const handleClickHome = () => {
        navigate('/');
    };
    /* function that navigates to the information page */
    const handleClickInfo = () => {
        navigate('/Info');
    };
    /* function that navigates to the my classes page */
    const handleClickMyClasses = () => {
        navigate('/MyClassesTrainee');
    };
    /* function that navigates to the message/ feedback page */
    const handleClickMessage = () => {
        navigate('/Traineemessage');
    };
    /* function that navigates to the profile page */
    const handleClickProfile = () => {
        < Profile email={email} />
        navigate(`/profile/${email}`);   
     };
    /* function that navigates to the New class page */
    const handleClickNewClass = () => {
        navigate('/NewClass');
    };
    /* function that navigates to the Trainer main page */
    const handleClickSwitchToTrainer = () => {
        navigate('/MainTrainer');
    };
    /* function that navigates to the description page */
    const handleClickDescription = () => {
        navigate('/Description');
    };
    /* function that navigates to the statics page */
    const handleClickStatics = () => {
        navigate('/Statics');
    };
    /* function that navigates to the vidoe of the course page */
    const handleClickPlayButton = () => {
        navigate('/StartVideo');
    };
    const GetCourses=()=>{
    /*this function is for the database ;the number of courses that the trainee is signed to is i
    the function must return an array or a list of the  courses that contain the courses detailes which is Courses*/
                         
    };
    return (
        <div className="container-fluid ">
            <div className="header">
            <div className="navbar">
                    <div className="navbar-container">
            <div id='Main Trainee' className='backgroundcol'>
            <footer >
                             <center>
                <div className="row">
                             <div className="buttons">
                                <button  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  onClick={() => navigate('/MyClassesTrainee')}><img src={pList} className="pListBbox"/></button>
                                <button  onClick={() => navigate('/Traineemessage')}><img src={feedback} className="feedbackBbox"/></button>
                                <button  onClick={handleClickProfile}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                </div>
                
                <br/> 
                <br/> 
                <br/> 
                
                <div className="navbar">
                    <div className="navbar-container">
                        
                        <img src={logo} className="logo2"/>
                        <br/> 
                <br/> 
                
                       <div className="row">
                           <div className="buttons">
                           
                              <button  onClick={() => navigate('/NewClass')}> <img src={NewW} className="NewWBorderBox"/></button>
                              <button onClick={() => navigate('/MainTrainer')}><img src={changAccount} className="SwitchBorderBox"/></button>
                              
                              
                              </div>
                              </div>
                        <div className="row">
                           <div className="buttons">
                              <button  onClick={() => navigate('/MyClassesTrainee')}><img src={MyClasses} className="MyClassesBorderBox"/></button>
                              <button onClick={() => navigate('/Info')}><img src={info} className="infoBorderBox"/></button>
                              
                              </div>
                              </div>
                             
                              
                              <p className='YourClassesLabel'>            Your active classes :</p>
                              
                            <div className='tabel'>
                                for (const i of GetCourses)
                                {
                                    
                                    <div className='row'>
                                         <center>
                                        <div className='ClassesBlock'>
                                            
                                        </div>
                                        </center>
                                        </div>

                                }

                            
                            </div>     
                              </div>
                              </div>
                              
                        </center>
                        </footer>
                        </div>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default MainTrainee;
