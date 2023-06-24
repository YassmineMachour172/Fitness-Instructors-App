import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactTable from '../ReactTable/ReactTable';
import './try.css';
import imageDelete from'../../images/delete.png';
import imageEdit from '../../images/edit.png';
import { useNavigate  } from 'react-router-dom';
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
                        <div className="row">
                                                  {/* Page Heading */}
                        <div className='row' style={{flexDirection: 'row', height:300, width: 500}}>
                        <div style={{ color: 'black', fontSize: 20 ,textAlign: "center"}} > My Library  </div>
                        </div>
                        </div><div className="row"  style={{flexDirection: 'row', height:300, width: 500}}>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                  <div className='row' style={{flexDirection: 'row', height:100, width: 500}}>
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <ReactTable columns={tableColumns} data={carsTableData} />
                                    </table>
                                    </div>
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