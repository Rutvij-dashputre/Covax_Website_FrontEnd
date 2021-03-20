import React, { Component } from 'react';
import HospitalService from '../services/HospitalService';
import { NavLink } from 'react-router-dom';


class CreateHospitalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            hspAdd: '',
            pinCode: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePinCodeHandler = this.changePinCodeHandler.bind(this);

        this.saveHosp = this.saveHosp.bind(this);

    }

    saveHosp = (e) => {
        e.preventDefault();
        let hospital = {
            name: this.state.name, email: this.state.email, username: this.state.username,
            password: this.state.password,
            hspAdd: this.state.hspAdd, pinCode: this.state.pinCode

        };
        console.log('hospital =>' + JSON.stringify(hospital));

        HospitalService.createHosp(hospital).then(res => {
            console.log('success');
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
        this.setState({ hspAdd: event.target.value });
    }

    changePinCodeHandler = (event) => {
        this.setState({ pinCode: event.target.value });
    }


    render() {
        return (<>

            <div style={{ backgroundColor: "#116466" }} >
               
                <div style={{ textAlign: "center", margin: "00px", color: "#F8F9F9" }}><h1><strong>Hospital Registration</strong></h1></div>

                <form class="row g-3" style={{ padding: "48px",width:"100%" }} >

                    <div class="col-md-3" style={{ color: "#F8F9F9" }}>
                        <label for="validationDefault01" class="form-label">Organization</label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Organization Name" required
                            value={this.state.name} onChange={this.changeNameHandler} />
                    </div>

                    <div class="col-md-3" style={{ color: "#F8F9F9" }}>
                        <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Ex. name@example.com" value={this.state.email} onChange={this.changeEmailHandler} />
                    </div>

                    <div className="col-md-3" style={{ color: "#F8F9F9" }}>
                        <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                        <div className="input-group">

                            <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Enter Your Username" aria-describedby="inputGroupPrepend2" required
                                value={this.state.username} onChange={this.changeUserNameHandler} />
                        </div>
                    </div>

                    <div class="col-md-3" style={{ color: "#F8F9F9" }}>
                        <label for="validationDefault05" class="form-label">Password</label>
                        <input type="password" class="form-control" id="validationDefault05" placeholder="Password must be Strong" required
                            value={this.state.password} onChange={this.changePasswordHandler} />
                    </div>

                    <div class="col-md-3" style={{ color: "#F8F9F9" }}>
                        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" 
                        value={this.state.hspAdd} onChange={this.changeAddressHandler}>
                            
                        </textarea>
                    </div>



                    <div className="col-md-3" style={{ color: "#F8F9F9 " }}>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Pin Code</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1"
                            value={this.state.pinCode} onChange={this.changePinCodeHandler} />

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
                        <NavLink to="/Home" class="btn btn-success" onClick={this.saveHosp} style={{ background: "#1877F2", padding: "6px 24px" }} >Submit</NavLink>
                    </div>

                </form>

            </div>
        </>

        );
    }
}

export default CreateHospitalComponent;



