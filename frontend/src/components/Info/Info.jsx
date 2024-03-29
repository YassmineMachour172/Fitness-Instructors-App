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
import logo from '../../images/logo.png'
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import profile from '../../images/profile.png'
import { useParams } from 'react-router-dom';
const Info = () => {
    const { email } = useParams();/*Take the email */
    const navigate = useNavigate();/* define hook to navigate to other pages */
    /* define the Info display whict contains photos of simpoles used in the application and explain each one */
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
                           <button className='about-us' onClick={() => navigate('/about')}>About Us</button>
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
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
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