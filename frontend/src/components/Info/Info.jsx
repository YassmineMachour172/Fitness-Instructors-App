import React, { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Info.css';
import InfoIcon from '../../images/info.jpg'
import MessagesIcon from '../../images/InfofeedBack.png'
import MyclassesIcon from '../../images/MyClasses.png'
import profileIcon from '../../images/InfoProfile.png'
import NewWIcon from '../../images/InfoNewW.png'
import SwitchaccountIcon from '../../images/InfochangeAcc.png'
import MytraineesIcon from '../../images/MyTrainee.png'
import MylibIcon from '../../images/uplode.png'
import HomeIcon from '../../images/Infohome.png'
import Menu from '../../images/MenuHome.png'
import logo from '../../images/logo.png'
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import info from '../../images/info.jpg'
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
const Info = () => {
    const navigate = useNavigate();
    return(
    
    <footer >
    <div className="container-fluid" >
            <div id='Info' className='backgroundcol'>
                <div className="navbar">
                    <div className="navbar-container">
                        <div className='row'>
                        <div Style="color:Black;" >
                    <img src={info1} className="infoInfo"/>
                       Information
                </div>
                            
                            
                        </div>
                        
                        
                      <br/><br/>
                      
                        <center>
                        <div className='buttons'>
                           <button className='about-us' onClick={() => navigate('https://front-omega-nine.vercel.app/#/about')}>About Us</button>
                        </div>
                        <br/><br/>
                        </center>
                        <div className='row'style={{flexDirection: 'row', height:400, width: 500}}>
                            <div className='col' style={{flexDirection: 'col', height:10, width: 500}}>
                            <div ><img src={InfoIcon} className="HelpIcon"/></div>
                            <div ><img src={MessagesIcon} className="HelpIcon"/></div>
                            <div ><img src={MyclassesIcon} className="HelpIcon"/></div>
                            <div ><img src={profileIcon} className="HelpIcon"/></div>
                            </div>
                            <div className='col'style={{flexDirection: 'col', height:10, width: 500}}>
                            <div ><img src={NewWIcon} className="HelpIcon"/></div>
                            <div ><img src={SwitchaccountIcon} className="HelpIcon"/></div>
                            <div ><img src={MytraineesIcon} className="HelpIcon"/></div>
                            <div ><img src={MylibIcon} className="HelpIcon"/></div>
                            <div ><img src={HomeIcon} className="HelpIcon"/></div>
                            </div>
                        </div>
                        <div className='row 'style={{flexDirection: 'row', height:100, width: 500}}>
                            <center>
                             <div className="buttons">
                                <button  onClick={() => navigate('https://front-omega-nine.vercel.app/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  onClick={() => navigate('https://front-omega-nine.vercel.app/#/Profile')}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                              </center>
                              </div>
                
                        <div className="row" style={{flexDirection: 'row', height:50, width: 500}}>
                            <center>
                        <img src={logo} className="logo"/>
                        </center>
                    </div>
                        
                        
                        
                    </div>
                </div>
            </div>
    </div>
    
    </footer>
    




    )
};
export default Info;