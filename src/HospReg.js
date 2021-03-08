import React from 'react';
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
//  import { NavLink } from 'react-router-dom';
//import web from "../src/Images/logini.jpg"

// var sectionStyle = {
//     backgroundImage: `url(${web})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover', 

//   }


const HospReg = () => {
  return (<>

    <div style={{ backgroundColor: "#116466" }} >
      <Navbar />
      <div style={{ textAlign: "center", margin: "50px", color: "#F8F9F9" }}><h1><strong>Hospital Registration</strong></h1></div>

      <form class="row g-3" style={{ padding: "48px" }} >

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="validationDefault01" class="form-label">Organization</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Organization Name" required />
        </div>

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="exampleFormControlInput1" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1"
            placeholder="Ex. name@example.com" />
        </div>

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="validationDefaultUsername" class="form-label">Username</label>
          <div class="input-group">

            <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Enter Your Username" aria-describedby="inputGroupPrepend2" required />
          </div>
        </div>

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="validationDefault05" class="form-label">Password</label>
          <input type="password" class="form-control" id="validationDefault05" placeholder="Password must be Strong" required />
        </div>

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="exampleFormControlTextarea1" class="form-label">Address</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="1">
          </textarea>
        </div>

        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
          <label for="validationDefault04" class="form-label">State</label>
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Select</option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Bihar</option>
            <option>Rajastan</option>
          </select>
        </div>

        <div class="col-12" style={{ color: "#F8F9F9 " }}>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
      </label>
          </div>
        </div>
        <div class="col-12" style={{ textAlign: "center" }}>
          {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
          <NavLink to="/Home" class="btn btn-success" style={{ background: "#1877F2",padding: "6px 24px" }} >Submit</NavLink>
        </div>

      </form>

    </div>
  </>

  );
};

export default HospReg;