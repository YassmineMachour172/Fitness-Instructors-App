import React from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
 
export default function Upload() {
  const navigate = useNavigate(); /* define hook to navigate to other pages */
  const [email, setMail]=useState('');

  const [form,setForm]=React.useState({
    sender:"",
    reciever:"",
    message:""
  })
 useEffect(()=>{
    const savedEmail =  localStorage.getItem('saved').replace(/"/g, '');
    console.log({savedEmail});
    setMail(savedEmail)
},[]);
  function handleChange(event){
    const inputValue =event.target.value;
    
    setForm({
      ...form,
      [event.target.name]: inputValue
    })
  }


  async function handleSubmit(event){
    event.preventDefault();
    console.log(email,"UPLOAAAAAAAAAAAAAAAAAAd");
    console.log({form});
      const sender=localStorage.getItem('saved').replace(/"/g, '');
      const reciever=form.reciever;
      const message=form.message;

      try{
        const res=await axios.post("http://localhost:8000/api/messages/Message",{params:{sender,reciever,message}})
        
        
        if((res?.data?.success===true)){
              console.log("successful")
              navigate(`/TraineeMessage/${email}`);
        }
        else{
          console.log("error",res.error)
        }
        
      }catch(e){
          console.log(e)
      }
  }
  return (
    <div>
      <div className='backgroundcol'>
      <h1 Style="color: Black">To Whom You wish to write to?</h1>
      <center>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="sender" autoComplete='off' value={localStorage.getItem('saved').replace(/"/g, '')}/>
        </div>
        <div>
          <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="reciever" autoComplete='off' placeholder='Reciever'/>
        </div>
        <div>
          <textarea Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="message" autoComplete='off' placeholder='Message'/>
        </div>
       
        <button Style="color: Black;border-radius: 12px;" type='submit' className="about-us">Send</button>
      </form>
      </center>
    </div>
    </div>
  )
}
