import React, { Component } from 'react';
import UpdateService from '../services/UpdatePasswordService';
import { NavLink } from 'react-router-dom';
import Navbar from "../Navbar";

class PasswordResetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            username: '',
            password: ''

        }

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.update = this.update.bind(this);
    }


    update = (e) => {
        e.preventDefault();
        let newpassd = {
            username: this.state.username,
            password: this.state.password
        };
        console.log('newpassd =>' + JSON.stringify(newpassd));

        UpdateService.updatePassd(newpassd).then(res => {
            alert('Password Reset');
        });

    }
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    render() {
        return (<>

            <div style={{ backgroundColor: "white" }} >
                <Navbar />
                <div style={{ textAlign: "center", marginTop: "50px", color: "#black" }}><h1><strong>Reset Password</strong></h1></div>

                <form className="row g-3 " style={{ padding: "48px" }} >

                    <div className="col-md-3 " style={{ marginLeft: "38%", color: "#black" }}>
                        <label for="exampleFormControlInput1" className="form-label">Enter Username</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Ex. name@example.com" value={this.state.username} onChange={this.changeUsernameHandler} />
                    </div>

                    <div className="col-md-3 " style={{ marginLeft: "38%", color: "#black" }}>
                        <label for="exampleFormControlInput1" className="form-label">Enter New Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1"
                            placeholder="Enter new password" value={this.state.password} onChange={this.changePasswordHandler} />
                    </div>

                    <div className="col-12" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                        <NavLink to="/Home" class="btn btn-success" onClick={this.update} style={{ background: "#1877F2", padding: "6px 24px" }} >Submit</NavLink>
                    </div>


                </form>

            </div>
        </>

        );
    }
}

export default PasswordResetComponent;



