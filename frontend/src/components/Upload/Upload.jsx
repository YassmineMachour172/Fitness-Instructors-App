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
      <h1>Upload Youtube Video</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" name="title" autoComplete='off' placeholder='Title'/>
        </div>
        <div>
          <textarea onChange={handleChange} type="text" name="description" autoComplete='off' placeholder='Discription'/>
        </div>
        <div>
          <input onChange={handleChange} accept='video/mp4' type="file" name="file"  placeholder='Add Your File'/>
        </div>
        <button type='submit'>Upload Video</button>
      </form>
    </div>
  )
}
