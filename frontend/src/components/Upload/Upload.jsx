import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

export default function Upload() {
  const [form,setForm]=React.useState({
    title:"",
    describtion:"",
    file:null
  })

  function handleChange(event){
    const inputValue = event.target.name=== "file" ? event.target.files[0] : event.target.value;
    
    setForm({
      ...form,
      [event.target.name]: inputValue
    })
  }

  function handleSubmit(event){
    event.preventDefault();

    console.log({form});
    const videoData =new FormData();
      videoData.append("videoFile",form.file);
      videoData.append("title",form.title);
      videoData.append("description",form.describtion);
      axios.post("http://localhost:8000/Upload",videoData)
      .then(response=>{
        console.log(response.data);
      })
     
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
