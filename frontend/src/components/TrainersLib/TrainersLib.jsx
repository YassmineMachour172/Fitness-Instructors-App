import React from 'react';
import './TrainersLib.css';
import { useNavigate  } from 'react-router-dom';
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
import searchIcon from '../../images/search.jpg'
import menu from '../../images/menue.png'
import {useState} from 'react'
const TrainersLib=() => {
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
            <div className="row">
                <center>
                 <div Style="color:Black;" >
                    <img src={menu} className="infoInfo"/>
                       My Library 
                </div>
                <br/>
                <button onClick={() => navigate('/UploadeNewEx')} type="StartRecording" className='Upload'>Uplode New Exercise</button>
                </center>
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:250, width: 500}}>
                  <div className='col'><input Style="color: Black;background-color: transparent;border-radius: 12px;"type="text" placeholder="Exercise Name" onChange={handleChange} value={searchInput} />
                  <button Style="color: Black;background-color: transparent;border-radius: 12px;"  onClick={() => navigate('/TrainersLibAfterSearch')}>Search</button> </div>
                
                <div className='col'>
                <input Style="color: Black;background-color: transparent;border-radius: 12px;"type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button Style="color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('https://front-omega-nine.vercel.app/#/TrainersLibAfterSearch')}>Search</button>
                </div>
                </div>
                </center>
                <div className='row'>
                <center>
                             <div className="buttons">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"  onClick={() => navigate('https://front-omega-nine.vercel.app/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('https://front-omega-nine.vercel.app/#/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('https://front-omega-nine.vercel.app/#/Profile')}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                              </center>
                              </div>
                        <div className="row">
                            <center>
                        <img src={logo} className="logo"/>
                        </center>
                    </div>
            
            </div>
            </div>
            </center>
  )
}
export default TrainersLib;