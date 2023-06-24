import React from 'react';
import './TrainersLib.css';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png';
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import searchIcon from '../../images/search.jpg'
import menu from '../../images/menue.png'
import {useState} from 'react'
import axios from 'axios';
import Ex from './Ex';
import { useParams } from 'react-router-dom';
const TrainersLib=() => {
  const [setMail]=useState('');
  const [form,setForm]=React.useState({
    ExName:"",
    Keywords:""
  })
  const [exercise, setEx]=useState();
  const { email } = useParams();
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
   
    const handleSearch1 = async (e) => {
      e.preventDefault();
      
      //console.log({email},"Search");
      const ex = searchInput;
       try{
        console.log("gooood");
        const response=await axios.get("http://localhost:8000/api/exercises/TrainersLib",{email,ex})
        if (response.data.success === true) {
          const dataTable= response.json();
            console.log(dataTable);
            if(dataTable.length>0)
            {
              setEx(dataTable);
            }
        } else {
          console.log(response.data.error);
        }
        console.log("requesting");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleSearch2 = async (e) => {
      e.preventDefault();
      console.log({email},"Search");
      const Keywords = searchInput;
       try{
        const res=await axios.get("http://localhost:8000/api/exercises/TrainersLib",{email,Keywords})
        console.log("gooood");
      }catch(e){
        console.log(" not gooood");
        console.log(e)
    }
}
    
    
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
                <button onClick={() => navigate('/UploadeNewEx')} type="button" className='Upload'>Uplode New Exercise</button>
                </center>
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:250, width: 500}}>
                  <div className='col'><input Style="color: Black;background-color: transparent;border-radius: 12px;" name='ExName'type="text" placeholder="Exercise Name" onChange={handleChange} value={searchInput} />
                  <button Style="color: Black;background-color: transparent;border-radius: 12px;"  onClick={handleSearch1}>Search</button> </div>
                
                <div className='col'>
                <input Style="color: Black;background-color: transparent;border-radius: 12px;" name='KeyWords'type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button Style="color: Black;background-color: transparent;border-radius: 12px;"onClick={handleSearch2}>Search</button>
                </div>
                </div>
                <table className='table2' Style="color:Black;text-align: center;margin: auto;">
                <tbody>
                <tr Style="color: #D66850;">
                    <th>Exercise's Name</th>
                  
                </tr>
                
                  <Ex exercise={exercise}></Ex>
                </tbody>
                </table>
                </center>
                <div className='row'>
                <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
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
