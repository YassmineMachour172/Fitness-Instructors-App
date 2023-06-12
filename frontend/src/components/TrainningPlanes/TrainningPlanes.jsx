import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import './TrainningPlanes.css';
const TrainningPlanes=()=> {
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    
    
    const [searchInput, setSearchInput] = useState("");
  return (
    <center>
        <div className="container-fluid">
            <div className="col">
            <div className="row" >
                <center>
                <div className="row">
                        <div className="path-con">
                            <h5 className='pa'>Home --{'>'} Trainning Plans</h5>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="row">
                        <img src={logo} className="logo"/>
                    </div>
                <br/>
                </center>
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:85, width: 500}}>
                  <div className='col'><input type="text" placeholder="Exercise Name" onChange={handleChange} value={searchInput} />
                  <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLibAfterSearch')}>Search</button> </div>
                
                <div className='col'>
                <input type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLibAfterSearch')}>Search</button>
                </div>
                </div>
                </center>
                <div className='row' style={{flexDirection: 'row', height:800, width: 500}}>
                <center>
                <div className='col'>
                            
                                        
                                        <div className='coursesBlock'>           
                                        </div>
                                        
                                        </div>
                                        </center>
                                            
                            </div>
                
                <center>
                <div className="down-buttons">
                                <hr/>
                                <button className='home2' onClick={() => navigate('https://front-omega-nine.vercel.app/')}>Home</button>
                                <button className='sign-in2' onClick={() => navigate('https://front-omega-nine.vercel.app/#/SignIn')}>Sign In</button>
                                <button className='about-us' onClick={() => navigate('https://front-omega-nine.vercel.app/#/about')}>About Us</button>
                            </div>
                              </center>
                             
                      
            
            </div>
            </div>
            </center>
  )
}
export default TrainningPlanes ;
