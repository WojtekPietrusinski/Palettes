import React from 'react';
import Upload_preview from '../img/uploadScreen.png'
import Form_preview from '../img/formScreen.png';
import Table_preview from '../img/tableScreen.png';
import Chart_preview from '../img/chartScreen.png';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container mt-4">
    <h1>Welcome to the Pallet Management App</h1>
  <p className='subtitle'>
    Discover the power of our Pallet Management App, designed to streamline your pallet-related tasks. Our application offers a range of features to make your pallet management efficient and insightful:
  </p>

  <ul>
    <li className='left'>
      <strong>Upload Data from .CSV File:</strong> 
      <br />
      <div>
        <span>Seamlessly import pallet data from your existing CSV files. <br /> No more manual data entry required!</span>
        <br />
        <Link to='/upload'><img src={Upload_preview} height={"200px"} width={"400px"} alt='XD'  /></Link>
      </div>
    </li>
    
    <li className='right'>
      <strong>Upload Data through a Form:</strong>
      <br />
      <div>
        <span>Our user-friendly form allows you to input pallet data directly. <br /> Say goodbye to paper-based records!</span>
        <Link to='/form'><img src={Form_preview} height={"200px"} width={"400px"} alt='XD' /></Link>
      </div>
    </li>
  
    <li className='left'>
      <strong>Present Data in a Table:</strong> 
      <br />
      <div>
        <span>Easily view and analyze your pallet information in a well-organized table format. <br /> Sorting and filtering options put you in control.</span>
        <br />
        <Link to='/table'><img src={Table_preview} height={"200px"} width={"400px"} alt='XD' /></Link>
      </div>
    </li>
  
    <li className='right'>
      <strong>Present Data in a Chart:</strong> 
      <br />
      <div>
        <span>Gain valuable insights through visualizations. <br /> Our interactive charts help you identify trends and patterns at a glance.</span>
        <Link to='/chart'><img src={Chart_preview} height={"200px"} width={"400px"} alt='XD' /></Link>
      </div>
    </li>
  </ul>
  
  <p>
    Whether you're managing a warehouse, tracking shipments, or monitoring inventory, our Pallet Management App simplifies your tasks and empowers you with data-driven decision-making.
  </p>
  
  <p>
    Ready to revolutionize your pallet management? Get started today!
  </p>
  </div>
);

export default Home;