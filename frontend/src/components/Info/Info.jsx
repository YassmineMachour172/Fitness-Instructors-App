import React, { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Info.css';
import InfoIcon from '../../images/info.jpg'
import MenuIcon from '../../images/InfoMenuHome.png'
import MessagesIcon from '../../images/InfofeedBack.png'
import MyclassesIcon from '../../images/MyClasses.png'
import profileIcon from '../../images/InfoProfile.png'
import NewWIcon from '../../images/InfoNewW.png'
import SwitchaccountIcon from '../../images/InfochangeAcc.png'
import MytraineesIcon from '../../images/MyTrainee.png'
import MylibIcon from '../../images/uplode.png'
import HomeIcon from '../../images/Infohome.png'
import Menu from '../../images/MenuHome.png'

const Info = () => {
    const navigate = useNavigate();
    return(
    
    <footer >
    <div className="container-fluid" Style="background-color:white;">
            <div id='Info' className='backgroundcol'>
                <div className="navbar">
                    <div className="navbar-container">
                        <div className='row'>
                            <div className='col'>
                            <div className='HelpIcon2'><img src={InfoIcon} className="HelpIcon2"/></div>
                            </div>
                            <div className='col'>
                            <div className='menu'><img src={Menu} className="menu"/></div>
                            </div>
                        </div>
                        
                        
                      <br/><br/>
                      
                        <center>
                        <div className='buttons'>
                           <button className='about-us' onClick={() => navigate('../../about')}>About Us</button>
                        </div>
                        <br/><br/>
                        </center>
                        <div className='row'>
                            <div className='col'>
                            <div ><img src={InfoIcon} className="HelpIcon"/></div>
                            <div ><img src={MenuIcon} className="HelpIcon"/></div>
                            <div ><img src={MessagesIcon} className="HelpIcon"/></div>
                            <div ><img src={MyclassesIcon} className="HelpIcon"/></div>
                            <div ><img src={profileIcon} className="HelpIcon"/></div>
                            </div>
                            <div className='col'>
                            <div ><img src={NewWIcon} className="HelpIcon"/></div>
                            <div ><img src={SwitchaccountIcon} className="HelpIcon"/></div>
                            <div ><img src={MytraineesIcon} className="HelpIcon"/></div>
                            <div ><img src={MylibIcon} className="HelpIcon"/></div>
                            <div ><img src={HomeIcon} className="HelpIcon"/></div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
    </div>
    
    </footer>
    




    )
};
export default Info;