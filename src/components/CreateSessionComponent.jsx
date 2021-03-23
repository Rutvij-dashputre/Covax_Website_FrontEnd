import React, { Component } from 'react';
/* import ResetService from '../services/PasswordResetService';  */

import Navbar from "../Navbar";

class CreateSessionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
          /*   email: '',
            */
        }
      
     /*    this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.sendMail = this.sendMail.bind(this); */

    }

   /*  sendMail = (e) => {
        e.preventDefault();
        let mail = {
           email: this.state.email
        };
        console.log('mail =>' + JSON.stringify(mail));

        ResetService.reset(mail).then(res => {
            alert('Mail sent');
        });

    }
    
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    } */

    render() {
        return (<>

            <div style={{ backgroundColor: "#116466" }} >
                <Navbar />
                <div style={{ textAlign: "center", margin: "50px", color: "#F8F9F9" }}><h1><strong>Patient Details</strong></h1></div>
    
                <form class="row g-3" style={{ padding: "48px" }} >
    
                    <div class="col-md-3" style={{ color: "#F8F9F9" }}>
                        <label for="validationDefault01" class="form-label">Name of Patient</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Your Name Here" required />
                    </div>
    
    
    
                    <div class="col-md-3" style={{ color: "#F8F9F9 " }}>
                        <label for="exampleFormControlInput1" class="form-label">Time</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" />
    
                    </div>
    
    
                    <div class="col-md-3" style={{ color: "#F8F9F9 " }}>
                        <label for="exampleFormControlInput1" class="form-label">Available Date</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1" />
    
                    </div>
    
    
                {/*     <div class="col-md-3" style={{ color: "#F8F9F9" }}>
                        <label for="validationDefault04" class="form-label">Vaccine</label>
                        <select class="form-select" id="validationDefault04" required>
                            <option selected disabled value="">Select</option>
                            <option>Yes</option>
                            <option>No</option>
    
                        </select>
                    </div> */}
    
                    <div class="col-12" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
    
                </form>
    
            </div>
        </>

        );
    }
}

export default CreateSessionComponent;



