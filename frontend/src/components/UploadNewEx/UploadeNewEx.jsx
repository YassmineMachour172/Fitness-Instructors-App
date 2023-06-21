import React from 'react';
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
import Uplode from '../../images/upload1.png'
import  { useEffect,useState } from 'react';
import axios from 'axios';
const UploadeNewEx = () => {
    const navigate = useNavigate();
    const [etitle, setTitle] = useState('');
  const [description, setDescription]=useState('');
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    useEffect(() => {
      const savedlocation =  localStorage.getItem('loc').replace(/"/g, '');
      const savedEmail =  localStorage.getItem('saved').replace(/"/g, '');
      console.log({savedlocation});
      console.log({savedEmail});
    const fetchUser = async () => {
      try {
        console.log("before axios", savedlocation);
        console.log("before axios", savedEmail);
        const response = await axios.get('http://localhost:8000/api/exercises/UploadeNewEx', { params: { savedlocation,savedEmail } });
        //params: { email: email }
        if (response.data.success === true) {
          setTitle(response.data.info.user.title);
          setDescription(response.data.info.user.description);
          
        } else {
          console.log(response.data.error);
        }
        console.log("requesting");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUser();
  }, []);
    return (
        <center>
        <div className="container-fluid">
            <div className="col">
            <div className="row">
                <center>
                 <div Style="color:Black;" >
                    <img src={Uplode} className="infoInfo"/>
                       Uploade new exercise
                </div>
                </center>
            </div>
           
                    <div className='row'>
                    <div className="row" id='form-con'>
                                        <form action="POST" id='sign-up-form' className="user" >
                                            <div className="text-con">
                                                  <div className='col'>
                                                    <div className='row'>
                                                    <div className='text' Style="color:Black;">Name Of The Exercise:</div>
                                                    </div>
                                                    <div className='row'>
                                                    <input Style="color: Black;background-color: transparent;border-radius: 12px;" type="text" name="NameOfEx"
                                                id='NameOfEx'  {...register('NameOfEx')}/>
                                                {errors.fName ? <p className='error-msg'>{errors.NameOfEx?.message}</p> : <br/>} {/* display error message if the first name is not valid */}
                                                    
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Description:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" id="descrpition" type="textBox" 
                                                    name="descrpition"
                                                    placeholder="please descripe the exercise" {...register('Description')}/>
                                                  
                                                  </div>
                                                  <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Key Words:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" type="text" name="KeyWords" id='KeyWords'
                                                placeholder="#" {...register('KeyWords')}/>
                                                
                                                 
                                                </div>
                                                <br/>
                                                <br/>
                                                <center>
                                                  <div className='row'>
                                                  
                                                    <button onClick={() => navigate('/Upload')} type="Upload" className='about-us'>Uplode the video </button>
                                                  
                                                  </div>
                                                  <div className='row'>
                                                  

                                                  <button type="Upload" className='about-us'>Uplode</button>

                                                  
                                                  </div>
                                                  </center>
                                                </div>
                                                  <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                              </center>
                
                        <div className="row">
                            <center>
                        <img src={logo} className="logo"/>
                        </center>
                    </div>
                                                  </div>
                                                 </form>
                                                 </div>
                                                 </div>
                                                
                                                 </div>
                    
                      </div>
                      </center>
        
    );
};

export default UploadeNewEx;