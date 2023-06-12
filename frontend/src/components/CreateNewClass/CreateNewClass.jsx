import React from 'react';
import { useNavigate  } from 'react-router-dom';
import './CreateNewClass.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import Uplode from '../../images/upload1.png'
import CreateNewEx from '../../images/CreateNewEx.png'
import Dropdown from 'react-bootstrap/Dropdown';
import addVideo from '../../images/AddVideo.png'
const CreateNewClass = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    return (
        <footer>
        <center>
        <div className="container-fluid">
            <div className="col">
            <div className="row">
                
                 <div Style="color:Black;" >
                    <img src={CreateNewEx} className="infoInfo"/>
                       Create New Class
                </div>
                
            </div>
           
                    <div className='row'>
                    <div className="row" id='form-con'>
                                        <form action="POST" id='sign-up-form' className="user" >
                                            <div className="text-con">
                                                  <div className='col'>
                                                    <div className='row'>
                                                    <div className='text' Style="color:Black;">Name Of The Class:</div>
                                                   
                                                    <input type="text" name="NameOfC"
                                                id='NameOfC'  {...register('NameOfC')}/>
                                                {errors.fName ? <p className='error-msg'>{errors.NameOfC?.message}</p> : <br/>} {/* display error message if the first name is not valid */}
                                                    
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Type Of The Class:</div>
                                                   
                                                  <Dropdown>
                                                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                   Type of class
                                                  </Dropdown.Toggle>

                                                  <Dropdown.Menu variant="dark">
                                                 
                                                  <Dropdown.Item as="button">Basic squat </Dropdown.Item>
                                                 <Dropdown.Item as="button">Jump squat</Dropdown.Item>
                                                 <Dropdown.Item as="button">Forword punch</Dropdown.Item>
                                                 <Dropdown.Item as="button">Jumping jacks</Dropdown.Item>
                                                 <Dropdown.Divider />
                                                   
                                                 </Dropdown.Menu>
                                                 </Dropdown>
                                                      </div>
                                                    
                                                  
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Description:</div>
                                                  
                                                  <input id="descrpition" type="textBox" 
                                                    name="descrpition"
                                                    placeholder="please descripe the class" {...register('Description')}/>
                                                  
                                                  </div>
                                                  <div className='row'margin-bottom='-10px'>
                                                  
                                                  <div className='text' Style="color:Black;">Key Words:</div>
                                                  
                                                  <input type="text" name="KeyWords" id='KeyWords'
                                                placeholder="#" {...register('KeyWords')}/>
                                                
                                                 
                                                </div>
                                                <div className='row' style={{flexDirection: 'row', height:50, width: 400}}>
                                                <div style={{ color: 'black' }}>Please choose from the library the exercises you wish to add to this class:</div>
                                                </div>
                                                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                                                    <div className='col'>
                                                        <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLib')} ><img src ={addVideo} className='videoBorder' ></img></button>
                                                    
                                                    </div>
                                                    <div className='col'>
                                                        <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLib')} ><img src ={addVideo} className='videoBorder'></img></button>
                                                    </div>
                                                    <div className='col'>
                                                        <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLib')} ><img src ={addVideo} className='videoBorder'></img></button>
                                                    </div>
                                                </div>
                                                <div className='row' style={{flexDirection: 'row', height:150, width: 500}}>
                                                    <div className='col'>
                                                        <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLib')} ><img src ={addVideo} className='videoBorder' ></img></button>
                                                    
                                                    </div>
                                                    <div className='col'>
                                                        <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLib')} ><img src ={addVideo} className='videoBorder'></img></button>
                                                    </div>
                                                    <div className='col'>
                                                        <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLib')} ><img src ={addVideo} className='videoBorder'></img></button>
                                                    </div>
                                                </div>
                                                <div className='row' style={{flexDirection: 'row', height:100, width: 850}} >
                                                  <div className='col'>
                                                  <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/MyClassesTrainer')} type="StartRecording" className='about-us'>Publish and Save</button>
                                                  </div>
                                                  <div className='col'>
                                                  <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/MyClassesTrainer')} type="Uplode" className='about-us'>Save</button>
                                                  </div>
                                                  </div>
                                               
                                                    <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                             <div className="buttons">
                                <button  onClick={() => navigate('https://front-omega-nine.vercel.app/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  onClick={() => navigate('https://front-omega-nine.vercel.app/#/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  onClick={() => navigate('https://front-omega-nine.vercel.app/#/Profile')}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                              </div>
                              
                
                        <div className="row" style={{flexDirection: 'row', height:10, width: 500}}>
                            <center>
                        <img src={logo} className="logo"/>
                        </center>
                    </div>
                                                 
                                                  
                                                </div>
                                                  
                                                  </div>
                                                 </form>
                                                 </div>
                                                 </div>
                                                
                                                 </div>
                    
                      </div>
                      </center>
                      </footer>
        
    );
};

export default CreateNewClass;
