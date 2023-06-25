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
import profile from '../../images/profile.png'
import {useState} from 'react'
import NewClassTrainee from '../../images/CreateNewEx.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Classes from '../../components/MyClassesTrainer/Classes';
const NewClass=()=> {
  const { email } = useParams();
  const [classes, setClasses]=useState();
  const navigate = useNavigate();/*define hook to navigate between pages*/
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
      
      const ClassN = searchInput;
       try{
        console.log(email);
        console.log("gooood");
        console.log(ClassN);
        const response=await axios.post("http://localhost:8000/api/classes/NewClass",{ClassN})
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
    };
  
  
 
    const handleSearch2 = async (e) => {
      e.preventDefault();
      
      const Keywords = searchInput;
       try{
        const response=await axios.post("http://localhost:8000/api/classes/NewClass",{Keywords})
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
    };
    
    const [searchInput, setSearchInput] = useState("");
    /*define what the New class page will contain, search box to search classes and register to  and down buttons */
  return (
    <center>
        <div className="container-fluid">
            <div className='backgroundcol'>
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
                <table className='table2' Style="color:Black;text-align: center;margin: auto;">
                <tbody>
                <tr Style="color: #D66850;">
                    <th>Class's Name</th>
                    <th>Trainer's Name</th>
                    <th>Class's Description</th>
                    <th>Select</th>
                </tr>
                
                  <Classes classes={classes}></Classes>
                </tbody>
                </table>
                </center>
                </form>
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
export default NewClass ;




