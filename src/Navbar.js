import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>



      <nav class="navbar navbar-expand-lg navbar-light" style={{ background: "#b64d54", padding: "10px" }}>



        <a class="navbar-brand" href="Home " ><strong>COVAX </strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <a class="nav-link" href="Home"><strong>Home</strong> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="About"><strong>About Us</strong></a>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="Contact"><strong>Contact Us</strong></a>
            </li>

          </ul>

        </div>

      </nav>


    </>
  );
};

export default Navbar;