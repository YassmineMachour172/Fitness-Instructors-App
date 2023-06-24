import React, { useEffect,useState } from 'react';
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
import MainTrainer from '../MainTrainer/MainTrainer';
import NewClass from '../NewClassTrainee/NewClass';
import TraineeMessage from '../TraineeMessage/TraineeMessage';
import axios from 'axios';
import MyClassesTrainee from '../MyClassesTrainee/MyClassesTrainee';
import Classes from '../../components/MyClassesTrainee/Classes';
const MainTrainee = () => {
    const [U,setU]=useState([]);
    ///*******************///
    const { email } = useParams();
    const [mail, setMail]=useState('');
    const [classes, setClasses]=useState();
    console.log("main",{email})
    useEffect(() => {
        const fetchUser = async () => {
          try {
            console.log(email);
            console.log("before axios", email);
            const response = await axios.get('http://localhost:8000/api/classes/MainTrainee', {email});
            if (response.data.success === true) {
              const dataTable= response.json();
                console.log(dataTable);
                if(dataTable.length>0)
                {
                  setClasses(dataTable);
                }
            } else {
              console.log(response.data.error);
            }
            console.log("requesting");
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };fetchUser();
        const storedSession = localStorage.getItem('session');
        //print the session
        const session = JSON.parse(storedSession);
        console.log({session});
      }, []);
   
    console.log( "Main")
   
    //const [mail,setMail]=useState(email);
   

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
    const handleClickMyClasses  = () => {
        
        < MyClassesTrainee email={email} />
        navigate(`/MyClassesTrainee/${email}`);
    };
    /* function that navigates to the message/ feedback page */
    const handleClickMessage = () => {
    
        <TraineeMessage email={email} />
        navigate(`/Traineemessage/${email}`);
    };
    /* function that navigates to the profile page */
    const handleClickProfile = () => {
        navigate('/Profile');   
     };
    /* function that navigates to the New class page */
    const handleClickNewClass = () => {
        < NewClass email={email} />
        navigate(`/NewClass/${email}`);
        
    };
    /* function that navigates to the Trainer main page */
    const handleClickSwitchToTrainer = () => {
        < MainTrainer email={email} />
        navigate(`/MainTrainer/${email}`);
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
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClickMyClasses}><img src={pList} className="pListBbox"/></button>


                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickMessage}><img src={feedback} className="feedbackBbox"/></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>

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
                           
                              <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickNewClass}> <img src={NewW} className="NewWBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClickSwitchToTrainer}><img src={changAccount} className="SwitchBorderBox"/></button>
                              
                              
                              </div>
                              </div>
                        <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClickMyClasses}><img src={MyClasses} className="MyClassesBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info} className="infoBorderBox"/></button>
                              
                              </div>
                              </div>
                             
                              <center>
                                <div className='row' style={{flexDirection: 'row', height:45, width: 500}}>
                                    <div style={{ color: 'black', fontSize: 20 ,textAlign: "center"}}>Your active classes :</div>
                                    
                                             
                                    </div>
                               
                                    <table className='table3' Style="color:Black;text-align: center;margin: auto;">
                <tbody>
                <tr Style="color: #D66850;">
                    <th>Class's Name</th>
                    <th>Trainer's Name</th>
                    <th>Class's Description</th>
                    <th>Feedback</th>
                    <th>Start Class</th>
                </tr>
                
                  <Classes classes={classes}></Classes>
                </tbody>
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
