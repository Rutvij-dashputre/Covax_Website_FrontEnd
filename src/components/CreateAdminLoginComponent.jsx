import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import { NavLink, Redirect } from 'react-router-dom';
import Navbar from "../Navbar";


class CreateAdminLoginComponent extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
            errors: {
                username: '',
                password: '',
                loggedIn,
            },
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

        AuthService.checkAuth1(Auth1).then(res => {
            console.log(res);
            if (res.data) {

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

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                errors.username = value.length < 5 ? "Username must be 5 characters length" : "";
                break;

            case "password":
                errors.password = value.length < 5 ? "Password too short" : "";
                break;


            default:
                break;
        }

        // console.log(this.state)
        this.setState({ errors, [name]: value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        if (
            this.state.errors.username.length === 0 && this.state.errors.password.length === 0

        ) {
            alert("From is Valid");
        }
        else {
            alert("From is not Valid");
        }
    }


    render() {
        const { errors } = this.state;

        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (<>
            <div style={{ backgroundColor: "#116466" }}>
                <Navbar />


                <div className="col-md-6 col-6 mx-auto">
                    <form onSubmit={this.submitHandler}>

                        {/*  <div style={{ textAlign: "center", color: "White" }}><strong><h2 style={{  color: "White" }}>LOGIN HERE</h2></strong></div><br/> */}
                        {/* <div class="mb-3" style={{ color: "#F8F9F9" }}>
                                                            <label for="validationDefault01" class="form-label"><strong>Username</strong></label>
                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name Here" required
                                                                name="username"

                                                                value={this.state.username} onChange={this.changeUserNameHandler}

                                                                placeholder="Enter Your Username" />
                                                            <p style={{ color: "red" }}>{errors.username}</p> 

                                                        </div> */}

                        <div class="mb-3" style={{ color: "#F8F9F9" }}>
                            <label for="validationDefault01" class="form-label"><strong>Username</strong></label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Username Here" required
                                name="username"

                                onChange={this.changeHandler}

                                placeholder="Please Enter Your Username" />
                            <p style={{ color: "red" }}>{errors.username}</p>

                        </div>

                        {/* <div class="mb-3" style={{ color: "#F8F9F9" }}>
                                                            <label for="validationDefault01" class="form-label"><strong>Password</strong></label>
                                                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Valid Password Here" required
                                                                name="password"

                                                                value={this.state.password} onChange={this.changePasswordHandler}
                                                                placeholder="Enter Your Valid Password" />
                                                             <p style={{ color: "red" }}>{errors.password}</p> 

                                                        </div> */}

                        <div class="mb-3" style={{ color: "#F8F9F9" }}>
                            <label for="validationDefault01" class="form-label"><strong>Password</strong></label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Valid Password" required
                                name="password"

                                onChange={this.changeHandler}
                                placeholder="Please Enter Your Valid Password" />
                            <p style={{ color: "red" }}>{errors.password}</p>

                        </div>




                        <div class="col-12" style={{ textAlign: "center", color: "White" }}>
                            <NavLink to="./CreateSessionComponent" class="btn btn-success" onClick={this.saveSession} style={{ background: "#1877F2", padding: "8px 50px" }} >Log In</NavLink><br></br>



                        </div>

                    </form>
                </div>
            </div>
        </>


        );
    }
}

export default CreateAdminLoginComponent;