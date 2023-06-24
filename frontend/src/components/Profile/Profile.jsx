import { useNavigate ,useParams } from 'react-router-dom';
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
import React, { useEffect,useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  //const { email } = useParams();
  const [fname, setname] = useState('');
  const [mail, setMail]=useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge]=useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight]=useState('');

  
  useEffect(() => {

      const savedEmail =  localStorage.getItem('saved').replace(/"/g, '');
      console.log({savedEmail});
      setMail(savedEmail)
    const fetchUser = async () => {
      try {
        
        console.log("before axios", savedEmail);
        const response = await axios.get('http://localhost:8000/api/trainees/Profile', { params: { savedEmail } });
        //params: { email: email }
        if (response.data.success === true) {
          setname(response.data.info.user.fName);
          setPhone(response.data.info.user.phone);
          setAge(response.data.info.user.age);
          setGender(response.data.info.user.gender);
          setHeight(response.data.info.user.height);
          setWeight(response.data.info.user.weight);
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
  const handleOptionChange = (e) => {
    setGender(e.target.value);
  };
 
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    const profileForm = document.querySelector('#profile-form'); 
    const submitForm = async ( e) => {
      e.preventDefault();
      const fName=profileForm.querySelector('#fname').value;
      const phone=profileForm.querySelector('#phone').value;
      const age=profileForm.querySelector('#age').value;
      const gender=profileForm.querySelector('#gender').value;
      const height=profileForm.querySelector('#height').value;
      const weight=profileForm.querySelector('#weight').value;
      try {
        
        const response = await axios.post("http://localhost:8000/api/trainees/Profile", { fName,mail,phone,age,gender,height,weight });
        console.log("profileeeeeeeeeeeeeeeeeeeee",response.data);
      } catch (error) {
        console.error(error);
        return;
      }
    }
    return (
        <div className="container-fluid">
            <div className='backgroundcol'>
            <div className="row">
                 <div ><img src={profile} className="infoInfo"/>{fname}</div>
                    </div>
                    <div className='row'>
                    <div className="row" id='form-con'>
                                        <form action="POST" id='profile-form' onSubmit={handleSubmit(submitForm)}>
                                            <div className="text-con">
                                                <div className='text' Style="color:Black;">Account Information:</div>
                                                
                                                  <div className='col'>
                                                    <div className='row'>
                                                    <div className='text' Style="color:Black;">Nick Name:</div>
                                                    </div>
                                                    <div className='row'>
                                                    <input Style="color: Black;background-color: transparent;border-radius: 12px;"type="text" name="firstName" onChange={setname}
                                                id='fname' placeholder={fname} {...register('fname')}/>
                                                {errors.fName ? <p className='error-msg'>{errors.fName?.message}</p> : <br/>} {/* display error message if the first name is not valid */}
                                                    
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">E-mail Address:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;"id="emailin" type="email" 
                                                    name="email" aria-describedby="emailHelp"
                                                    placeholder="email" {...register('email')} value={mail} disabled/>
                                                {errors.email ? <p className='error-msg'>{errors.email?.message}</p> : <br/>} {/* display error message if the email is not valid */}
                                                  
                                                  </div>
                                                  <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Phone Number:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" type="text" name="phone" id='phone' onChange={setPhone}
                                                placeholder={phone} {...register('phone')}/>
                                                {errors.phone ? <p className='error-msg'>{errors.phone?.message}</p> : <br/>} {/* display error message if the phone number is not valid */}
                                                   
                                                 
                                                </div>
                                                <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Password:</div>
                                                  </div>
                                                  <div className='row'>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;"type="password" id='password1' 
                                                   name="password" placeholder="Password" {...register('password')}disabled/>
                                                  {errors.password ? <p className='error-msg'>{errors.password?.message}</p> : <br/>} {/* display error message if the password is not valid */}
                                                  
                                                  
                                                </div>
                                                <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Password Confirmation:</div>
                                                  </div>
                                                  <div className='row'> 
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" type="password"  id='password2'
                                                  name="repeatPassword" placeholder="Repeat Password" {...register('repeatPassword')} disabled/>
                                                  {errors.repeatPassword ? <p className='error-msg'>errors.repeatPassword.message</p> : <p className='space2'>{'.'}</p>} {/* display error message if the repeat password is not valid */}
                            
                                                 
                                                </div>
                                                         
                                                  
                                                <div className='text' Style="color:Black;">Health Related Information:</div>
                                                  
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Age:</div>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" id="age"type="number" onChange={setAge} placeholder={age} className='form-control form-control-user' {...register("age", { min: 18, max: 99 })} />
                                                  </div>
                                                   <div className='row'>
                                                   <div className='text' Style="color:Black;">Gender:</div>
      
                                                   <select Style="color: Black;background-color: transparent;border-radius: 12px;" id="gender"value={gender}{...register("gender")} onChange={handleOptionChange}>
                                                   <option value="female">female</option>
                                                   <option value="male">male</option>
                                                   <option value="other">other</option>
                                                   </select>
                                                   </div>
                                                   <div className='row'>
                                                  <div className='text' Style="color:Black;">Height in cm:</div>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;"type="number" id="height"placeholder={height} onChange={setHeight} className='form-control form-control-user' {...register("height", { min: 100, max: 200 })} />
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">weight in kilograms:</div>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;"type="number" id="weight" placeholder={weight} onChange={setWeight} className='form-control form-control-user' {...register("weight", { min: 30, max: 200 })} />
                                                  </div>
                                                  <center>
                                                  <div className='row'>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" type="submit" onClick={submitForm} className='Update' value='Update'/>
                                                  
                                                  
                                                  </div>
                                                  </center>
                                                  </div>
                                              
                                                
                                                
                                                
                                      
                                                   
                                                  <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>

                                
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

export default Profile;