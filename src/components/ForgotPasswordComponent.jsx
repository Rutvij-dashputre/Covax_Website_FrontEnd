import React, { Component } from 'react';
import ResetService from '../services/PasswordResetService';
import { NavLink } from 'react-router-dom';
import Navbar from "../Navbar";

class ForgotPasswordComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            email: '',

        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.sendMail = this.sendMail.bind(this);

    }

    sendMail = (e) => {
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
    }

    render() {
        return (<>

            <div style={{ backgroundColor: "white" }} >
                <Navbar />
                <div style={{ textAlign: "center", margin: "20px", color: "black" }}><h1><strong>Reset Password</strong></h1></div>

                <form className="row g-3 " style={{ padding: "40px" }} >

                    <div className="col-md-3 " style={{ marginTop: "0%", marginLeft: "38%", color: "#black" }}>
                        <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Ex. name@example.com" value={this.state.email} onChange={this.changeEmailHandler} />
                    </div>

                    <div className="col-12" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                        <NavLink to="/PasswordResetComponent" class="btn btn-success" onClick={this.sendMail} style={{ background: "#1877F2", padding: "6px 24px" }} >Submit</NavLink>
                    </div>


                </form>

            </div>
        </>

        );
    }
}

export default ForgotPasswordComponent;



