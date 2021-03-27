import React, { Component } from 'react';
import PatientService from '../services/PatientService';
import Navbar from "../Navbar";


class CreatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            address: '',
            aadharNo: '',
            age: '',
            state: '',
            gender: '',
            mobile: '',
            pincode: '',
            coronaPositive: true

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeAadharNoHandler = this.changeAadharNoHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changePinCodeHandler = this.changePinCodeHandler.bind(this);
        /* this.changeCoronaPositiveHandler = this.changeCoronaPositiveHandler.bind(this); */

        this.savePatient = this.savePatient.bind(this);

    }

    savePatient = (e) => {
        e.preventDefault();
        let patient = {
            name: this.state.name, email: this.state.email, username: this.state.username,
            password: this.state.password,
            address: this.state.address, aadharNo: this.state.aadharNo, age: this.state.age,
            state: this.state.state, gender: this.state.gender, mobile: this.state.mobile,
            pincode: this.state.pincode, coronaPositive: this.state.coronaPositive
        };
        console.log('patient =>' + JSON.stringify(patient));

        PatientService.createPatient(patient).then(res => {
            console.log('success');
            alert('Registration Successfull ! !');
        });

    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeAadharNoHandler = (event) => {
        this.setState({ aadharNo: event.target.value });
    }
    changeAgeHandler = (event) => {
        this.setState({ age: event.target.value });
    }
    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }
    changeMobileHandler = (event) => {
        this.setState({ mobile: event.target.value });
    }
    changePinCodeHandler = (event) => {
        this.setState({ pincode: event.target.value });
    }
    /*  changeCoronaPositiveHandler = (event) => {
         this.setState({ coronaPositive: event.target.value });
     } */
    toggleChange = () => {
        this.setState({
            coronaPositive: !this.state.coronaPositive,
        });
    }
    render() {
        return (<>
            <Navbar />
            <div style={{ backgroundColor: "#white", width: "100%", display: "grid", justifyContent: "center" }} >


                <form className="col mb-5 mt-3 " style={{ padding: "68px", width: "100%", border: "1px solid ", borderRadius: "5px" }} >

                    <div style={{ textAlign: "center", margin: "00px", color: "#185394" }}><h2><strong>Register Here</strong></h2></div>

                    <div className="row-md-3" style={{ color: "#black", width: "100%" }}>
                        <label htmlFor="validationDefault01" className="form-label"><strong>Name</strong></label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Enter Your Name Here" required
                            value={this.state.name} onChange={this.changeNameHandler} />
                    </div>

                    <div className="row-md-3" style={{ color: "#black", width: "100%" }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Email Address</strong> </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="Ex. name@example.com" value={this.state.email} onChange={this.changeEmailHandler} />
                    </div>

                    <div className="row-md-3" style={{ color: "#black", width: "100%" }}>
                        <label htmlFor="validationDefaultUsername" className="form-label"><strong>Username</strong></label>
                        <div className="input-group">

                            <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Enter Your Username" aria-describedby="inputGroupPrepend2" required
                                value={this.state.username} onChange={this.changeUserNameHandler} />
                        </div>
                    </div>

                    <div className="row-md-3" style={{ color: "#black", width: "100%" }}>
                        <label htmlFor="validationDefault05" className="form-label"><strong>Password</strong></label>
                        <input type="password" className="form-control" id="validationDefault05" placeholder="Password must be Strong" required
                            value={this.state.password} onChange={this.changePasswordHandler} />
                    </div>

                    <div className="row-md-3" style={{ color: "#black" }}>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Address</strong></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Your Address" required
                            value={this.state.address} onChange={this.changeAddressHandler}>
                        </textarea>
                    </div>

                    <div className="row-md-3" style={{ color: "#black " }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Aadhaar Number</strong></label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Aadhar Number" required
                            value={this.state.aadharNo} onChange={this.changeAadharNoHandler} />

                    </div>


                    <div className="row-md-3" style={{ color: "#black" }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Age</strong></label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Age" required
                            value={this.state.age} onChange={this.changeAgeHandler} />

                    </div>


                    <div className="row-md-3" style={{ color: "#black" }}>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>State</strong></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Your State" required
                            value={this.state.state} onChange={this.changeStateHandler}>
                        </textarea>
                    </div>


                    <div className="row-md-3" style={{ color: "#black" }}>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Gender</strong></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Enter Your Gender" required
                            value={this.state.gender} onChange={this.changeGenderHandler}>
                        </textarea>
                    </div>



                    <div className="row-md-3" style={{ color: "#black " }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Mobile Number</strong></label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile Number" required
                            value={this.state.mobile} onChange={this.changeMobileHandler} />

                    </div>
                    <div className="row-md-3" style={{ color: "#black " }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Pin Code</strong></label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your PinCode Here" required
                            value={this.state.pincode} onChange={this.changePinCodeHandler} />

                    </div>
                    <br />

                    <div className="form-check mb-0  margin-left-2">
                        <input className="form-check-input " type="checkbox"
                            defaultChecked={this.state.coronaPositive}
                            onChange={this.toggleChange}
                        />

                        <label className="form-check-label" for="invalidCheck2">
                            <strong>Corona Positive</strong>
                        </label>
                    </div>

                    <div className="row-12 d-flex align-items-center" style={{ color: "#black " }}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label" for="invalidCheck2">
                                <strong>Agree to terms and conditions</strong>
                            </label>
                        </div>


                    </div>
                    <br></br>

                    <div className="col-12" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" className="btn btn-primary ">SUBMIT</NavLink> */}
                        <button className="btn btn-primary" type="submit" onClick={this.savePatient}>Submit</button>
                    </div>

                </form>

            </div>
        </>

        );
    }
}

export default CreatePatientComponent;



