import React, { Component } from 'react';
import PatientService from '../services/PatientService';
import Navbar from "../Navbar";
import { NavLink } from 'react-router-dom';
import Delete from '../services/DeletePatient';

class ListPatientComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            patient: []
        }
        this.deletePatient = this.deletePatient.bind(this);
    }



    deletePatient(id) {
        Delete.deletePatient(id).then(res => {
            this.setState({patient: this.state.patient.filter(patient => patient.id !== id)});
        });
         
    }

    componentDidMount() {
        PatientService.getPatients().then((res) => {
            this.setState({ patient: res.data });

        });
    }

    render() {
        return (
            <div style={{ backgroundColor: "#116466" }}>
                <Navbar />
                <div class="col-12" style={{ textAlign: "right", color: "White", padding: "12px 12px" }}>
                    <NavLink to="/CreateHomeComponent" class="btn btn-success" style={{ background: "#5c7b90", padding: "6px 24px" }} >Logout</NavLink><br></br>
                </div>
                <h2 className="text-center">Patient Details</h2>
                <div className="row">
                    <table className="table table-strped table-bordered">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Patient email</th>
                                <th>Patient address</th>
                                <th>Patient Age</th>
                                <th>Patient MobileNumber</th>
                                <th>Delete</th>

                            </tr>


                        </thead>
                        <tbody>
                            {
                                this.state.patient.map(
                                    patient =>
                                        <tr key={patient.id}>
                                            <td>{patient.name}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.address}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.mobile}</td>
                                            <td> <button className="btn btn-primary btn-sm" onClick={() => this.deletePatient(patient.id)}>Delete</button></td>


                                        </tr>
                                )
                            }


                        </tbody>



                    </table>


                </div>


            </div>
        );
    }
}

export default ListPatientComponent;