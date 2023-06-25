import React from 'react'
import './MyClassesTrainee.css';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import pList from '../../images/pList.png'
import profile from '../../images/profile.png'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Classes from './Classes';
import { useParams } from 'react-router-dom';
import goback from '../../images/return.png'
import ReactTable from '../ReactTable/ReactTable';
import imageDelete from'../../images/delete.png';
import imageStart from'../../images/play.png';

const MyClassesTrainee=()=> {
  const { email } = useParams();
  const [classes, setClasses]=useState();
  const [TableData, setTableData] = useState([]);
   /* define what will disappear imeditally on the screen once the trainee log in  */
   useEffect(() => {
    async function fetchData() {
      try {
        const traineeEmail=localStorage.getItem('saved').replace(/"/g, '');
        console.log("before")
        const response = await axios.get('http://localhost:8000/api/traineesClass/MyClassesTrainee', {params:{traineeEmail}} );
        console.log("after", response.data.TraineesClass.user )
      setTableData(response.data.TraineesClass.user);
      } catch (error) {
        console.error("catch ",error);
      }
    }

    fetchData();
  }, []);
  const onClickStart = async (row) => {
      const traineeEmail =  localStorage.getItem('saved').replace(/"/g, '');
      const className =  row.original.className;
      const cType=row.original.cType;
      const description =  row.original.description;
      const keywords =  row.original.keywords;
      const trainerEmail =  row.original.trainerEmail;
      console.log({traineeEmail,className,cType,description,keywords,trainerEmail})
    localStorage.setItem('className',className);
    navigate('/ClassTrainningPlanes')
        
  }
  const onClickDelete = async (row) => {
      const className =  row.original.className;
      const res = await axios.post('http://localhost:8000/api/traineesClass/MyClassesTrainee', { params: {className } });
      if((res?.data?.success===true)){
        console.log("successful")
  }
  else{
    console.log("error",res.error)
  }
      
  }
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
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
        },
        {
          Header: 'trainerEmail',
          accessor: 'trainerEmail',
        },
        {
          Header: 'traineeEmail',
          accessor: 'traineeEmail',
        },
        {
          Header:'Action',
          accessor:'action',
          Cell: row => (
            <div>
                <button onClick={(e) => onClickDelete(row.row)} className='button-image' >  <img src={imageDelete} alt="image-button" style={{ width: '30px', height: '30px' }}/>
                </button>
                <button onClick={(e) => onClickStart(row.row)} className='button-image' >  <img src={imageStart} alt="image-button" style={{ width: '30px', height: '30px' }}/>
                </button>
            </div>     
        )
        }
      ],
      []
    );
    /*define what the My classes trainee page will contain, a table of all the classes that the trainee has registered to and down buttons */
  return (
    <center>
        <div className="container-fluid">
            <div className='backgroundcol'>
            <div className="row" >
                <center>
                 <div style={{ color: 'black' , fontSize: 20 }} >
                    <img src={pList} className="infoInfo"/>
                       My classes 
                </div>
                </center>
                
                <center>
                <div className='row'style={{flexDirection: 'row', height:30, width: 500}}>
                <div style={{ color: 'black' , fontSize: 20 ,textAlign:"center"}}>
                  You've been registered to the following classes:</div>
                  </div>
                  </center>
               
                </div>
                <center>
                <div className='row' style={{flexDirection: 'row', height:500, width: 500}}>
                
                <div className='col'>
                            
                                        
                
                 <center>                  
                 <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={TableData} />
                                    </table>
                                </div>
            </center> 
                                        
                                        </div>
                                        
                                            
                            </div>
                            </center>
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
export default MyClassesTrainee ;



