import React, { Component } from 'react';
import PatientService from '../services/PatientService';


class ListPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: []
        }
    }

    componentDidMount(){
        PatientService.getPatients().then((res) => {
            this.setState({patient: res.data});

        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Patient Details</h2>
                <div className = "row">
                        <table className="table table-strped table-bordered">
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Patient email</th>
                                    <th>Patient userName</th>
                                    <th>Patient password</th>
                                    <th>Patient address</th>
                                    <th>Patient AadhaarNumber</th>
                                    <th>Patient Age</th>
                                    <th>Patient State</th>
                                    <th>Patient gender</th>
                                    <th>Patient MobileNumber</th>

                                </tr>


                            </thead>
                            <tbody>
                                {
                                    this.state.patient.map(
                                        patient =>
                                        <tr key = {patient.id}>
                                            <td>{patient.name}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.username}</td>
                                            <td>{patient.address}</td>
                                            <td>{patient.password}</td>
                                            <td>{patient.aadharNo}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.state}</td>
                                            <td>{patient.gender}</td>
                                            <td>{patient.mobile}</td>
                                            

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