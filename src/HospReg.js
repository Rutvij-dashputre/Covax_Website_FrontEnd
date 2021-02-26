import React from 'react';
//import Navbar from "./Navbar";
// import { NavLink } from 'react-router-dom';
//import web from "../src/Images/logini.jpg"

// var sectionStyle = {
//     backgroundImage: `url(${web})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover', 

//   }


const HospReg = () => {
  return (<>

    <div style={{ backgroundColor: "black" }} >
      {/* <Navbar /> */}
      <div style={{ textAlign: "center", margin: "50px", color: "#F8F9F9" }}><h1><strong>HOSPITAL REGISTRATION</strong></h1></div>

      <form class="row g-3" style={{ padding: "48px" }} >

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="validationDefault01" class="form-label">Organization Details</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder="Organization Name" required />
        </div>
        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="validationDefault01" class="form-label">Email</label>
          <input type="Email" class="form-control" id="validationDefault01" placeholder="Enter email-id" required />
        </div>

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="validationDefault01" class="form-label">Contact Details</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder="Contact Number" required />
        </div>

        <h6 style={{ color: "#F8F9F9 " }}> This organization provides :</h6>
        <div class="col-12" style={{ color: "#F8F9F9 " }}>
          <div class="form-check">
           
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
            <label class="form-check-label" for="invalidCheck2">
              Medication
              
      </label>
          </div>
        </div>
        <div class="col-12" style={{ color: "#F8F9F9 " }}>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
            <label class="form-check-label" for="invalidCheck2">
              Vaccine
      </label>
          </div>
        </div>
       

      </form>

    </div>
  </>

  );
};

export default HospReg;