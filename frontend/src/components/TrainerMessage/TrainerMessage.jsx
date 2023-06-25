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
import {useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import goback from '../../images/return.png'
import ReactTable from '../ReactTable/ReactTable';

const TrainerMessage=()=> {
  const [U,setU]=useState([]);
    const { email } = useParams();
    const [TableData, setTableData] = useState([]);

    
    const [mail, setMail]=useState('');/*define state for the email */
    const [Messages, setMessages]=useState();/*define state for the message modal box */
    console.log("main",{email})
    /*the follwoing will display the messages foe the trainee imedatlly after accessing this page */
   
      useEffect(() => {
        const email = localStorage.getItem('saved').replace(/"/g, '');
        async function fetchData() {
          try {
            console.log("before")
            const response = await axios.get('http://localhost:8000/api/messages/TraineeMessage',{email} );
            console.log("after", response.data.MyMessagesTrainer.user)
            setTableData(response.data.MyMessagesTrainer.user);
          } catch (error) {
            console.error("catch ",error);
          }
        }
    
        fetchData();
      }, []);
      function handleClick  () {
        navigate('/Message');
      };
      const tableColumns = React.useMemo(
        () => [
          {
            Header: 'Sender',
            accessor: 'sender',
          },
          {
            Header: 'Reciever',
            accessor: 'reciever',
          },
          {
            Header: 'Message',
            accessor: 'message',
          }
        ],
        []
      );
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
    
        <div className="container-fluid">
            <div className='backgroundcol'>
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
                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={TableData} />
                                    </table>
                                </div>
                                        
                
                                        
                                        </div>
                                        </center>
                                            
                            </div>
                            <div className='row' style={{flexDirection: 'row', height:50, width: 100}}><div className="btn-group">
                            <button className="btn btn-primary" onClick={handleClick}>Write New</button>
                            </div></div>
                            <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div className="btn-group">
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"/></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/main-trainee/:email')}><img src={goback} className="ProfileBbox"/></button> 
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
  )
}
export default TrainerMessage ;









