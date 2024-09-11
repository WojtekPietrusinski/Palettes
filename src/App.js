import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Form from "./components/Form"
import Upload from "./components/Upload"
import Table from "./components/Table"
import BarChart from "./components/Chart"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/style.scss"


const App = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/upload" element={<Upload/>} />
            <Route path="/form" element={<Form />} />
            <Route path="/table" element={<Table />} />
            <Route path="/chart" element={<BarChart />} />
          </Routes>
        </div>
      </Router>
    );
};

export default App;