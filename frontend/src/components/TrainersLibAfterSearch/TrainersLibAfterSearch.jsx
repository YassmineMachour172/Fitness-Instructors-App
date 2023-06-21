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
import searchIcon from '../../images/search.jpg'
import menu from '../../images/menue.png'
import {useState} from 'react'
import './TrianersLibAfterSearch.css';
import play from '../../images/play.jpg';
import axios from 'axios';

const TrainersLibAfterSearch=()=> {
  
  const [email, setMail]=useState('');
  const [form,setForm]=React.useState({
    ExName:"",
    Keywords:""
  })
  const data = [
    { className: "Aerobice level 1"},
        { className: "Aerobice level 1"},
        { className: "Aerobice level 1" },
    
]
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
      const ex = form.ExName;
       try{
        const res=await axios.post("http://localhost:8000/api/exercise/TrainersLib",{ex,email})
        console.log("gooood");
      }catch(e){
        console.log(e)
    }
 }
    const handleSearch2 = async (e) => {
      e.preventDefault();
      console.log({email},"Search");
      const Keywords = form.Keywords;
       try{
        const res=await axios.post("http://localhost:8000/api/exercise/TrainersLib",{email,Keywords})
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
                    <img src={menu} className="infoInfo"/>
                       My Library 
                </div>
                <br/>
                <button onClick={() => navigate('/UploadeNewEx')} type="StartRecording" className='Upload'>Uplode New Exercise</button>
                </center>
                </div>
                <form >
                <center>
                
                <div className='row' style={{flexDirection: 'row', height:85, width: 500}}>
                  <div className='col'><input Style="color: Black;background-color: transparent;border-radius: 12px;" name='ExName'type="text" placeholder="Exercise Name" onChange={handleChange} value={searchInput} />
                  <button type='submit' Style="color: Black;background-color: transparent;border-radius: 12px;"onClick={handleSearch1} >Search</button> </div>
                
                <div className='col'>
                <input Style="color: Black;background-color: transparent;border-radius: 12px;" name='KeyWords' type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button Style="color: Black;background-color: transparent;border-radius: 12px;"onClick={handleSearch2}>Search</button>
                </div>
                </div>
                </center>
                <div className='row' style={{flexDirection: 'row', height:800, width: 500}}>
                <center>
                <div className='col'>
                            
                                        
                <table className='table3' Style="color:Black;text-align: center;">
                <tbody>
                <tr Style="color: #D66850;">
                   
                    
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.className}</td>
                            <td><button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/StartVideo')} ><img src={play} className="HomBbox"></img></button></td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;"  >Remove</button></td>
                                                   
                        </tr>
                    )
                })}
                </tbody>
            </table>
                                        </div>
                                        </center>
                                            
                            </div>
                            </form>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
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
export default TrainersLibAfterSearch ;
