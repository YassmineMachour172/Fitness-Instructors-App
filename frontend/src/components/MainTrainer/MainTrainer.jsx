import React, { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import MyLibrary from '../../images/uplode.png'
const MainTrainer = () =>  {
    const navigate = useNavigate();
  
    return (
        <footer Style="background-color:white;">
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
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/MyClassesTrainer')}><img src={pList} className="pListBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/TrainerMessage')}><img src={feedback} className="feedbackBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
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
                           
                              <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/CreateNewClass')}> <img src={NewW2} className="NewWBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/MainTrainee')}><img src={changAccount2} className="SwitchBorderBox"/></button>
                              
                              
                              </div>
                              </div>
                        <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                              <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/MyClassesTrainer')}><img src={MyClasses} className="MyClassesBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/MyTrainee')}><img src={MyTrianee} className="infoBorderBox"/></button>
                              
                              </div>
                              </div>
                              <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/TrainersLib')}><img src={MyLibrary} className="MyClassesBorderBox"/></button>
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