import React, { Component } from 'react';
import HospitalLoginService from '../services/HospitalLoginService';
import { NavLink, Redirect } from 'react-router-dom';
import Navbar from "../Navbar";


class HospitalLoginComponent extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {

            username: '',
            password: '',
            loggedIn

        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveSession = this.saveSession.bind(this);

    }

    saveSession = (e) => {
        e.preventDefault();
        let Auth1 = {
            username: this.state.username,
            password: this.state.password

        };
        console.log('Auth1 =>' + JSON.stringify(Auth1));

        HospitalLoginService.hospAuth(Auth1).then(res => {
            if (res.data.hspId) {
                console.log(res.data.hspId);
                console.log("success");
                this.setState({
                    loggedIn: true
                })
            } else {
                alert("Invalid credentials");
            }
        });

    }


    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }




    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/HospSessionComponent" />
        }
        return (<>
            <Navbar />
            <div style={{ backgroundColor: "#white", width: "100%", height: "100%" }} >

                <div className="col-md-6 col-6 mx-auto  ">
                    <form className="mt-3" style={{ display: "grid", justifyContent: "center", border: "1px solid ", borderRadius: "5px" }} onSubmit={this.submitHandler}>

                        {/*  <div style={{ textAlign: "center", color: "White" }}><strong><h2 style={{  color: "White" }}>LOGIN HERE</h2></strong></div><br/> */}
                        <div class="row-md-3" style={{ color: "#black" }}>
                            <label for="validationDefault01" class="form-label"><strong>Username</strong></label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name Here" required
                                name="username"

                                value={this.state.username} onChange={this.changeUserNameHandler}

                                placeholder="Enter Your Username" />
                            {/* <p style={{ color: "red" }}>{errors.username}</p> */}

                        </div>

                        <div class="row-md-3" style={{ color: "#black" }}>
                            <label for="validationDefault01" class="form-label"><strong>Password</strong></label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Valid Password Here" required
                                name="phone"

                                value={this.state.password} onChange={this.changePasswordHandler}
                                placeholder="Enter Your Valid Password" />
                            {/* <p style={{ color: "red" }}>{errors.phone}</p> */}

                        </div>

                        <div class="mt-3 col-12" style={{ textAlign: "center", color: "black" }}>
                            <NavLink to="./HospSessionComponent" class="btn btn-success" onClick={this.saveSession} style={{ background: "#1877F2", padding: "8px 50px" }} >Log In</NavLink><br></br>

                            <div class="col-12 " style={{ textAlign: "center", color: "black", padding: "12px 12px" }}>
                                <NavLink to="/ForgotPasswordComponent">  <a forgot_password="" href="/login/forget">Forgot Password ?</a><br />  </NavLink>
                            </div>


                        </div>

                    </form><br />

                </div>
            </div>
        </>

        );
    }
}

export default HospitalLoginComponent;
