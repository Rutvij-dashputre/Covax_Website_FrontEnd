import React, { Component } from 'react';
import SendPin from '../services/SendPinService'; 
import { NavLink , Redirect } from 'react-router-dom';
import Navbar from "../Navbar";

class CreateSessionComponent extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
           
            pincode: 0,
            loggedIn
        }
        this.changePinHandler = this.changePinHandler.bind(this);
        this.sendDetails = this.sendDetails.bind(this);

    }

    sendDetails = (e) => {
        e.preventDefault();
        let pin = {
            pincode: this.state.pincode
        };
        console.log('pin =>' + JSON.stringify(pin));

        SendPin.send(pin).then(res => {
            console.log('pin sent' + res.data.pin);
            if (res.data) {
                
                console.log("success");
                this.setState({
                    loggedIn: true
                })
            } else {
                alert("Invalid pincode");
            }
        });

    }
    
    changePinHandler = (event) => {
        this.setState({ pincode: event.target.value });
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/CreateHospitalList" />
        }
        return (<>

            <div style={{ backgroundColor: "#116466" }} >
                <Navbar />
                <div className="col-md-3" style={{ textAlign: "center", margin: "50px", color: "#F8F9F9" }}><h1><strong>Patient Details</strong></h1></div>
    
                <form class="col-md-12" style={{ padding: "48px" }} >
    
                    <div /* className="col-md-6" */ style={{  textAlign: "center" ,color: "#F8F9F9 " }}>
                        <label for="exampleFormControlInput1" class="form-label">Pin Code</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1"
                        value={this.state.pincode} onChange={this.changePinHandler} />
    
                    </div>
    
                    <div className="col-12" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                        <NavLink  type="reset" to="/CreateHospitalList" class="btn btn-success" onClick={this.sendDetails} style={{ background: "#1877F2", padding: "6px 24px"  }} >Submit</NavLink>
                    </div>
    
                </form>
    
            </div>
        </>

        );
    }
}

export default CreateSessionComponent;



