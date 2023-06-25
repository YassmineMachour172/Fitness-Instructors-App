import React from 'react'
import './MyClassesTrainer.css';
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
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MyClasses from './MyClasses';
import ReactTable from '../ReactTable/ReactTable';
import goback from '../../images/return.png'
const MyClassesTrainer=()=> {
  const { email } = useParams();
  const [classes, setClasses]=useState();
  const [TableData, setTableData] = useState([]);
  /* define what will disappear imeditally on the screen once the trainer log in  */
  useEffect(() => {
    async function fetchData() {
      try {
        const email = localStorage.getItem('saved').replace(/"/g, '');
        console.log("before")
        const response = await axios.get('http://localhost:8000/api/classes/MyClassesTrainer',  { params: { email } });
        console.log("after", response.data.MyClassesTrainee.user)
        setTableData(response.data.MyClassesTrainee.user);
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
      }
    ],
    []
  );
  const navigate = useNavigate();
    const {  formState: { errors }} = useForm({
        resolver: yupResolver(logInSchema), /* validate the form with the schema */
        mode: "onChange" /* validate the form on change */
    });
    
    
    const [searchInput, setSearchInput] = useState("");
    /*define what the My classes trainer page will contain, a table of all the classes that the trainer has opened and down buttons */
  return (
    <center>
        <div className="container-fluid">
            <div className='backgroundcol'>
            <div className="row" >
                <center>
                 <div Style="color:Black;" >
                    <img src={pList} className="infoInfo"/>
                       My classes 
                </div>
                <br/>
                <div style={{ color: 'black' }}>You've opend the folowing classes :</div>
                </center>
                </div>
               
                <div className='row' style={{flexDirection: 'row', height:500, width: 500}}>
                <center>
                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={TableData} />
                                    </table>
                                </div>
                                        </center>
                                            
                            </div>
                <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/MainTrainer')}><img src={goback} className="ProfileBbox"/></button> 
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
export default MyClassesTrainer ;


