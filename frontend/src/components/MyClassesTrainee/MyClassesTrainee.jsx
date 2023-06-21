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
import profile from '../../images/profile.png'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Classes from './Classes';
import { useParams } from 'react-router-dom';
import Profile from '../Profile/Profile';
const MyClassesTrainee=()=> {
  const { email } = useParams();
  const [classes, setClasses]=useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log(email);
        console.log("before axios", email);
        const response = await axios.get('http://localhost:8000/api/classes/MyClassesTrainee', {email});
        if (response.data.success === true) {
          const dataTable= response.json();
            console.log(dataTable);
            if(dataTable.length>0)
            {
              setClasses(dataTable);
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
    const handleClickProfile = () => {
      navigate('/Profile');    
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
                <tbody>
                <tr Style="color: #D66850;">
                    <th>Class's Name</th>
                    <th>Trainer's Name</th>
                    <th>Class's Description</th>
                    <th>Feedback</th>
                    <th>Start Class</th>
                </tr>
                
                  <Classes classes={classes}></Classes>
                </tbody>
            </table>
            </center> 
                                        
                                        </div>
                                        
                                            
                            </div>
                            </center>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
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
export default MyClassesTrainee ;



