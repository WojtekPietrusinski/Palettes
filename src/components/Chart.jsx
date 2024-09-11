import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";


const BarChart = () => {
  const [chartData, setChartData] = useState([])
  const axisX = chartData.map(item => item.category)
  const axisY = chartData.map(item => item.amount)

  useEffect(() => {
    const fetchAllChartData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/downloads/get").then();
        const sumsByCategory = res.data.reduce((accumulator, item) => {
          if (accumulator[item["Area name"]]) {
            accumulator[item["Area name"]] += item["Report quantity"];
          } else {
            accumulator[item["Area name"]] = item["Report quantity"];
          }
          console.log(accumulator)
          return accumulator;
        }, {});
        const resultArray = Object.keys(sumsByCategory).map(category => ({
          category: category,
          amount: sumsByCategory[category],
        }));
        console.log(resultArray)
        setChartData(resultArray)
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllChartData();
  }, []);

  const data = {
    labels: axisX,
    datasets: [
      {
        label: 'Report quantity',
        data: axisY,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

    console.log(axisX)
    console.log(axisY)
      
  return (
      <div className='chartholder'>
        <h1 className='caption'>Reports chart</h1>          
          <Bar 
            style={{ maxHeight: '70vh'}}
            data={data} 
            options={options}/> 
      </div>
  )
}

export default BarChart