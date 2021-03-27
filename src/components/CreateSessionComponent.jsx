import React, { Component } from 'react';
import HospitalService from '../services/HospitalService';
import Navbar from "../Navbar";
import { NavLink  } from 'react-router-dom';


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
            alert('Appointment Booked');
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

            <div style={{ backgroundColor: "#white", width: "100%" }} >

                <Navbar />
                <div class="col-12" style={{ textAlign: "right", color: "black", padding: "12px 12px" }}>
                    <NavLink to="/CreateHomeComponent" class="btn btn-success" style={{ background: "#5c7b90" }} >Logout</NavLink><br></br>
                </div>
                <div style={{ textAlign: "center", margin: "10px", color: "#black" }}><h2><strong>Check Nearby Hospitals Here</strong></h2></div><br /><br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <form style={{ width: "100%", display: "flex", justifyContent: "center" }} >


                        <div className="col-3 d-flex " style={{ color: "#black " }}>
                            <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Pin Code</strong></label>
                            <input type="number" className="sm form-control d-flex justify-content-center" id="exampleFormControlInput1"
                                value={this.state.pincode} onChange={this.changePinCodeHandler} /> <br />
                            <button className="btn btn-primary btn-lg " type="submit" onClick={this.savePatient}>Search</button>
                        </div>



                    </form>
                </div>
                <br /><br />
                <div>
                    <div>
                        <h3 className="text-center"><b>Hospitals Details</b></h3><br />
                        <div className="row">
                            <table className="table table-strped table-bordered ml-2 mr-2">
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
                <br /><br />

                <div style={{ backgroundColor: "#white", width: "100%" }} >

                    <div style={{ textAlign: "center", marginTop: "20px", color: "#black" }}><h3><strong>Book Appointment Here </strong></h3></div>
                    <div className="col-md-3 col-3 mx-auto  ">
                        <form className="col mt-3" style={{ display: "grid", justifyContent: "center", border: "1px solid ", borderRadius: "5px" }} >

                            <div class="row-md-3" style={{ color: "#black" }}>
                                <label for="validationDefault01" class="form-label">Name</label>
                                <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Your Name Here" required
                                    value={this.state.name} onChange={this.changeNameHandler} />
                            </div>



                            <div class="row-md-3" style={{ color: "#black " }}>
                                <label for="exampleFormControlInput1" class="form-label">Time</label>
                                <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="Enter Time Here" required
                                    value={this.state.time} onChange={this.changeTimeHandler} />

                            </div>


                            <div class="row-md-3" style={{ color: "#black " }}>
                                <label for="exampleFormControlInput1" class="form-label">Available Date</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Enter Date Here" required
                                    value={this.state.apDate} onChange={this.changeDateHandler} />

                            </div>

                            <div class="row-md-3" style={{ color: "#black " }}>
                                <label for="exampleFormControlInput1" class="form-label">Hospital Id</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Hospital Id Here" required
                                    value={this.state.hspId} onChange={this.changeHspIdHandler} />

                            </div>

                            <div class="row-md-3" style={{ color: "#black " }}>
                                <label for="exampleFormControlInput1" class="form-label">Patient Id</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Patient Id Here" required
                                    value={this.state.ptId} onChange={this.changePtIdHandler} />

                            </div>

                            <div class="row-md-3" style={{ color: "#black " }}>
                                <label for="exampleFormControlInput1" class="form-label">Enter Email Id</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email-id Here" required
                                    value={this.state.email} onChange={this.changeEmailHandler} />

                            </div>
                            <br />
                            <div class="col-12 mb-3" style={{ textAlign: "center" }}>
                                {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                                <button class="btn btn-primary" type="submit" onClick={this.sendDetails}>Submit</button>
                            </div>

                        </form><br />
                    </div>

                </div>



            </div>
        </>

        );
    }
}

export default CreateSessionComponent;