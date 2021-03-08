import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar =() => {
    return (
        <>
        <div className="container-fluid nav_bg "  >
         <div className="row">
             <div className="col-12 mx-auto">

             
<nav className="navbar navbar-expand-lg navbar-light" style={{background:"rgba(255,255,255,.1"}}
>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><strong>COVAX </strong></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/"><strong>Home</strong></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/About"><strong>About Us</strong></NavLink>
        </li>

        
        <li className="nav-item">
          <NavLink  activeClassName='menu_active' className="nav-link" to="/Contact"><strong>Contact Us</strong></NavLink>
        </li>
       
        {/* <li className="nav-item">
          <NavLink  activeClassName='menu_active' className="nav-link" to="/Register"><strong>REGISTER</strong></NavLink>
        </li>

        <li className="nav-item">
          <NavLink  activeClassName='menu_active' className="nav-link" to="/login"><strong>LOG IN</strong></NavLink>
        </li> */}
       
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
             </div>
         </div>

        </>
    );
};

export default Navbar;