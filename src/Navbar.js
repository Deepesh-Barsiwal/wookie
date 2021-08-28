import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand text-primary fw-bold fs-3 " to="/home">Wookie</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active px-3 fw-bold" aria-current="page" to="/men">Men</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-3 fw-bold" to="/women">Women</NavLink>
        </li>
      
      </ul>
      <form className="d-flex align-items-center">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <NavLink to="/" className="text-dark"><i class="fas fa-search fs-4"></i></NavLink>
     <NavLink to="/"  className="text-dark"> <i class="fas fa-shopping-cart  fs-4 mx-3"></i></NavLink>
       <NavLink to="/"  className="text-dark"> <i class="fas fa-user-alt  fs-4"></i></NavLink>
      </form>
    </div>
  </div>
</nav> 
        </>
    )
}

export default Navbar
