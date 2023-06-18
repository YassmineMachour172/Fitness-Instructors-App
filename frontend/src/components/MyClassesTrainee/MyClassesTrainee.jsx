import React from 'react'
import './MyClassesTrainee.css';
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
import Description from '../../images/description.png'
import Feedbackbutton from '../../images/Feedbackbutton.png'
import images from '../../images/images.png'

const MyClassesTrainee=()=> {
  const data = [
    { className: "Aerobice level 2", trainerName: "Lina Abu" },
        { className: "Pilates", trainerName:"Sandra Leve"},
        { className: "FireWork", trainerName:"Lina Abu" },
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
    
    
    const [searchInput, setSearchInput] = useState("");
  return (
    <center>
        <div className="container-fluid">
            <div className="col">
            <div className="row" >
                <center>
                 <div style={{ color: 'black' , fontSize: 20 }} >
                    <img src={pList} className="infoInfo"/>
                       My classes 
                </div>
                </center>
                
                <center>
                <div className='row'style={{flexDirection: 'row', height:30, width: 500}}>
                <div style={{ color: 'black' , fontSize: 20 ,textAlign:"center"}}>
                  You've been registered to the following classes:</div>
                  </div>
                  </center>
               
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:500, width: 500}}>
                
                <div className='col'>
                            
                                        
                
                 <center>                  
                <table className='table3' Style="color:Black;text-align: center;margin: auto;">
                <tr Style="color: #D66850;">
                    <th>Class's Name</th>
                    <th>Trainer's Name</th>
                    <th>Class's Description</th>
                    <th>Feedback</th>
                    <th>Start Class</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.className}</td>
                            <td>{val.trainerName}</td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Description')} >Description</button></td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/TraineeMessage')} >Feedback</button></td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/StartVideo')} >Start The Class</button></td>                        
                        </tr>
                    )
                })}
            </table>
            </center> 
                                        
                                        </div>
                                        
                                            
                            </div>
                            </center>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                <div className="buttons">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
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
export default MyClassesTrainee ;



