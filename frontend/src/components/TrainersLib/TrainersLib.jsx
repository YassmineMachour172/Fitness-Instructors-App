<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactTable from '../ReactTable/ReactTable';
import './try.css';
import imageDelete from'../../images/delete.png';
import imageEdit from '../../images/edit.png';
import imageStart from '../../images/start.png';
import { useNavigate  } from 'react-router-dom';
import e from 'express';


const TrainersLib = () => {
  const [carsTableData, setCarsTableData] = useState([]);
  const navigate = useNavigate();

  const onClickEdit = (row) => {
  /*  console.log('Edit button clicked for car with treatment number: ', row.original.treatmentNumber);
    localStorage.setItem('carService', JSON.stringify(row.original)); /* save the car service data that choose to edit in local storage */
    //navigate('/editCarService'); /* navigate to the editCarService page */
}
const onClickDelete = async (row) => {
        //console.log('Delete button clicked for car with treatment number: ', row.original.title);
        //const title=row.original.title
       // const response = await axios.get('http://localhost:8000/api/exercises/TrainersLib', { params: { title } });
          //window.location.reload(false)
        
    }
    const onClickStart =async (row) => {
      //localStorage.setItem('video',JSON.stringify(row));
     // navigate('/StartVideo');
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const email = localStorage.getItem('saved').replace(/"/g, '');
        const response = await axios.get('http://localhost:8000/api/exercises/TrainersLib', { params: { email } });
        setCarsTableData(response.data.TrainersLib.user);
=======
import React from 'react';
import './TrainersLib.css';
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
import searchIcon from '../../images/search.jpg'
import menu from '../../images/menue.png'
import {useState} from 'react'
import axios from 'axios';
import Ex from './Ex';
import { useParams } from 'react-router-dom';
const TrainersLib=() => {
  const [setMail]=useState('');
  const [form,setForm]=React.useState({
    ExName:"",
    Keywords:""
  })
  const [exercise, setEx]=useState();
  const { email } = useParams();
  const navigate = useNavigate();
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
      
      //console.log({email},"Search");
      const ex = searchInput;
       try{
        console.log("gooood");
        const response=await axios.get("http://localhost:8000/api/exercises/TrainersLib",{email,ex})
        if (response.data.success === true) {
          const dataTable= response.json();
            console.log(dataTable);
            if(dataTable.length>0)
            {
              setEx(dataTable);
            }
        } else {
          console.log(response.data.error);
        }
        console.log("requesting");
        console.log(response.data);
<<<<<<< HEAD
>>>>>>> parent of 41107597 (325)
=======
>>>>>>> parent of 41107597 (325)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const tableColumns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Keywords',
        accessor: 'keywords',
      },{
        Header: 'Action',
        accessor: 'action',
        Cell: row => (
            <div>
                <button onClick={() => onClickEdit(row.row)} className='button-image'> {/* define the edit button */}
                    <img src={imageEdit} alt="image-button" style={{ width: '30px', height: '30px' }}/>
                </button>
                <button onClick={(e) => onClickDelete(row.row)} className='button-image'> {/* define the delete button */}
                    <img src={imageDelete} alt="image-button" style={{ width: '30px', height: '30px' }}/>
                </button>
                <button onClick={(e) => onClickStart(row.row)} className='button-image'> {/* define the delete button */}
                    <img src={imageStart} alt="image-button" style={{ width: '30px', height: '30px' }}/>
                </button>
            </div>     
        )
    }
    ],
    []
  );

  return (
<<<<<<< HEAD
    <div className='container'>
    <div id="page-top">

        {/* Page Wrapper */}
        <div id="wrapper">

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">

                    

                    {/* Begin Page Content */}
                    <div className="container-fluid">
=======
    <center>
        <div className="container-fluid">
            <div className="col">
            <div className="row">
                <center>
                 <div Style="color:Black;" >
                    <img src={menu} className="infoInfo"/>
                       My Library 
                </div>
                <br/>
                <button onClick={() => navigate('/UploadeNewEx')} type="button" className='Upload'>Uplode New Exercise</button>
                </center>
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:250, width: 500}}>
                  <div className='col'><input Style="color: Black;background-color: transparent;border-radius: 12px;" name='ExName'type="text" placeholder="Exercise Name" onChange={handleChange} value={searchInput} />
                  <button Style="color: Black;background-color: transparent;border-radius: 12px;"  onClick={handleSearch1}>Search</button> </div>
                
                <div className='col'>
                <input Style="color: Black;background-color: transparent;border-radius: 12px;" name='KeyWords'type="text" placeholder="KeyWords" onChange={handleChange} value={searchInput} />
                <button Style="color: Black;background-color: transparent;border-radius: 12px;"onClick={handleSearch2}>Search</button>
                </div>
                </div>
                <table className='table2' Style="color:Black;text-align: center;margin: auto;">
                <tbody>
                <tr Style="color: #D66850;">
                    <th>Exercise's Name</th>
                  
                </tr>
                
                  <Ex exercise={exercise}></Ex>
                </tbody>
                </table>
                </center>
                <div className='row'>
                <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                              </center>
                              </div>
>>>>>>> parent of 41107597 (325)
                        <div className="row">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Library  <br/></h1>
                        </div><div className="row">
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={carsTableData} />
                                    </table>
                                </div>
                            </div>
                        </div></div>
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

export default TrainersLib;
