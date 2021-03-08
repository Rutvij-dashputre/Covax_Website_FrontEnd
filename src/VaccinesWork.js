import React from 'react';
//import { NavLink } from 'react-router-dom';
//import webimg from "./image/about1.jpg";
//import home1img from "./image/about.jpg";
import Navbar from './Navbar';
//import web from "../src/Images/tp1.png"

// var sectionStyle = {
//     backgroundImage: `url(${web})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover', 

//   }


const VaccinesWork = () => {
    return (<>

        <div >
            <Navbar />
            <section id="header" className="d-flex align-items-center "   >
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 pt-lg-0 order-2 order-lg-1 d-flex justiy-content-center flex-column">
                                    <h3 className="text-center" style={{ color: "red" }}> <strong >Vaccines Work </strong>
                                    </h3><br />


                                    <h6 style={{ textAlign: "justify" }}> <span><strong>Vaccines are very effective - and they’re the best protection against many serious diseases. Most people who get vaccinated will have immunity (protection) against the disease. </strong></span></h6><br />


                                    <h6 style={{ textAlign: "justify", color: "#D35400 " }}> <span><strong>How Vaccines Protect You?</strong> </span></h6>

                                    <h6 style={{ textAlign: "justify" }}>Vaccines do an incredible job of protecting you from serious diseases and viruses.<br />

Have you ever wondered how vaccines actually work? Vaccines help your immune system do its job better and faster. And that protects you from serious diseases.<br></br>
                                        <br /></h6>

                                    <h6 style={{ textAlign: "justify", color: "#D35400 " }}> <span><strong>How do vaccines work?</strong></span></h6>

                                    <h6 style={{ textAlign: "justify" }}> Vaccines help your immune system fight infections faster and more effectively. When you get a vaccine, it sparks your immune response, helping your body fight off and remember the germ so it can attack it if the germ ever invades again. And since vaccines are made of very small amounts of weak or dead germs, they won’t make you sick.</h6>



                                </div>

                                {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web}  className="img-fluid animated" alt="home img" />

                        </div>  */}
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>

    </>);
};


export default VaccinesWork;