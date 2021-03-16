//import "./CSS/App.css";
import Navbar from "./Navbar";
import { Carousel } from "react-bootstrap";
/* import img from './Images/cimg1.jpg';
import img1 from './Images/cimg3.jpg';
import img2 from './Images/cimg2.jpg'; */

function Carousel1() { 


    return (
        <div className="  " >
            <Navbar />
            <div className="row">

                <div className="col-12 col-md-12" >
                    <Carousel >

                        <Carousel.Item>
                            <img
                                className="d-block  w-100"
                               /*  src={img} */
                                alt="First slide" />
                            <Carousel.Caption>
                                <h3 style={{ color: "black", fontFamily: "cursive" }}>"CORONA"</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                /* src={img1} */
                                alt="Third slide" />
                            <Carousel.Caption>
                                <h3 style={{ color: "black", fontFamily: "cursive" }}>"Corona"</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                              /*   src={img2} */
                                alt="Third slide" />
                            <Carousel.Caption>
                                <h3 style={{ color: "black", fontFamily: "cursive" }}>"Corona"</h3>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>

                </div>


                <div className="d-none d-md-block col-md-6 " style={{ backgroundColor: "#F2F3F4" }}>
                    <h3 className="text-center" style={{ color: "#151B54", paddingTop: "10vh" }} > <strong >Find Your Nearest Vaccination Center </strong>
                    </h3><br />
                    <div className="text-center" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29798.32843164493!2d75.55645439999999!3d21.0010112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1615379577756!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div>

                    </div>

                </div>
                <div className="d-none d-md-block col-md-6 " style={{ backgroundColor: "#F2F3F4" }}>
                    <div class="col-md-6" style={{ color: "#F8F9F9", paddingTop: "40vh" }}>
                        {/* <label for="exampleFormControlInput1" class="form-label">Search for vaccines </label> */}
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Enter Place/Pincode" />

                    </div><br />
                    <div class="col-6" style={{ textAlign: "center" }}>
                        {/* <NavLink to="/Login" class="btn btn-primary ">SUBMIT</NavLink> */}
                        <button class="btn btn-primary" type="submit">Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel1;