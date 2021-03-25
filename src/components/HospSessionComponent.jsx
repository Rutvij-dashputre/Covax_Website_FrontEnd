import React, { Component } from 'react';
import HospSession from '../services/HospSessionService';
import { NavLink } from 'react-router-dom';
import Navbar from "../Navbar";
import Confirm from '../services/ConfirmAppServicce';

class HospSessionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            hspId: '',
            email: ''


        }
        this.state = {
            patient: []
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.sendId = this.sendId.bind(this);
        this.confirmApp = this.confirmApp.bind(this);


    }

    
    confirmApp(email) {
        Confirm.confirmation(email).then(res => {
            this.setState({patient: this.state.patient.filter(patient => patient.email !== email)});
        });
         
    }


    sendId = (e) => {
        e.preventDefault();
        let hspId = {
            hspId: this.state.hspId
        };
        console.log('hspId =>' + JSON.stringify(hspId));

        HospSession.reset(hspId).then(res => {
            this.setState({ patient: res.data })
            console.log('hosp id fetched' + JSON.stringify(res.data));
        });

    }

   /*  confirmApp = (e) => {
        e.preventDefault();
        let emailId = {
            email: this.state.email
        };
        console.log('emailId =>' + JSON.stringify(emailId));

        HospSession.confirm(emailId).then(res => {
            console.log('app confirm' + JSON.stringify(res.data));
        });

    } */





    changeIdHandler = (event) => {
        this.setState({ hspId: event.target.value });
    }

    render() {
        return (<>

            <div style={{ backgroundColor: "#116466" }} >
                <Navbar />
                <div style={{ textAlign: "center", margin: "50px", color: "#F8F9F9" }}><h1><strong>Display Appointments</strong></h1></div>

                <form className="row g-3 " style={{ padding: "48px" }} >

                    <div className="col-md-3 " style={{ marginLeft: "38%", color: "#F8F9F9" }}>
                        <label for="exampleFormControlInput1" className="form-label">Enter hospital Id</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Enter Hospital Id" value={this.state.hspId} onChange={this.changeIdHandler} />
                    </div>

                    <div className="col-12" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                        <NavLink type="reset" to="/PasswordResetComponent" class="btn btn-success" onClick={this.sendId} style={{ background: "#1877F2", padding: "6px 24px" }} >Search</NavLink>
                    </div>


                </form>

                <div>
                    <div>
                        <h2 className="text-center">Patient Details</h2>
                        <div className="row">
                            <table className="table table-strped table-bordered ml-2">
                                <thead className="p-2">
                                    <tr className="bg-secondary">
                                        <th>Patient Id</th>
                                        <th>Appointment Id</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Email</th>
                                        <th>Confirm</th>

                                    </tr>


                                </thead>
                                <tbody>
                                    {
                                        this.state.patient.map(
                                            patient =>
                                                <tr key={patient.ptId}>
                                                    <td>{patient.ptId}</td>
                                                    <td>{patient.apId}</td>
                                                    <td>{patient.name}</td>
                                                    <td>{patient.apDate}</td>
                                                    <td>{patient.email}</td>
                                                    <td> <button className="btn btn-primary btn-sm"  onClick={() => this.confirmApp(patient.email)}>Confirm</button></td>



                                                </tr>
                                        )
                                    }


                                </tbody>



                            </table>


                        </div>


                    </div>
                </div>

            </div>
        </>

        );
    }
}

export default HospSessionComponent;



