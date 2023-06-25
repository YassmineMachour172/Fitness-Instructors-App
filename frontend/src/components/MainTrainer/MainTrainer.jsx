//import React, { useRef,useState, } from 'react';
import { useNavigate,useParams  } from 'react-router-dom';
import '../../css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainTrainer.css';
import logo from '../../images/logo.png'
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import NewW2 from '../../images/NewW2.png'
import changAccount2 from '../../images/changeAcc2.png'
import MyClasses from '../../images/MyClasses.png'
import MyTrianee from '../../images/MyTrainee.png'
import React, { useEffect,useState } from 'react';
import MyLibrary from '../../images/uplode.png'
import MyClassesTrainer from '../MyClassesTrainer/MyClassesTrainer';
import CreateNewClass from '../CreateNewClass/CreateNewClass';
import TrainersLib from '../TrainersLib/TrainersLib';
import TrainerMessage from '../TrainerMessage/TrainerMessage';
import MyTrainee from '../MyTrainee/MyTrainee';
import MainTrainee from '../MainTrainee/MainTrainee';
const MainTrainer = () =>  {
    const navigate = useNavigate();
    //const { email } = useParams();
    const { email } = useParams();
    const [mail, setMail]=useState('');
    console.log("main",{email})
    /* define what will disappear imeditally on the screen once the trainer log in  */
    useEffect(()=>{
        const savedEmail =  localStorage.getItem('saved');
        console.log({savedEmail});
    },[]);
    /* function that navigates to my classes page */
    const handleClickMyClasses  = () => {
        
        < MyClassesTrainer email={email} />
        navigate(`/MyClassesTrainer/${email}`);
    };
    /* function that navigates to the message/ feedback page */
    const handleClickMessage = () => {
        const email=localStorage.getItem('saved').replace(/"/g, '');
        navigate(`/TraineeMessage/${email}`);
    };
    
    /* function that navigates to the New class page */
    const handleClickNewClass = () => {
        < CreateNewClass email={email} />
        navigate(`/CreateNewClass/${email}`);
        
    };
    /* function that navigates to the Trainee main page */
    const handleClickSwitchToTrainee = () => {
        < MainTrainee email={email} />
        navigate(`/main-trainee/${email}`);
    };
    /* function that navigates to the trainer's library page */
    const handleClicktrianersLib = () => {
        < TrainersLib email={email} />
        navigate(`/TrainersLib/${email}`);
    };
    /* function that navigates to the My trainees page */
    const handleClickMyTrainees = () => {
        < MyTrainee email={email} />
        navigate(`/MyTrainee/${email}`);
    };
    /*define the maintrainee contant that contains : upper buttons and five main buttons  */ 
    return (
        <footer className='backgroundcol'>
        <div className="container-fluid">
            <div className="header">
            <div className="navbar">
                    <div className="navbar-container">
            <div id='Main Trainer' className='backgroundcol'>
            <footer>
                             <center>
                             <div className="row" style={{flexDirection: 'row', height:20, width: 500}}>
                             <div className="buttons">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickMyClasses}><img src={pList} className="pListBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClickMessage}><img src={feedback} className="feedbackBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                </div>
                
                              <br/>
                              <br/>
                              <br/>
                              
                                
                                   <div className="navbar">
                                      <div className="navbar-container">
                                        <center>
                                            <div className='row'style={{flexDirection: 'row', height:60, width: 500}}>
                                            <img src={logo} className="logo2"/>
                                            </div>
                                         
                                  
                                         </center>
                              </div>
                              </div>
                              
                              
                              
                             
                               
                        
                        

                            
                         <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                           
                              <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickNewClass}> <img src={NewW2} className="NewWBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickSwitchToTrainee}><img src={changAccount2} className="SwitchBorderBox"/></button>
                              
                              
                              </div>
                              </div>
                        <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                              <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickMyClasses}><img src={MyClasses} className="MyClassesBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickMyTrainees}><img src={MyTrianee} className="infoBorderBox"/></button>
                              
                              </div>
                              </div>
                              <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClicktrianersLib}><img src={MyLibrary} className="MyClassesBorderBox"/></button>
                              </div>
                              </div>
                              </center>
                          </footer>
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
        
        
        </footer>
    );
};




export default MainTrainer;