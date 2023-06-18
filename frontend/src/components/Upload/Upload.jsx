import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { useEffect,useState } from 'react';

export default function Upload() {
  const [email, setMail]=useState('');
  const [form,setForm]=React.useState({
    title:"",
    describtion:"",
    file:null
  })
 useEffect(()=>{
    const savedEmail =  localStorage.getItem('saved');
    console.log({savedEmail});
    setMail(savedEmail)
},[]);
  function handleChange(event){
    const inputValue = event.target.name=== "file" ? event.target.files[0] : event.target.value;
    
    setForm({
      ...form,
      [event.target.name]: inputValue
    })
  }

  async function handleSubmit(event){
    event.preventDefault();
    console.log({email},"UPLOAAAAAAAAAAAAAAAAAAd");
    console.log({form});
    const videoData =new FormData();
      const title=form.title;
      const location=form.location;
      const discription=form.describtion;

      try{
        const res=await axios.post("http://localhost:8000/api/exercise/Upload",{title,location,discription,email})
        /*
        if(res?.data?.info==="use exsit"){
          console.log(res,"the user is already exists")
          setMsgModal("the user is already exists")
        handleShow()
        }
        if((res?.data?.info===null)){
              console.log("successful")
              handleClickMainTrainee()
        }
        else{
          console.log("error",res.error)
        }
        */
      }catch(e){
          console.log(e)
      }
  }
  return (
    <div>
      <h1 Style="color: Black">Upload Youtube Video</h1>
      <center>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="title" autoComplete='off' placeholder='Title'/>
        </div>
        <div>
          <input Style="color: Black;background-color: transparent;border-radius: 12px;"onChange={handleChange} type="text" name="location" autoComplete='off' placeholder='Location'/>
        </div>
        <div>
          <textarea Style="color: Black;background-color: transparent;border-radius: 12px;"onChange={handleChange} type="text" name="description" autoComplete='off' placeholder='Discription'/>
        </div>
       
        <button Style="color: Black;border-radius: 12px;" type='submit' className="about-us">Upload Video</button>
      </form>
      </center>
    </div>
  )
}
