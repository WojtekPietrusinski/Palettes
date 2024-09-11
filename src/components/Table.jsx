import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


const Table = () => {
  const [results, setResults] = useState([]);
  const fetchAllResults = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/downloads/get").then();
      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
   const importData = () => {
    console.log(results)
    fetchAllResults()
  }

const columns = [
  { field: 'Report name', headerName: 'Report name', width: 120 },
  { field: 'Area name', headerName: 'Area name', width: 100 },
  { field: 'Report type', headerName: 'Report type', width: 110 },
  { field: 'Report ID', headerName: 'Report ID', type: 'number', width: 80 },
  { field: 'Report date', headerName: 'Report date', width: 500, valueGetter: ({ value }) => value && new Date(value).toUTCString() },
  { field: 'Report duration', headerName: 'Report duration', type: 'number', width: 120 },
  { field: 'Report quantity', headerName: 'Report quantity', type: 'number', width: 120 },
];

  return (
    <div className='tablecontainer'>
      <button className='tablebtn'onClick={importData}>Import data from database</button>
      <div id="upload">
        <div style={{ height: '80%', width: '90%', margin: 'auto',  }}>
          <DataGrid
            getRowId={(row) => row["Report ID"]}
            rows={results}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 15, 20, 25]}
            checkboxSelection
          />
        </div>  
      </div>
    </div>
  );
}

export default Table