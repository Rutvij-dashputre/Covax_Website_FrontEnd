import React, { Component } from 'react';
import HospitalService from '../services/HospitalService';
import Navbar from "../Navbar";

let hospital = [];
class CreateSessionComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pincode: '',
            name: '',
            apDate: '',
            time: '',
            ptId: 3,
            hspId: '',
            email: ''
        }

        this.state = {
            patient: []
        }

        this.changePinCodeHandler = this.changePinCodeHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeTimeHandler = this.changeTimeHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeHspIdHandler = this.changeHspIdHandler.bind(this);
        this.changePtIdHandler = this.changePtIdHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);

        this.savePatient = this.savePatient.bind(this);
        this.sendDetails = this.sendDetails.bind(this);

    }


    savePatient = (e) => {

        e.preventDefault();
        let patient = {
            pincode: this.state.pincode
        };
        console.log('patient =>' + JSON.stringify(patient));

        HospitalService.getHosp(patient).then(res => {
            this.setState({ patient: res.data })
            hospital = res.data;
            console.log(hospital);
        });

    }

    sendDetails = (e) => {

        e.preventDefault();
        let appointment = {
            name: this.state.name,
            apDate: this.state.apDate,
            time: this.state.time,
            ptId: this.state.ptId,
            hspId: this.state.hspId,
            email: this.state.email
        };
        console.log('data =>' + JSON.stringify(appointment));

        HospitalService.getApp(appointment).then(res => {
            this.setState({ appointment: res.data })
            hospital = res.data;
            console.log(hospital);
        });

    }

    changePinCodeHandler = (event) => {
        this.setState({ pincode: event.target.value });
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeTimeHandler = (event) => {
        this.setState({ time: event.target.value });
    }

    changeDateHandler = (event) => {
        this.setState({ apDate: event.target.value });
    }

    changeHspIdHandler = (event) => {
        this.setState({ hspId: event.target.value });
    }

    changePtIdHandler = (event) => {
        this.setState({ ptId: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }



    render() {
        return (<>

            <div style={{ backgroundColor: "#116466", width: "100%" }} >

                <Navbar />
                <div style={{ textAlign: "center", margin: "00px", color: "#F8F9F9" }}><h1><strong>Check Nearby Hospitals Here</strong></h1></div>

                <form className="row g-3" style={{ padding: "30px", width: "100%" }} >
                    <div className="d-flex row">

                        <div className="col-3 d-flex" style={{ color: "#F8F9F9 " }}>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Pin Code</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1"
                                value={this.state.pincode} onChange={this.changePinCodeHandler} />
                            <button className="btn btn-primary" type="submit" onClick={this.savePatient}>Search</button>
                        </div>

                        <div className="col-3">

                        </div>

                    </div>


                </form>

                <div>
                    <div>
                        <h2 className="text-center">Hospitals Details</h2>
                        <div className="row">
                            <table className="table table-strped table-bordered ml-2">
                                <thead className="p-2">
                                    <tr className="bg-secondary">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Pin-Code</th>
                                    </tr>


                                </thead>
                                <tbody>
                                    {
                                        this.state.patient.map(
                                            patient =>
                                                <tr key={patient.hspId}>
                                                    <td>{patient.hspId}</td>
                                                    <td>{patient.name}</td>
                                                    <td>{patient.email}</td>
                                                    <td>{patient.hspAdd}</td>
                                                    <td>{patient.pincode}</td>



                                                </tr>
                                        )
                                    }


                                </tbody>



                            </table>


                        </div>


                    </div>
                </div>

                <div style={{ backgroundColor: "#116466" }} >

                    <div style={{ textAlign: "center", margin: "50px", color: "#F8F9F9" }}><h1><strong>Book Appointment Here </strong></h1></div>

                    <form class="row g-3" style={{ padding: "48px" }} >

                        <div class="col-md-3" style={{ color: "#F8F9F9" }}>
                            <label for="validationDefault01" class="form-label">Name</label>
                            <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Your Name Here" required
                                value={this.state.name} onChange={this.changeNameHandler} />
                        </div>



                        <div class="col-md-3" style={{ color: "#F8F9F9 " }}>
                            <label for="exampleFormControlInput1" class="form-label">Time</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                value={this.state.time} onChange={this.changeTimeHandler} />

                        </div>


                        <div class="col-md-3" style={{ color: "#F8F9F9 " }}>
                            <label for="exampleFormControlInput1" class="form-label">Available Date</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                value={this.state.apDate} onChange={this.changeDateHandler} />

                        </div>

                        <div class="col-md-3" style={{ color: "#F8F9F9 " }}>
                            <label for="exampleFormControlInput1" class="form-label">Hospital Id</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1"
                                value={this.state.hspId} onChange={this.changeHspIdHandler} />

                        </div>

                        <div class="col-md-3" style={{ color: "#F8F9F9 " }}>
                            <label for="exampleFormControlInput1" class="form-label">Patient Id</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1"
                                value={this.state.ptId} onChange={this.changePtIdHandler} />

                        </div>

                        <div class="col-md-3" style={{ color: "#F8F9F9 " }}>
                            <label for="exampleFormControlInput1" class="form-label">Enter Email Id</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                value={this.state.email} onChange={this.changeEmailHandler} />

                        </div>

                        <div class="col-12" style={{ textAlign: "center" }}>
                            {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                            <button class="btn btn-primary" type="submit" onClick={this.sendDetails}>Submit</button>
                        </div>

                    </form>

                </div>



            </div>
        </>

        );
    }
}

export default CreateSessionComponent;