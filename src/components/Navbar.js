import React from 'react'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi"
import { FiUpload } from "react-icons/fi"
import { TfiBarChart } from "react-icons/tfi";
import { TbTable } from "react-icons/tb";
import { LiaPalletSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> <LiaPalletSolid/> Home</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/upload"><FiUpload/> Upload</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form"> <FiEdit/> Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table"><TbTable/> Table</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chart"><TfiBarChart/> Chart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar