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
import {useEffect} from 'react'
import profile from '../../images/profile.png'
import {useState} from 'react'
import NewClassTrainee from '../../images/CreateNewEx.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Classes from '../../components/MyClassesTrainer/Classes';
import goback from '../../images/return.png'
import ReactTable from '../ReactTable/ReactTable';
import imageDelete from'../../images/delete.png';
import { render } from '@testing-library/react';

const NewClass=()=> {
  const { email } = useParams();
  const [classes, setClasses]=useState();
  const [TableData, setTableData] = useState([]);
  const navigate = useNavigate();/*define hook to navigate between pages*/
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    const onClickSelect = async (row) => {
      console.log('select button clicked for class: ', row.original.className);
      const exercisetitle=row.original.title
      const traineeEmail =  localStorage.getItem('saved').replace(/"/g, '');
      const className =  row.original.className;
      const cType=row.original.cType;
      const description =  row.original.description;
      const keywords =  row.original.keywords;
      const trainerEmail =  row.original.trainerEmail;


      /*insert the exercise to the db to that trainer*/ 
      const res = await axios.post('http://localhost:8000/api/traineesClass/NewClass', { params: { exercisetitle,traineeEmail,className,cType,description,keywords,trainerEmail } });
      if((res?.data?.success===true)){
        console.log("successful")
        /*IT RETURNS THE TRAINING NUMBER*/
        render();
  }
  else{
    console.log("error",res.error)
  }
      
  }
    useEffect(() => {
      async function fetchData() {
        try {
          console.log("before")
          const response = await axios.get('http://localhost:8000/api/classes/NewClass', );
          console.log("after", response.data.NewClass.user)
          setTableData(response.data.NewClass.user);
        } catch (error) {
          console.error("catch ",error);
        }
      }
  
      fetchData();
    }, []);

    const tableColumns = React.useMemo(
      () => [
        {
          Header: 'Class Name',
          accessor: 'className',
        },
        {
          Header: 'Type',
          accessor: 'cType',
        },
        {
          Header: 'Description',
          accessor: 'description',
        },
        {
          Header: 'Keywords',
          accessor: 'keywords',
        },{
          Header: 'Action',
          accessor: 'action',
          Cell: row => (
              <div>
                  <button onClick={(e) => onClickSelect(row.row)} className='button-image' >  <img src={imageDelete} alt="image-button" style={{ width: '30px', height: '30px' }}/>
                  </button>
              </div>     
          )
      }
      ],
      []
    );
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
                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={TableData} />
                                    </table>
                                </div>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
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
            </center>
  )
}
export default NewClass ;




