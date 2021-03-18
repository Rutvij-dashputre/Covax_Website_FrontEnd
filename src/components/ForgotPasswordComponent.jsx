import React, { Component } from 'react';
/* import HospitalService from '../services/HospitalService'; */
import { NavLink } from 'react-router-dom';
import Navbar from "../Navbar";

class ForgotPasswordComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            email: '',
           
        }
      
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
      /*   this.saveHosp = this.saveHosp.bind(this); */

    }

  /*   saveHosp = (e) => {
        e.preventDefault();
        let hospital = {
           email: this.state.email
        };
        console.log('hospital =>' + JSON.stringify(hospital));

        HospitalService.createHosp(hospital).then(res => {
            console.log('success');
        });

    }
     */
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        return (<>

            <div style={{ backgroundColor: "#116466" }} >
                <Navbar />
                <div style={{ textAlign: "center", margin: "50px", color: "#F8F9F9" }}><h1><strong>Reset Password</strong></h1></div>

                <form className="row g-3 " style={{padding: "48px" }} >

                    <div className="col-md-3 " style={{ marginLeft: "38%",color: "#F8F9F9" }}>
                        <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Ex. name@example.com" value={this.state.email} onChange={this.changeEmailHandler} />
                    </div>

                    <div className="col-12" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                        <NavLink to="/Home" class="btn btn-success"/*  onClick={this.saveHosp} */ style={{ background: "#1877F2", padding: "6px 24px" }} >Submit</NavLink>
                    </div>
                   

                </form>

            </div>
        </>

        );
    }
}

export default ForgotPasswordComponent;



