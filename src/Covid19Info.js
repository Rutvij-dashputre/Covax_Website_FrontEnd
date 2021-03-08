import React from 'react';
//import { NavLink } from 'react-router-dom';
//import webimg from "./image/about1.jpg";
//import home1img from "./image/about.jpg";
import Navbar from './Navbar';
//import web from "../src/Images/about.jpg"

// var sectionStyle = {
//     backgroundImage: `url(${web})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover', 
  
//   }



const Covid19Info = () => {
    return (<>

<div style={{ backgroundColor: "#116466"}}>
 
 <Navbar /> 
 </div>
 <div style={{paddingTop:"40vh",backgroundColor: "#116466",color:"white" }}> 
        <section id="header" className="d-flex align-items-center "   >
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-12 pt-lg-0 order-2 order-lg-1 d-flex justiy-content-center flex-column">
                                <h3> <strong className="brand-name">Things to Know about the COVID-19 Vaccination Program</strong>
                                </h3><br></br>
                                 
                                <h6 style={{textAlign:"justify",color:"black"}}> <span><strong>COVID-19 vaccination is an important tool to help us get back to normal</strong> </span></h6>

                                COVID-19 vaccines teach our immune systems how to recognize and fight the virus that causes COVID-19. It typically takes a few weeks after vaccination for the body to build protection (immunity) against the virus that causes COVID-19. That means it is possible a person could still get COVID-19 just after vaccination. This is because the vaccine has not had enough time to provide protection.<br></br><br></br>

                                <h6 style={{textAlign:"justify",color:"black"}}> <span><strong>Protect Yourself and others from COVID-19</strong> </span></h6>
                                <ul>
                                1. Wearing a mask over your nose and mouth<br/>
                                2. Staying at least 6 feet away from others<br/>
                                3. Avoiding crowds<br/>
                                4. Avoiding poorly ventilated spaces<br/>
                                5. Washing your hands often<br/><br/>
                                </ul>

                                <h6 style={{textAlign:"justify",color:"black"}}> <span><strong>Benefits of Getting a COVID-19 Vaccine</strong> </span></h6>

                                We understand that some people may be concerned about getting vaccinated now that COVID-19 vaccines are available in the United States. While more COVID-19 vaccines are being developed as quickly as possible, routine processes and procedures remain in place to ensure the safety of any vaccine that is authorized or approved for use. Safety is a top priority, and there are many reasons to get vaccinated.
                                Below is a summary of the benefits of COVID-19 vaccination based on what we currently know.<br/><br/>

                                <h6 style={{textAlign:"justify",color:"black"}}> <span><strong>COVID-19 vaccination will help keep you from getting COVID-19</strong> </span></h6>

                                <ul>
                                <li>All COVID-19 vaccines currently available in the India have been shown to be highly effective at preventing COVID-19.</li>
                                <li>All COVID-19 vaccines that are in development are being carefully evaluated in clinical trials and will be authorized or approved only if they make it substantially less likely you’ll get COVID-19.</li>
                                <li>Based on what we know about vaccines for other diseases and early data from clinical trials, experts believe that getting a COVID-19 vaccine may also help keep you from getting seriously ill even if you do get COVID-19.</li>
                                <li>Getting vaccinated yourself may also protect people around you</li>
                                </ul>

                                <h6 style={{textAlign:"justify",color:"black"}}> <span><strong>COVID-19 vaccines are safe</strong> </span></h6>

                                Millions of people in the India have received COVID-19 vaccines, and these vaccines have undergone the most intensive safety monitoring in India history. This monitoring includes using both established and new safety monitoring systems to make sure that COVID-19 vaccines are safe. These vaccines cannot give you COVID-19.<br/><br/>

                                <h6 style={{textAlign:"justify",color:"black"}}> <span><strong>You may have side effects after vaccination, but these are normal
                                  </strong> </span></h6>

                                  After COVID-19 vaccination, you may have some side effects. These are normal signs that your body is building protection. The side effects from COVID-19 vaccination, such as chills or tiredness, may affect your ability to do daily activities, and they should go away in a few days

                                  <ul><li><strong>What to Expect after Getting a COVID-19 Vaccine</strong></li>
                                  COVID-19 vaccination will help protect you from getting COVID-19. You may have some side effects, which are normal signs that your body is building protection. These side effects may affect your ability to do daily activities, but they should go away in a few days.
                                  <li><strong>Common side effects</strong></li>
                                  1. On the arm where you got the shot: Pain, Swelling.<br/>
                                  2. Throughout the rest of your body: Fever, Chills, Tiredness, Headache
                                </ul>
                                  
                                  
                                    
                                  

                                {/* </span></h6> */}
                               
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
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


export default Covid19Info;