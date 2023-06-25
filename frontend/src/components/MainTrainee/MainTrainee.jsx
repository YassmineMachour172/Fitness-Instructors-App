import React, { useEffect,useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../../css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainTrainee.css';
import logo from '../../images/logo.png'
import HomeIc from '../../images/home1.png'
import info from '../../images/info.jpg'
import info1 from '../../images/info1.png'
import pList from '../../images/pList.png'
import feedback from '../../images/feedBack.png'
import profile from '../../images/profile.png'
import NewW from '../../images/NewW.jpg'
import changAccount from '../../images/changeAcc.png'
import MyClasses from '../../images/MyClasses.png'
import { useParams } from 'react-router-dom';
import MainTrainer from '../MainTrainer/MainTrainer';
import NewClass from '../NewClassTrainee/NewClass';
import TraineeMessage from '../TraineeMessage/TraineeMessage';
import axios from 'axios';
import ReactTable from '../ReactTable/ReactTable';
import imageDelete from'../../images/delete.png';
import MyClassesTrainee from '../MyClassesTrainee/MyClassesTrainee';
import Classes from '../../components/MyClassesTrainee/Classes';
const MainTrainee = () => {
    const [U,setU]=useState([]);
    const { email } = useParams();
    const [mail, setMail]=useState('');
    const [classes, setClasses]=useState();  
    const [TableData, setTableData] = useState([]);
    const onClickSelect = async (row) => {
    /*  console.log('select button clicked for class: ', row.original.className);
      const exercisetitle=row.original.title
      const traineeEmail =  localStorage.getItem('saved').replace(/"/g, '');
      const className =  row.original.className;
      const cType=row.original.cType;
      const description =  row.original.description;
      const keywords =  row.original.keywords;
      const trainerEmail =  row.original.trainerEmail;


      /*insert the exercise to the db to that trainer*/ 
    /*  const res = await axios.post('http://localhost:8000/api/traineesClass/NewClass', { params: { exercisetitle,traineeEmail,className,cType,description,keywords,trainerEmail } });
      if((res?.data?.success===true)){
        console.log("successful")
        /*IT RETURNS THE TRAINING NUMBER*/
        /*
  }
  else{
    console.log("error",res.error)
  }
      */
  }
    console.log("main",{email})
    /* define what will disappear imeditally on the screen once the trainee log in  */
    
   
    console.log( "Main")
   
    
   

    const navigate = useNavigate();
    const location = useLocation();

    /* function that navigates to the my classes page */
    const handleClickMyClasses  = () => {
        
        < MyClassesTrainee email={email} />
        navigate(`/MyClassesTrainee/${email}`);
    };
    /* function that navigates to the message/ feedback page */
    const handleClickMessage = () => {
    
        <TraineeMessage email={email} />
        navigate(`/Traineemessage/${email}`);
    };
    useEffect(() => {
      async function fetchData() {
        try {
          const traineeEmail=localStorage.getItem('saved').replace(/"/g, '');
          console.log("before")
          const response = await axios.get('http://localhost:8000/api/traineesClass/MainTrainee', {params:{traineeEmail}} );
          console.log("after", response.data.TraineesClass.user )
        setTableData(response.data.TraineesClass.user);
        } catch (error) {
          console.error("catch ",error);
        }
      }
  
      fetchData();
    }, []);
  
    /* function that navigates to the New class page */
    const handleClickNewClass = () => {
        < NewClass email={email} />
        navigate(`/NewClass/${email}`);
        
    };
    /* function that navigates to the Trainer main page */
    const handleClickSwitchToTrainer = () => {
        < MainTrainer email={email} />
        navigate(`/MainTrainer/${email}`);
    };
    
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
        }
      ],
      []
    );
/* define the maintrainee contant that contains : upper buttons and four main buttons and the list of the registered class */
    return (
        <div className="container-fluid " >
          <div className='backgroundcol'>
            <div className="header">
            <div className="navbar">
                    <div className="navbar-container">
            <div id='Main Trainee' className='backgroundcol'>
            <footer >
                             <center>
                <div className="row" style={{flexDirection: 'row', height:20, width: 500}}>
                             <div className="buttons">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClickMyClasses}><img src={pList} className="pListBbox"/></button>


                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickMessage}><img src={feedback} className="feedbackBbox"/></button>
                                <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>

                              </div>
                </div>
                
                <br/> 
                <br/> 
                <br/> 
                
                <div className="navbar">
                    <div className="navbar-container">
                        
                    <div className='row'style={{flexDirection: 'row', height:60, width: 500}}>
                                            <img src={logo} className="logo2"/>
                                            </div>
                
                       <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                           
                              <button  Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"onClick={handleClickNewClass}> <img src={NewW} className="NewWBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClickSwitchToTrainer}><img src={changAccount} className="SwitchBorderBox"/></button>
                              
                              
                              </div>
                              </div>
                        <div className="row" style={{flexDirection: 'row', height:80, width: 500}}>
                           <div className="buttons">
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={handleClickMyClasses}><img src={MyClasses} className="MyClassesBorderBox"/></button>
                              <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info} className="infoBorderBox"/></button>
                              
                              </div>
                              </div>
                             
                              <center>
                                <div className='row' style={{flexDirection: 'row', height:45, width: 500}}>
                                    <div style={{ color: 'black', fontSize: 20 ,textAlign: "center"}}>Your active classes :</div>
                                    
                                             
                                    </div>
                               
                                    <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={TableData} />
                                    </table>
                                </div>
                                    
                             
                              
                              
                                             
                                        
                                        
                                        
                                        
                                            
                            
                            </center>     
                              </div>
                              </div>
                              
                        </center>
                        </footer>
                        </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default MainTrainee;
