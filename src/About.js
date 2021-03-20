import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (<>

    


        <div style={{ backgroundColor: "#116466", color:"white"}}>
        <div class="outer-div"><div class="inner-div"></div></div>

            <Navbar />
            <section id="header" className="d-flex align-items-center "   >

                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 pt-lg-0 order-2 order-lg-1 d-flex justiy-content-center flex-column">
                                    <h3 className="text-center" style={{ color: "red" }}> <strong >About Us  </strong>
                                    </h3><br />


                                    <h6 style={{ textAlign: "justify" }}> <span><strong> <h2>Our Mission </h2></strong><br />

                                    Covax.com offers reliable, easy-to-understand information from the federal government on vaccines, immunizations, and vaccine-preventable diseases.

Whether you want trusted vaccination information for yourself, a loved one, or others in your community, we can help you find what you need. <br />  </span></h6><br />


                                    <h6 style={{ textAlign: "justify", color: "#D35400 " }}> <span><strong>Disclaimer</strong> <br />  </span></h6><br />

                                    <h6 style={{ textAlign: "justify" }}>Covax.com offers health information for your general knowledge. The information on this site does not replace professional medical advice, diagnosis, or treatment.<br />

                                    If you have questions about your health, talk with your doctor or other health care provider <br></br>
                                        <br /></h6>

                                    <h6 style={{ textAlign: "justify", color: "#D35400 " }}> <span><strong>How to share our information ?</strong> <br />  </span></h6>

                                    <h6 style={{ textAlign: "justify" }}> We encourage you to share information from our site with your friends, family, patients, or website users.

                                    Most of the information on Covax.com is in the public domain. That means you can copy and distribute it for free, but we request that you give credit to Covax.com as the source.

<br /></h6>

                                    <h6 style={{ textAlign: "justify" }}>This website can be shared through various social media platforms. The main aim is that every common man should have access to this website and have updates regarding the vaccine.  <br></br></h6>








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


export default About;