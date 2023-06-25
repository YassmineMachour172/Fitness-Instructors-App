import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactTable from '../ReactTable/ReactTable';
import './try.css';
import imageDelete from'../../images/delete.png';
import imageEdit from '../../images/edit.png';
import { useNavigate  } from 'react-router-dom';
import HomeIc from '../../images/home1.png'
import info1 from '../../images/info1.png';
import profile from '../../images/profile.png'
import menu from '../../images/menue.png'
import logo from '../../images/logo.png'
const TrainersLib = () => {
  const [carsTableData, setCarsTableData] = useState([]);
  const navigate = useNavigate();
    
  const { email } = useParams();

  const onClickEdit = (row) => {
  
}
const onClickDelete = async (row) => {
        console.log('Delete button clicked for car with treatment number: ', row.original.title);
        const title=row.original.title
       const response = await axios.delete('http://localhost:8000/api/exercises/TrainersLib', { params: { title } });
        window.location.reload(false)
        
    }

  useEffect(() => {
    async function fetchData() {
      try {
        const email = localStorage.getItem('saved').replace(/"/g, '');
        console.log("before")
        const response = await axios.get('http://localhost:8000/api/exercises/TrainersLib', { params: { email } });
        console.log("after")

        setCarsTableData(response.data.TrainersLib.user);
      } catch (error) {
        console.error("catch ",error);
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
            </div>     
        )
    }
    ],
    []
  );

  return (
    <div className="container-fluid">
      <center>
      <div className="col">
            <div className="row" style={{flexDirection: 'row', height:50, width: 500}}>
                
                 <div Style="color:Black;" >
                 <img src={menu} className="infoInfo"/>
                       My Library 
                </div>
                <br/>
                
                </div>
                <center>
                <div className="row"  style={{flexDirection: 'row', height:50, width: 500}}>
                <button onClick={() => navigate('/UploadeNewEx')}  className='about-us'>Uplode New Exercise</button>
                </div>
                </center>
                       <div className="row"  style={{flexDirection: 'row', height:800, width: 500}}>
                       
                            <center>
                                <div className="table-responsive" style={{ color: 'black',width: 800, minWidth: 100, maxWidth: 800}}>
                                  
                                    <table className="table table-bordered" id="dataTable" width="200%" cellspacing="3" style={{ color: 'black',}}>
                                        <ReactTable columns={tableColumns}  data={carsTableData} />
                                    </table>
                                    
                                </div>
                                </center>
                            
                        </div>
                        <div className='row' style={{flexDirection: 'row', height:50, width: 500}}>
                <center>
                             <div class="btn-group">
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;"  onClick={() => navigate('/')}><img src={HomeIc} className="HomBbox"  /></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={() => navigate('/Info')}><img src={info1} className="InfoBbox"/></button>
                                <button Style="border: none;color: Black;background-color: transparent;border-radius: 12px;" onClick={()=>navigate('/Profile')}><img src={profile} className="ProfileBbox"/></button>
                              </div>
                              </center>
                              </div>
                              <div className="row">
                            <center>
                        <img src={logo} className="logo"/>
                        </center>
                    </div>
                    </div>                     
                    </center>
       

      
       
</div>

  );
};

export default TrainersLib;