import React, { useState } from 'react';
import { useNavigate,useParams  } from 'react-router-dom';
import './CreateNewClass.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import profile from '../../images/profile.png'
import CreateNewEx from '../../images/CreateNewEx.png'
import TrainersLib from '../TrainersLib/TrainersLib';
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import  { useEffect} from 'react';
import ReactTable from '../ReactTable/ReactTable';


const CreateNewClass = () => {
    const { email } = useParams();
    const [showModal, setShow] = useState(false);/*define state for the modal box */
    const [msgModal, setMsgModal] = useState('');/*define state for the message modal box */
    const [TableData, setTableData] = useState([]);


    const handleClose = () =>{
        setShow(false);
        setMsgModal('');
   }
   useEffect(() => {
    async function fetchData() {
      try {
        const trainingNum = localStorage.getItem('trainingNum').replace(/"/g, '');
        console.log("before")
        const response = await axios.get('http://localhost:8000/api/trainingPlans/CreateNewClass', { params: { trainingNum } });
        console.log("after")
        setTableData(response.data.TrainersLib.user);
      } catch (error) {
        console.error("catch ",error);
      }
    }
    fetchData();
  }, []);
  const tableColumns = React.useMemo(
    () => [
      {
        Header: 'trainingNum',
        accessor: 'trainingNum',
      },
      {
        Header: 'exercisetitle',
        accessor: 'exercisetitle',
      },
      {
        Header: 'className',
        accessor: 'className',
      },
      {
        Header: 'description',
        accessor: 'description',
      },{
        Header: 'trainerEmail',
        accessor: 'trainerEmail'
    }
    ],
    []
  );
   /* function that open the modal and displays it*/
   const handleShow = () =>{
       setShow(true);
   }
    const [form,setForm]=React.useState({
        NameOfC:"",
        description:"",
        cType:"",
        keywords:""
      }) 

   
    const navigate = useNavigate();
    const {  formState: { errors }} = useForm({
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
      async function handleSubmit(event){
        event.preventDefault();
        console.log({form});
        const NameOfC=form.NameOfC;
        const description=form.description;
        const cType=form.cType;
        const keywords=form.keywords;
        try{
          const res=await axios.post("http://localhost:8000/api/classes/CreateNewClass",{NameOfC,description,cType,email,keywords})
          if((res?.data?.success===true)){
                console.log("successful")
                localStorage.setItem('className', JSON.stringify(NameOfC));
                localStorage.setItem('description', JSON.stringify(description));
                setMsgModal("Uploaded successfully!")
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
        <div className='container'>
            <div id="page-top">
                <div className="row">
                    <h1 className="h3 mb-2 text-gray-800">Create New Class</h1>
                </div>
                <div className="row">
                <form action=""  onSubmit={handleSubmit} className="user" >
                            <div className="text-con">
                                                  <div className='col'>
                                                    <div className='row'>
                                                    <div className='text' Style="color:Black;">Name Of The Class:</div>
                                                   
                                                    <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="NameOfC"
                                                id='NameOfC'  /> 
                                                  </div>
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Type Of The Class:</div>
                                                   
                                                <select name='cType' onChange={handleChange}>
                                                    <option value="">Select an option</option>
                                                    <option value="Basic squat">Basic squat</option>
                                                    <option value="Jump squat">Jump squat</option>
                                                    <option value="Forword punch">Forword punch</option>
                                                    <option value="Jumping jacks">Jumping jacks</option>
                                                </select>
                                                      </div>
                                                    
                                                  
                                                  <div className='row'>
                                                  <div className='text' Style="color:Black;">Description:</div>
                                                  
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} id="description" type="textBox" 
                                                    name="description"
                                                    placeholder="please descripe the class" />
                                                  
                                                  </div>
                                                  <div className='row'margin-bottom='-10px'>
                                                  
                                                  <div className='text' Style="color:Black;">Key Words:</div>
                                                  
                                                  <input Style="color: Black;background-color: transparent;border-radius: 12px;" onChange={handleChange} type="text" name="keywords" id='KeyWords'
                                                placeholder="#"/>
                                                
                                                 
                                                </div>
                                                <div className='row' >
                                                <div style={{ color: 'black' }}>Please choose from the library the exercises you wish to add to this class:</div>
                                                </div>
                                                
                                                <div className='row'>
                                                    <button type="button" onClick={()=>{navigate('/TrainersLibSelect')}} placeholder='first' ></button>
                                                   
                                                    
                                                </div>
                                                <div className='row'>
                                                  <div className='col'>
                                                  <button  type="submit" className='about-us'>Publish and Save</button>
                                                  </div>
                                                  <div className='col'>
                                                  <button onClick={() => navigate('/MyClassesTrainer')} type="submit" className='about-us'>Save</button>
                                                  </div>
                                                  </div>
                                                </div>
                                                  
                                                  </div>
                                                 </form>
                </div>
            {/* Page Wrapper */}
            <div id="wrapper">

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">
                    
                        

                        {/* Begin Page Content */}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            
                            <div className="row">
                                <button className="mb-4 btn btn-primary" onClick={()=>{navigate('/TrainersLibSelect')}}>Choose from my library</button>
                            </div>
                            <div className="card shadow mb-4">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <ReactTable columns={tableColumns} data={TableData} />
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}

                </div>
                {/* End of Content Wrapper */}

            </div>
            {/* End of Page Wrapper */}

            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
    </div>
</div>
    );
};

export default CreateNewClass;
