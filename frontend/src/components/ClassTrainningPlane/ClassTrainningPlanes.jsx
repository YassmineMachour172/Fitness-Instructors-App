import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from '../../Validations/FormsValidation';
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import './TrainningPlanes.css';
import {useEffect} from 'react'
import axios from 'axios';
import imageStart from '../../images/play.png'
import ReactTable from '../ReactTable/ReactTable';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png'
import profile from '../../images/profile.png'
import goback from '../../images/return.png'


const ClassTrainningPlanes=()=> {
    const [TableData, setTableData] = useState([]);
    const [descriptionData, setDescriptionData] = useState('');
    const navigate = useNavigate();
    const {  formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    const onClickSelect = async (row) => {
        const exercisetitle=row.original.exercisetitle;
        const res = await axios.get('http://localhost:8000/api/exercises/ClassTrainningPlanes', { params: { exercisetitle} });
        if((res?.data?.success===true)){
          console.log("successful",res.data.NewClass.user.location)
          const loc=res.data.NewClass.user.location;
          localStorage.setItem('location',res.data.NewClass.user.location)
          /*IT RETURNS THE TRAINING NUMBER*/
          navigate('/StartVideo');
    }
    else{
      console.log("error",res.error)
    }
        
    }
    useEffect(() => {
        const className=localStorage.getItem('className')

        async function fetchData() {
          try {
            console.log("before")
            //get the training plan list
            const response = await axios.get('http://localhost:8000/api/trainingPlans/ClassTrainningPlanes',{params:{className}} );
            setTableData(response.data.NewClass.user);
            //get the classDetails
            const response1 = await axios.get('http://localhost:8000/api/classes/ClassTrainningPlanes',{params:{className} });
            setDescriptionData(response1.data.NewClass.user.description);

          } catch (error) {
            console.error("catch ",error);
          }
        }
    
        fetchData();
      }, []);

      const tableColumns = React.useMemo(
        () => [
          {
            Header: 'trainingName',
            accessor: 'trainingName',
          },
          {
            Header: 'exercisetitle',
            accessor: 'exercisetitle',
          },
          {
            Header: 'description',
            accessor: 'description',
          },
          {
            Header: 'trainerEmail',
            accessor: 'trainerEmail',
          },{
            Header: 'Action',
            accessor: 'action',
            Cell: row => (
                <div>
                    <button onClick={(e) => onClickSelect(row.row)} className='button-image' >  <img src={imageStart} alt="image-button" style={{ width: '30px', height: '30px' }}/>
                    </button>
                </div>     
            )
        }
        ],
        []
      );
  return (
    <center>
        <div className="container-fluid">
        <div className='col'>
            <div className="row" >
                <center>
                <div className="row">
                        <div className="path-con">
                            <h5 className='pa'>Home --{'>'} Trainning Plans</h5>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="row">
                        <img src={logo} className="logo"/>
                    </div>
                <br/>
                </center>
                </div>
                <center>
                <p>{descriptionData}</p>
                </center>
                <div className='row' style={{flexDirection: 'row', height:800, width: 500}}>
                <center>
                <div className='col'>
                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={TableData} />
                                    </table>
                                </div>
              
            
            <div className="down-buttons">
            
            <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/main-trainee/:email')}><img src={goback} className="ProfileBbox"/></button>
                              </div>
                             
                              </center>
                              </div></div></div>
              </center>
              </div>
                                
                                
                               
                                      
                            </div>
                              
                                        </div>
                                        </center>
                                       
  )
}
export default ClassTrainningPlanes ;
