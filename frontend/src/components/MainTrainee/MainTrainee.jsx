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
import Description from '../../images/description.png'
import Feedbackbutton from '../../images/Feedbackbutton.png'
import images from '../../images/images.png'
const MainTrainee = () => {
    const data = [
        { className: "Aerobice level 1", trainerName: "Lina Abu" },
        { className: "Aerobice level 1", trainerName:"Sandra Leve"},
        { className: "Aerobice level 1", trainerName:"Lina Abu" },
    ]
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
        navigate('https://front-omega-nine.vercel.app/');
    };
    /* function that navigates to the information page */
    const handleClickInfo = () => {
        navigate('https://front-omega-nine.vercel.app/#/Info');
    };
    /* function that navigates to the my classes page */
    const handleClickMyClasses = () => {
        navigate('https://front-omega-nine.vercel.app/#/MyClassesTrainee');
    };
    /* function that navigates to the message/ feedback page */
    const handleClickMessage = () => {
        navigate('https://front-omega-nine.vercel.app/#/Traineemessage');
    };
    /* function that navigates to the profile page */
    const handleClickProfile = () => {
        < Profile email={email} />
        navigate(`https://front-omega-nine.vercel.app/#/profile/${email}`);   
     };
    /* function that navigates to the New class page */
    const handleClickNewClass = () => {
        navigate('https://front-omega-nine.vercel.app/#/NewClass');
    };
    /* function that navigates to the Trainer main page */
    const handleClickSwitchToTrainer = () => {
        navigate('https://front-omega-nine.vercel.app/#/MainTrainer');
    };
    /* function that navigates to the description page */
    const handleClickDescription = () => {
        navigate('https://front-omega-nine.vercel.app/#/Description');
    };
    /* function that navigates to the statics page */
    const handleClickStatics = () => {
        navigate('https://front-omega-nine.vercel.app/#/Statics');
    };
    /* function that navigates to the vidoe of the course page */
    const handleClickPlayButton = () => {
        navigate('https://front-omega-nine.vercel.app/#/StartVideo');
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
                <div className="row" style={{flexDirection: 'row', height:20, width: 500}}>
                             <div className="buttons">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('https://front-omega-nine.vercel.app/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('https://front-omega-nine.vercel.app/#/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('https://front-omega-nine.vercel.app/#/MyClassesTrainee')}><img src={pList} className="pListBbox"/></button>


                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/Traineemessage')}><img src={feedback} className="feedbackBbox"/></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/profile/:email')}><img src={profile} className="ProfileBbox"/></button>

                              </div>
                </div>
                
                <br/> 
                <br/> 
                <br/> 
                
                <div className="navbar">
                    <div className="navbar-container">
                        
                    <div className='row'style={{flexDirection: 'row', height:60, width: 500}}>
                                            <img src={logo} className="logo2"/>
                                            </div>
                
                       <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                           
                              <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/NewClass')}> <img src={NewW} className="NewWBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/MainTrainer')}><img src={changAccount} className="SwitchBorderBox"/></button>
                              
                              
                              </div>
                              </div>
                        <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/MyClassesTrainee')}><img src={MyClasses} className="MyClassesBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info} className="infoBorderBox"/></button>
                              
                              </div>
                              </div>
                             
                              <center>
                                <div className='row' style={{flexDirection: 'row', height:45, width: 500}}>
                                    <div style={{ color: 'black', fontSize: 20 ,textAlign: "center"}}>Your active classes :</div>
                                    
                                             
                                    </div>
                               
                                    <table className='table2' Style="color:Black;text-align: center;">
                <tr Style="color: #D66850;">
                    <th>Class's Name</th>
                    <th>Trainer's Name</th>
                    <th>Class's Description</th>
                    <th>Feedback</th>
                    <th>Start Class</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.className}</td>
                            <td>{val.trainerName}</td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Description')} >Description</button></td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/TraineeMessage')} >Feedback</button></td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/StartVideo')} >Start The Class</button></td>                        
                        </tr>
                    )
                })}
            </table>
                                    
                             
                              
                              
                                             
                                        
                                        
                                        
                                        
                                            
                            
                            </center>     
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
