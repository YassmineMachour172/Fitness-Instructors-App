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
import Uplode from '../../images/upload1.png'
import  { useEffect,useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
const UploadeNewEx = () => {
    const navigate = useNavigate();
    const [email, setMail]=useState('');
  const [msgModal, setMsgModal] = useState('');/*define state for the message modal box */
  const [showModal, setShow] = useState(false);/*define state for the modal box */

  
  const [form,setForm]=React.useState({
    title:"",
    description:"",
    location:"",
    keywords:""
  })
  useEffect(()=>{
    const savedEmail =  localStorage.getItem('saved').replace(/"/g, '');
    console.log({savedEmail});
    setMail(savedEmail)
},[]);
    const { register, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    function handleChange(event){
      const inputValue =event.target.value;
      
      setForm({
        ...form,
        [event.target.name]: inputValue
      })
    }
    const handleClose = () =>{
      setShow(false);
      setMsgModal('');
      navigate(`/MainTrainer/${email}`)
 }

 /* function that open the modal and displays it*/
 const handleShow = () =>{
     setShow(true);
 }
    async function handleSubmit(event){
      event.preventDefault();
      console.log(email,"UPLOAAAAAAAAAAAAAAAAAAd");
      console.log({form});
      const videoData =new FormData();
        const title=form.title;
        const location=form.location;
        const description=form.descrpition;
        const keywords=form.keywords;
        
  
        try{
          const res=await axios.post("http://localhost:8000/api/exercises/UploadeNewEx",{title,location,description,email,keywords})
          
          
          if((res?.data?.success===true)){
                console.log("successful")
                setMsgModal("Uploaded the ",title," video successfully!")
               handleShow();
          }
          else{
            console.log("error",res.error)
            setMsgModal("error",res.error);
            handleShow();
          }
          
        }catch(e){
            console.log(e)
        }
    }
    return (
        <center>
        <div className="container-fluid">
            <div className="col">
            <div className="row">
                <center>
                 <div Style="color:Black;" >
                    <img src={Uplode} className="infoInfo"/>
                       Uploade new exercise
                </div>
                </center>
            </div>
           
                    <div className='row'>
                    <div className="row" id='form-con'>
                                        <form action=""  onSubmit={handleSubmit}  >
                                            <div className="text-con">
                                                  <div className='col'>
                                                    <div className='row'>
                                                    <div className='text' Style="color:Black;">Name Of The Exercise:</div>
                                                    </div>
                                                    <div className='row'>
                                                    <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="title" autoComplete='off' placeholder='Title'/>
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Description:</div>
                                                  </div>
                                                  <div className='row'>
                                                    <textarea Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="description" autoComplete='off' placeholder='Description'/> 
                                                  </div>
                                                  <div className='row'>
                                                  
                                                  <div className='text' Style="color:Black;">Location:
                                                  </div>
                                                  <div>
                                                    <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="location" autoComplete='off' placeholder='Location'/>
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Key Words:</div>
                                                  </div>
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="keywords" autoComplete='off' placeholder='#'/>
                                                
                                                 
                                                </div>
                                                <br/>
                                                <br/>
                                                <center>
                                                  <div className='row'>
                                                  
                                                    <button type='submit' className='about-us'>Uplode the video </button>
                                                  
                                                  </div>
                                                  <div className='row'>
                                                  

                                                  <button type="Upload" className='about-us' onClick={()=>{navigate(`/MainTrainer/${email}`)}}>MainTrainer</button>

                                                  
                                                  </div>
                                                  </center>
                                                  <Modal show={showModal} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                    <Modal.Title className='msg-modal-title'>ALERT!</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body><p className='msg-modal'>{msgModal}</p></Modal.Body>
                                                    <Modal.Footer>
                                                      <Button variant="secondary" onClick={handleClose}>
                                                          Close
                                                      </Button>
                      
                                                    </Modal.Footer>
                                                  </Modal> 
                                                </div>
                                                <center>
                                                    <div class="btn-group">
                                                        <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                                        <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                                        <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                                                    </div>
                                                </center>
                                          
                                                <div className="row">
                                                    <center>
                                                      <img src={logo} className="logo"/>
                                                    </center>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                                
                                      </div>
                    
                      </div>
                      </center>
        
    );
};

export default UploadeNewEx;