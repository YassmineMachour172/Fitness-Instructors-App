import React from 'react'
import './NewClassAfterSearch.css';
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
import NewClassTrainee from '../../images/CreateNewEx.png'
const NewCLassAfterSearch=()=> {
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
                 <div Style="color:Black;" >
                    <img src={NewClassTrainee} className="infoInfo"/>
                       New Class
                </div>
                <br/>
                <div style={{ color: 'black' }}>Here are the classes we offer, please choose your desired classes :</div>
                </center>
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                  <div className='col'><input type="text" placeholder="Exercise Name" onChange={handleChange} value={searchInput} />
                  <button onClick={() => navigate('/NewCLassAfterSearch')}>Search</button> </div>
                
                <div className='col'>
                <input type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button onClick={() => navigate('/NewCLassAfterSearch')}>Search</button>
                </div>
                </div>
                </center>
                <div className='row' style={{flexDirection: 'row', height:700, width: 500}}>
                <center>
                <div className='col'>
                            
                                        
                                        <div className='NewClassesBox'>           
                                        </div>
                                        
                                        </div>
                                        </center>
                                            
                            </div>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div className="buttons">
                                <button  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  onClick={() => navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
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
export default NewCLassAfterSearch ;




