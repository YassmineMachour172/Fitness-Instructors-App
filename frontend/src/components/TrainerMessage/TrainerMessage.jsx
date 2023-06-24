import React from 'react'
import './TrainerMessage.css';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import {useState} from 'react'
import axios from 'axios';
import Mess from '../../components/TraineeMessage/Mess';
import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
const TrainerMessage=()=> {
  const [U,setU]=useState([]);
    const { email } = useParams();
    const [mail, setMail]=useState('');
    const [Messages, setMessages]=useState();
    console.log("main",{email})
    /*the follwoing will display the messages for the trainer imedatlly after accessing this page */
    useEffect(() => {
        const fetchUser = async () => {
          try {
            console.log(email);
            console.log("before axios", email);
            const response = await axios.get('http://localhost:8000/api/messages/TrainerMessage', {email});
            if (response.data.success === true) {
              const dataTable= response.json();
                console.log(dataTable);
                if(dataTable.length>0)
                {
                  setMessages(dataTable);
                }
            } else {
              console.log(response.data.error);
            }
            console.log("requesting");
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };fetchUser();
      }, []);
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
        <div className='backgroundcol'>
            <div className="row" >
                <center>
                 <div Style="color:Black;" >
                    <img src={feedback} className="infoInfo"/>
                       My Messages 
                </div>
                <br/>
                <div style={{ color: 'black' }}>Your Trainess To Talk To:</div>
                </center>
                </div>
               
                <div className='row' style={{flexDirection: 'row', height:800, width: 500}}>
                <center>
                <div className='col'>
                            
                                        
                <table className='table3' Style="color:Black;text-align: center;margin: auto;">
                <tbody>
                <tr Style="color: #D66850;">
                <   th>Class's Name</th>
                    <th>Trainer's Name</th>
                    <th>Chat</th>
                </tr>
                
                  <Mess Messages={Messages}></Mess>
                </tbody>
            </table> 
                                        
                                        </div>
                                        </center>
                                            
                            </div>
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

export default TrainerMessage ;









