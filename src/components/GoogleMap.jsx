import Navbar from "../Navbar";
import { Carousel } from "react-bootstrap";
import img from '../Images/dontwait.jpg';
import img1 from '../Images/vaccine.jpg';
import img2 from '../Images/commuimmu.jpg';
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        pincode: ''

    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    changePincodeHandler = (event) => {
        this.setState({ pincode: event.target.value });
    }

    render() {
        return (
            <div className="  " style={{ backgroundColor: "#116466" }}>
                <Navbar />
                <div className="row">

                    <div className="col-12 col-md-12" style={{ backgroundColor: "#116466" }}>
                        <Carousel >

                            <Carousel.Item>
                                <img
                                    className="d-block  w-100"
                                    src={img}
                                    alt="First slide" />
                                <Carousel.Caption>
                                    <h3 style={{ color: "black", fontFamily: "cursive" }}>"CORONA"</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img1}
                                    alt="Third slide" />
                                <Carousel.Caption>
                                    <h3 style={{ color: "black", fontFamily: "cursive" }}>"Corona"</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Third slide" />
                                <Carousel.Caption>
                                    <h3 style={{ color: "black", fontFamily: "cursive" }}>"Corona"</h3>
                                </Carousel.Caption>
                            </Carousel.Item>


                        </Carousel>

                    </div>


                    <div className="d-none d-md-block col-md-6 d-flex column-flex justify-content-center align-items-center" style={{ backgroundColor: "#116466" }}>
                        <h3 className="text-center" style={{ color: "#151B54", paddingTop: "3vh" }} > <strong >Find Your Nearest Vaccination Center </strong>
                        </h3>
                        <div className="text-center ms-1 ps-2" style={{ height: "50%", width: "50%" }}>

                            {/*  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29798.32843164493!2d75.55645439999999!3d21.0010112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1615379577756!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe> */}


                            <Map style={{ width: 500, height: 350, marginLeft: "auto", marginRight: "60%" }} google={this.props.google}
                                onClick={this.onMapClicked}>
                                <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />

                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}>
                                    <div>
                                        <h1>{this.state.selectedPlace.name}</h1>
                                    </div>
                                </InfoWindow>
                            </Map>


                        </div>


                    </div>

                </div>
                <br />
                <br />

                <br />
                <br />

                <div> <div className="d-none d-md-block col-md-6 d-flex " style={{ backgroundColor: "#116466" }}>
                    <div className="col-md-6" style={{ color: "#F8F9F9", paddingTop: "20vh", paddingBottom: "20vh" }}>
                        {/* <label for="exampleFormControlInput1" class="form-label">Search for vaccines </label> */}
                        {/*  <input type="text" class="form-control" id="exampleFormControlInput1"
                                placeholder="Enter Place/Pincode" /> */}
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Pincode"
                            value={this.state.pincode} onChange={this.changePincodeHandler} />

                        <br />
                        <div style={{ textAlign: "center" }}>
                            {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                            <button class="btn btn-primary" onClick={this.onMarkerClick} type="submit">Go</button>
                        </div>
                    </div><br />

                    </div>
                </div>

            </div>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBK8IiCyOJ1OU_aLe0VmhKMHSllJppCyOQ')
})(GoogleMap)