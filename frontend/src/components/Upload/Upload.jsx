import React from 'react';
import { useNavigate  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function Upload() {
  const navigate = useNavigate(); /* define hook to navigate to other pages */
  const [email, setMail]=useState('');

  const [form,setForm]=React.useState({
    title:"",
    describtion:"",
    file:null
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
  const handleClickUploadNewEx = () => {
    navigate('/UploadeNewEx');

};

  async function handleSubmit(event){
    event.preventDefault();
    console.log(email,"UPLOAAAAAAAAAAAAAAAAAAd");
    console.log({form});
    const videoData =new FormData();
      const title=form.title;
      const location=form.location;
      localStorage.setItem('loc',JSON.stringify(location));
      const description=form.describtion;

      try{
        const res=await axios.post("http://localhost:8000/api/exercises/Upload",{title,location,description,email})
        
        
        if((res?.data?.success===true)){
              console.log("successful")
              handleClickUploadNewEx()
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
      <h1 Style="color: Black">Upload Youtube Video</h1>
      <center>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="title" autoComplete='off' placeholder='Title'/>
        </div>
        <div>
          <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="location" autoComplete='off' placeholder='Location'/>
        </div>
        <div>
          <textarea Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="description" autoComplete='off' placeholder='Description'/>
        </div>
       
        <button Style="color: Black;border-radius: 12px;" type='submit' className="about-us">Upload Video</button>
      </form>
      </center>
    </div>
  )
}
