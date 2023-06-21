import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import './TrainningPlanes.css';
const TrainningPlanes=()=> {
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
                <div className="row">
                        <div className="path-con">
                            <h5 className='pa'>Home --{'>'} Trainning Plans</h5>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="row">
                        <img src={logo} className="logo"/>
                    </div>
                <br/>
                </center>
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:85, width: 500}}>
                  <div className='col'><input Style="color: Black;background-color: transparent;border-radius: 12px;" type="text" placeholder="Exercise Name" onChange={handleChange} value={searchInput} />
                  <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/TrainersLibAfterSearch')}>Search</button> </div>
                
                <div className='col'>
                <input Style="color: Black;background-color: transparent;border-radius: 12px;" type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/TrainersLibAfterSearch')}>Search</button>
                </div>
                </div>
                </center>
                <div className='row' style={{flexDirection: 'row', height:800, width: 500}}>
                <center>
                <div className='col'>
                            
                <table className='table3' Style="color:Black;text-align: center;">
                <tr Style="color: #D66850;">
               
                    
                    
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.className}</td>
                            <td>{val.traineesName}</td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/SignIn')} >Select</button></td>
                            <td><button Style="color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Description')} >Description</button></td>                       
                        </tr>
                    )
                })}
            </table>
            
            <div className="down-buttons">
            
              <div className='row'><center>
              <button  className='home2' onClick={() => navigate('/')}>Home</button>
                                <button className='sign-in2' onClick={() => navigate('/SignIn')}>Sign In</button>
                                </center>
              </div>
              <div className='row'> <center>
              <button className='about-us' onClick={() => navigate('/about')}>About Us</button>
              </center>
              </div>
                                
                                
                               
                                      
                            </div>
                              
                                        </div>
                                        </center>
                                            
                            </div>
                
                <center>
                
                              </center>
                             
                      
            
            </div>
            </div>
            </center>
  )
}
export default TrainningPlanes ;
