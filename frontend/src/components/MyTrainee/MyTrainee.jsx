import React from 'react'
import './MyTrainee.css';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import profile from '../../images/profile.png'
import {useState} from 'react'
import MyTrainee2 from '../../images/MyTrainee2.png'
import Trainees from './Trainees';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'
import goback from '../../images/return.png'
const MyTrainee=()=> {
    const { email } = useParams();
    const [Trainer, setTrainer]=useState();
    console.log("main",{email})
    /* define what will disappear imeditally on the screen once the trainer log in  */
    useEffect(() => {
        const fetchUser = async () => {
          try {
            console.log(email);
            console.log("before axios", email);
            const response = await axios.get('http://localhost:8000/api/myTrainees/MyTrainee', {email});
            if (response?.data.success === true) {
              const dataTable= response.json();
                console.log(dataTable);
                if(dataTable.length>0)
                {
                  setTrainer(dataTable);
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
      }, []);
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
  
/*define what the My  trainees page will contain, a table of all the trainees that belonge to the trainer and down buttons */
  return (
    <center>
        <div className="container-fluid">
            <div className='col'>
            <div className="row" >
                <center>
                 <div Style="color:Black;" >
                    <img src={MyTrainee2} className="infoInfo"/>
                       My Trainees 
                </div>
                <br/>
                <div style={{ color: 'black' }}></div>
                </center>
                </div>
               
                <div className='row' style={{flexDirection: 'row', height:800, width: 500}}>
                <center>
                <div className='col'>
                            
                <table className='table3' Style="color:Black;text-align: center;margin: auto;">
                <tbody>
                <tr Style="color: #D66850;">
                 <th>Name</th>
                    <th>Class Name</th>
                    <th>State</th>
                    
                </tr>
                
                  <Trainees Trainer={Trainer}></Trainees>
                </tbody>
            </table>              
                
                                        
                                        </div>
                                        </center>
                                            
                            </div>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/MainTrainer')}><img src={goback} className="ProfileBbox"/></button>
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
export default MyTrainee ;





