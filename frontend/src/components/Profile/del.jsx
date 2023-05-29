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
const Profiledel = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    return (
        <div className="container-fluid">
            <div className="col">
            <div className="row">
                 <div ><img src={profile} className="infoInfo"/>The Name of the user</div>
                    </div>
                    <div className='row'>
                    <div className="row" id='form-con'>
                                        <form action="POST" id='sign-up-form' className="user" >
                                            <div className="text-con">
                                                <div className='text' Style="color:Black;">Account Information:</div>
                                                
                                                  <div className='col'>
                                                    <div className='row'>
                                                    <div className='text' Style="color:Black;">Nick Name:</div>
                                                    </div>
                                                    <div className='row'>
                                                    <input type="text" name="firstName"
                                                id='fname' placeholder="NickName" {...register('fName')}/>
                                                {errors.fName ? <p className='error-msg'>{errors.fName?.message}</p> : <br/>} {/* display error message if the first name is not valid */}
                                                    
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">E-mail Address:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input id="emailin" type="email" 
                                                    name="email" aria-describedby="emailHelp"
                                                    placeholder="Email Address" {...register('email')}/>
                                                {errors.email ? <p className='error-msg'>{errors.email?.message}</p> : <br/>} {/* display error message if the email is not valid */}
                                                  
                                                  </div>
                                                  <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Phone Number:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input type="text" name="phone" id='phone'
                                                placeholder="Phone Number" {...register('phone')}/>
                                                {errors.phone ? <p className='error-msg'>{errors.phone?.message}</p> : <br/>} {/* display error message if the phone number is not valid */}
                                                   
                                                 
                                                </div>
                                                <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Password:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input type="password" id='password1'
                                                   name="password" placeholder="Password" {...register('password')}/>
                                                  {errors.password ? <p className='error-msg'>{errors.password?.message}</p> : <br/>} {/* display error message if the password is not valid */}
                                                  
                                                  
                                                </div>
                                                <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Password Confirmation:</div>
                                                  </div>
                                                  <div className='row'> 
                                                  <input type="password"  id='password2'
                                                  name="repeatPassword" placeholder="Repeat Password" {...register('repeatPassword')}/>
                                                  {errors.repeatPassword ? <p className='error-msg'>errors.repeatPassword.message</p> : <p className='space2'>{'.'}</p>} {/* display error message if the repeat password is not valid */}
                            
                                                 
                                                </div>
                                                         
                                                  
                                                <div className='text' Style="color:Black;">Health Related Information:</div>
                                                  
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Age:</div>
                                                  <input type="number"classname='form-control form-control-user' {...register("age", { min: 18, max: 99 })} />
                                                  </div>
                                                   <div className='row'>
                                                   <div className='text' Style="color:Black;">Gender:</div>
      
                                                   <select {...register("gender")}>
                                                   <option value="female">female</option>
                                                   <option value="male">male</option>
                                                   <option value="other">other</option>
                                                   </select>
                                                   </div>
                                                   <div className='row'>
                                                  <div className='text' Style="color:Black;">Height in cm:</div>
                                                  <input type="number"classname='form-control form-control-user' {...register("height", { min: 100, max: 200 })} />
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">weight in kilograms:</div>
                                                  <input type="number"classname='form-control form-control-user' {...register("height", { min: 30, max: 200 })} />
                                                  </div>
                                                  <center>
                                                  <div className='row'>
                                                  
                                                  <button type="Update" className='about-us'>Update</button>
                                                  
                                                  </div>
                                                  </center>
                                                  </div>
                                              
                                                
                                                
                                                
                                      
                                                   
                                                  <center>
                             <div className="buttons">
                                <button  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  onClick={() => navigate('/MyClassesTrainee')}><img src={pList} className="pListBbox"/></button>
                                <button  onClick={() => navigate('/Traineemessage')}><img src={feedback} className="feedbackBbox"/></button>
                                
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
        
    );
};

export default Profiledel;