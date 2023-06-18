import React from 'react'
import './NewClass.css';
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
import axios from 'axios';
const NewClass=()=> {
  const [email, setMail]=useState('');
  const [form,setForm]=React.useState({
    ClassN:"",
    KeyWords:""
  })
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
      const ClassN = searchInput;
       try{
        console.log("gooood");
        console.log(ClassN);
        const res=await axios.post("http://localhost:8000/api/exercise/NewClass",{ClassN})
        console.log(res);
      }catch(e){
        console.log(e)
    }
 }
    const handleSearch2 = async (e) => {
      e.preventDefault();
      
      const Keywords = searchInput;
       try{
        const res=await axios.post("http://localhost:8000/api/exercise/NewClass",{Keywords})
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
                <form>
                <center>
                <div className='row' style={{flexDirection: 'row', height:250, width: 500}}>
                  <div className='col'><input Style="color: Black;background-color: transparent;border-radius: 12px;" name="ClassN"type="text" placeholder="Class Name" onChange={handleChange} value={searchInput} />
                  <button Style="color: Black;background-color: transparent;border-radius: 12px;"onClick={handleSearch1}>Search</button> </div>
                
                <div className='col'>
                <input Style="color: Black;background-color: transparent;border-radius: 12px;" name="KeyWords" type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button Style="color: Black;background-color: transparent;border-radius: 12px;"onClick={handleSearch2}>Search</button>
                </div>
                </div>
                </center>
                </form>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div className="buttons">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('http://localhost:3000/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
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
export default NewClass ;




