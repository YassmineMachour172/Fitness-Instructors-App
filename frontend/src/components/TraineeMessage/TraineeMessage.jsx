import React from 'react'
import './TraineeMessage.css';
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
import {useState} from 'react'

const TraineeMessage=()=> {
  const data = [
    { className: "Aerobice level 1", traineesName: "Nadeen Shanan" },
    { className: "Aerobice level 1", traineesName:"Yassmine Machour"},
    { className: "Aerobice level 1", traineesName:"Anan Shanan" },
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
                 <div Style="color:Black;" >
                    <img src={feedback} className="infoInfo"/>
                       My Messages 
                </div>
                <br/>
                <div style={{ color: 'black' }}>Your Trainers To Talk To:</div>
                </center>
                </div>
               
                <div className='row' style={{flexDirection: 'row', height:400, width: 500}}>
                <center>
                <div className='col'>
                            
                                        
                <table className='table2' Style="color:Black;text-align: center;">
                <tr Style="color: #D66850;">
                    <th>Class's Name</th>
                    <th>Trainee's Name</th>
                    <th>Chat</th>
                    
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.className}</td>
                            <td>{val.traineesName}</td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/TraineeMessage')} >Chat</button></td>
                                                   
                        </tr>
                    )
                })}
            </table>
                                        
                                        </div>
                                        </center>
                                            
                            </div>
                 
                            <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div className="buttons">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('http://localhost:3000/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
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
export default TraineeMessage ;









