import React from 'react'
import { useState } from 'react';
import axios from 'axios';
// import { CSVReader } from "react-papaparse";

const Upload = () => {
 
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const fileReader = new FileReader();

  const handleOnChange = (e) => {
      setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).replace(/\s/g,'').split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    array.pop()

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
        };
      };

      fileReader.readAsText(file);
    
      try {
        array.forEach( async (record) => await axios.post("http://localhost:8800/api/uploads/test", { name: record.Reportname, place: record.Areaname, type: record.Reporttype, id: record.ReportID, date: record.Reportdate, time: record.Reportduration, quantity: record.Reportquantity }));
   
     } catch (err){
       console.log(err)
     }
    }

  return (
    <div> 
        <div className='upload'>
            <h1> Upload .csv files  </h1>
            <form className='uploadcontainer'>
              <input 
                type="file" 
                accept=".csv"
                onChange={handleOnChange}
                />

                <button
                id='transfer'
                 onClick={(e) => {
                  handleOnSubmit(e)
                }}>
                  Upload .csv
                </button>
            </form>
            <br />
        </div>
    </div>
  )
}

export default Upload