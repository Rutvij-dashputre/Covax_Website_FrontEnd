import React, { Component } from 'react';
import HospitalLoginService from '../services/HospitalLoginService';
import { NavLink , Redirect } from 'react-router-dom';
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
        if(this.state.loggedIn){
            return <Redirect to="/HospSessionComponent" />
        }
        return (<>

            <div style={{ backgroundColor: "#116466" }} >
                <Navbar />
                <div style={{ textAlign: "center", margin: "00px", color: "#F8F9F9" }}><h1><strong>Hospital Login</strong></h1></div>

                <form onSubmit={this.submitHandler}>

                    {/*  <div style={{ textAlign: "center", color: "White" }}><strong><h2 style={{  color: "White" }}>LOGIN HERE</h2></strong></div><br/> */}
                    <div class="mb-3" style={{ color: "#F8F9F9" }}>
                        <label for="validationDefault01" class="form-label"><strong>Username</strong></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name Here" required
                            name="username"

                            value={this.state.username} onChange={this.changeUserNameHandler}

                            placeholder="Enter Your Username" />
                        {/* <p style={{ color: "red" }}>{errors.username}</p> */}

                    </div>

                    <div class="mb-3" style={{ color: "#F8F9F9" }}>
                        <label for="validationDefault01" class="form-label"><strong>Password</strong></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Valid Password Here" required
                            name="phone"

                            value={this.state.password} onChange={this.changePasswordHandler}
                            placeholder="Enter Your Valid Password" />
                        {/* <p style={{ color: "red" }}>{errors.phone}</p> */}

                    </div>

                    <div class="col-12" style={{ textAlign: "center", color: "White" }}>
                        <NavLink to="./HospSessionComponent" class="btn btn-success" onClick={this.saveSession} style={{ background: "#1877F2", padding: "8px 50px" }} >Log In</NavLink><br></br>

                        <div class="col-12 " style={{ textAlign: "center", color: "White", padding: "12px 12px" }}>
                            <NavLink to="/ForgotPasswordComponent">  <a forgot_password="" href="/login/forget">Forgot Password ?</a><br />  </NavLink>
                        </div>


                    </div>

                </form>

            </div>
        </>

        );
    }
}

export default HospitalLoginComponent;



