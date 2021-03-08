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


const CommunityImmu = () => {
    return (<>

        <div >
            <Navbar />
            <section id="header" className="d-flex align-items-center "   >
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 pt-lg-0 order-2 order-lg-1 d-flex justiy-content-center flex-column">
                                    <h3 className="text-center" style={{ color: "red" }}> <strong >Vaccines Protect Your Community </strong>
                                    </h3><br />


                                    <h6 style={{ textAlign: "justify" }}> <span><strong>Did you know that when you get vaccinated, you’re protecting yourself and your community? <br /><br />

This concept is called community immunity, or herd immunity. And it’s an important reason for you and your family to get vaccinated - so you can help keep yourselves and your community healthy.</strong> <br />  </span></h6><br />


                                    <h6 style={{ textAlign: "justify", color: "#D35400 " }}> <span><strong>How does community immunity work?</strong> <br />  </span></h6><br />

                                    <h6 style={{ textAlign: "justify" }}>• Germs can travel quickly through a community and make a lot of people sick. If enough people get sick, it can lead to an outbreak. But when enough people are vaccinated against a certain disease, the germs can’t travel as easily from person to person — and the entire community is less likely to get the disease.<br />

• That means even people who can’t get vaccinated will have some protection from getting sick. And if a person does get sick, there’s less chance of an outbreak because it’s harder for the disease to spread. Eventually, the disease becomes rare — and sometimes, it’s wiped out altogether. <br></br>
                                        <br /></h6>

                                    <h6 style={{ textAlign: "justify", color: "#D35400 " }}> <span><strong>Who does community immunity protect?</strong> <br />  </span></h6>

                                    <h6 style={{ textAlign: "justify" }}> Community immunity protects everyone. But it’s especially important because some people can’t get vaccinated for certain diseases - such as people with some serious allergies and those with weakened or failing immune systems<br /></h6>

                                    <h6 style={{ textAlign: "justify" }}>Community immunity is also important for the very small group of people who don’t have a strong immune response from vaccines.<br></br></h6>








                                    <br />
                                    <br />

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


export default CommunityImmu;