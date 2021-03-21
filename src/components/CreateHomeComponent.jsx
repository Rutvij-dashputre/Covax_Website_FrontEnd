import React, { Component } from 'react';
import AuthService from '../services/AuthService';
import { NavLink } from 'react-router-dom';
import Navbar from "../Navbar";
import img1 from "../Images/commuimmu.jpg"
import img2 from "../Images/dontwait.jpg"
import img3 from "../Images/vaccine.jpg"


class CreateHomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveSession = this.saveSession.bind(this);

    }

    saveSession = (e) => {
        e.preventDefault();
        let Auth = {
            username: this.state.username,
            password: this.state.password

        };
        console.log('Auth =>' + JSON.stringify(Auth));

        AuthService.checkAuth(Auth).then(res => {
            console.log('success');
        });

    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    render() {
        return (<>
            <div style={{ backgroundColor: "#116466" }}>
                <Navbar />

                <section id="header" className="d-flex align-items-center" >
                    <div className="container-fluid nav_bg" >

                        <div className="row">

                            <div className="col-10  mx-auto">
                                <div className="row">


                                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <h3 style={{ color: "#F1C40F" }}><strong>WELCOME TO COVAX.COM</strong></h3>
                                        <h5 style={{ color: "white" }}> <strong> COVID-19 VACCINE INFORMATION</strong>
                                        </h5>
                                        <h2 className="my-3">
                                            <strong className="brand-name">Things to Know about the COVID-19 Vaccination Program..</strong>
                                        </h2>

                                        <div className="mt-3">
                                            <NavLink to="/Covid19Info" className="btn-get-started">

                                                READ MORE
                                    </NavLink>

                                        </div>

                                    </div>

                                    <div className="col-md-6 order-1 order-lg-2 ">

                                        <div className="container contact_div">
                                            <div className="row">
                                                <div className="col-md-6 col-6 mx-auto">
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
                                                            <NavLink to="./Hospital" class="btn btn-success" onClick={this.saveSession} style={{ background: "#1877F2", padding: "8px 50px" }} >Log In</NavLink><br></br>

                                                            <div class="col-12 " style={{ textAlign: "center", color: "White", padding: "12px 12px" }}>
                                                                <NavLink to="/ForgotPasswordComponent">  <a forgot_password="" href="/login/forget">Forgot Password ?</a><br />  </NavLink>
                                                            </div>
                                                            {/* <button class="btn btn-primary" type="submit">Submit</button> */}
                                                            <div class="col-12" style={{ textAlign: "center", color: "Black" }}>
                                                                <NavLink to="/CreatePatientComponent" class="btn btn-success" style={{ padding: "6px 24px" }} >Create New Account</NavLink><br></br>
                                                            </div>
                                                            <div class="col-12" style={{ textAlign: "center", color: "White", padding: "12px 12px" }}>
                                                                <NavLink to="/CreateHospitalComponent" class="btn btn-success" style={{ background: "#5c7b90", padding: "6px 24px" }} >Hospital Registration</NavLink><br></br>
                                                            </div>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </section>
            </div>

            <div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-3 col-10 mx-auto">
                                    <div class="card">
                                        <img src={img1} class="card-img-top" alt="..." />
                                        <div class="card-body" style={{ backgroundColor: "#7DCEA0" }}>
                                            <h5 class="card-title" style={{ textAlign: "center" }}><strong>Community Immunity </strong></h5>
                                            <p class="card-text" style={{ textAlign: "center" }}>Getting vaccinated protects you, your family, and your whole community! </p>
                                            {/* <NavLink to="/SignUp" class="btn btn-primary d-flex justify-content-center">REGISTER HERE</NavLink> */}
                                            <NavLink to="/CommunityImmu" class="btn btn-primary d-flex justify-content-center">MORE INFORMATION</NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-10 mx-auto">
                                    <div class="card">
                                        <img src={img2} class="card-img-top" alt="..." />
                                        <div class="card-body" style={{ backgroundColor: "#D2B4DE" }}>

                                            <h5 class="card-title" style={{ textAlign: "center" }}><strong>Do not wait. Vaccinate!</strong></h5>
                                            <p class="card-text" style={{ textAlign: "center" }}>Protect yourself and your loved ones. Get your flu shot now.</p><br />
                                            {/* <NavLink to="/SignUp" class="btn btn-primary d-flex justify-content-center">REGISTER HERE</NavLink> */}
                                            <NavLink to="/DontWaitVaccinate" class="btn btn-primary d-flex justify-content-center">MORE INFORMATION</NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-10 mx-auto">
                                    <div class="card">
                                        <img src={img3} class="card-img-top" alt="..." />
                                        <div class="card-body" style={{ backgroundColor: "#F5B7B1" }}>
                                            <h5 class="card-title" style={{ textAlign: "center" }}><strong>Vaccines work!</strong></h5>
                                            <p class="card-text" style={{ textAlign: "center" }}>Vaccines are very effective..</p><br></br><br />
                                            {/* <NavLink to="/SignUp" class="btn btn-primary d-flex justify-content-center">REGISTER HERE</NavLink> */}
                                            <NavLink to="/VaccinesWork" class="btn btn-primary d-flex justify-content-center">MORE INFORMATION</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>


        );
    }
}

export default CreateHomeComponent;



