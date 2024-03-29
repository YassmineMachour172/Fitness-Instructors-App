import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import ReactPlayer from 'react-player';



/*  Start video Component */
const StartVideo = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */
    const email=localStorage.getItem('saved').replace(/"/g, '');
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
    
    /* the follwoing will display the content of the start video */
    return (
        <div className="container-fluid">
            <div id='ApplicationManual' className='backgroundcol'>
                
                <div className="Titel">
                    
                </div>
                
                <div className="navbar">
                    <div className="navbar-container">
                         
                <div className='row' style={{flexDirection: 'row', height:800, width: 500}}>
                <center>
                <div className='col'>
                            
                                        
                                        <div className='VideoBox'> 
                                            <ReactPlayer url="C:\Users\yassmine machour\Downloads\5 MIN HOME WORKOUT YOU CAN DO EVERY MORNING l 매일 아침 5분 전신 홈트레이닝.mp4" controls={true} />          
                                        </div>
                                        
                                        </div>
                                        </center>
                                            
                            </div>
                            <center>
                              <div className='row'style={{flexDirection: 'row', height:200, width: 1000}}>
                            <div className="down-buttons">
                                <button className='home' onClick={() => navigate('/')}>uplode a video</button>
                                <button className='sign-in2' onClick={() => navigate('/TraineeMessage')}>Ask Question</button>
                                <button className='about-us' onClick={() => navigate('/Description')}>Description</button>
                            </div>
                            </div>
                        </center>
                        <center>
                             <div class="btn-group">
                                <button  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  onClick={() => navigate(`/MainTrainer/${email}`)}><img src={pList} className="pListBbox"/></button>
                                <button  onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                
                              </div>
                              </center>
                      
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartVideo;


