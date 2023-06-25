import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactTable from '../ReactTable/ReactTable';
import './try.css';
import imageDelete from'../../images/delete.png';
import imageEdit from '../../images/edit.png';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TrainersLibSelect = () => {
  const [carsTableData, setCarsTableData] = useState([]);
  const navigate = useNavigate();
  
  const { email } = useParams();


const onClickSelect = async (row) => {
        console.log('select button clicked for exercise: ', row.original.title);
        const exercisetitle=row.original.title
        const trainerEmail =  localStorage.getItem('saved').replace(/"/g, '');
        const className =  localStorage.getItem('className').replace(/"/g, '');
        const description =  localStorage.getItem('description').replace(/"/g, '');
        /*insert the exercise to the db to that trainer*/ 
        const res = await axios.post('http://localhost:8000/api/trainingPlans/TrainersLibSelect', { params: { exercisetitle,className,description,trainerEmail } });
        if((res?.data?.success===true)){
          console.log("successful")
          /*IT RETURNS THE TRAINING NUMBER*/
          localStorage.setItem('trainingNum', JSON.stringify(res.data.info));
          navigate(`/CreateNewClass/${email}`);
    }
    else{
      console.log("error",res.error)
    }
        
    }

  useEffect(() => {
    async function fetchData() {
      try {
        const email = localStorage.getItem('saved').replace(/"/g, '');
        console.log("before")
        const response = await axios.get('http://localhost:8000/api/exercises/TrainersLibSelect', { params: { email } });
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
        accessor: 'exercisetitle',
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
                <button onClick={(e) => onClickSelect(row.row)} className='button-image' >  <img src={imageDelete} alt="image-button" style={{ width: '30px', height: '30px' }}/>
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

export default TrainersLibSelect;
