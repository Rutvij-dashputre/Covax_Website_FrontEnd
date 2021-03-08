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


const DontWaitVaccinate = () => {
    return (<>

 <div > 
 <Navbar /> 
        <section id="header" className="d-flex align-items-center "   >
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-12 pt-lg-0 order-2 order-lg-1 d-flex justiy-content-center flex-column">
                                <h3 className="text-center" style={{color:"red"}}> <strong >Do Not Wait. Vaccinate ! </strong>
                                </h3><br/>
                               

                                <h6 style={{textAlign:"justify"}}> <span><strong>Millions of people get CORONA. The good news is that the Covid-19 vaccine can lower the risk of getting the Corona by about half. Getting Covid-19 vaccine is the best way to protect yourself from the Corona.

</strong> <br/>  </span></h6><br/>

<h6 style={{textAlign:"justify",color:"#D35400 "}}> <span><strong>Why is the COVID-19 vaccine important?</strong> <br/>  </span></h6>

                             <h6 style={{textAlign:"justify"}}> Most people who get the Corona have a mild illness. But for some, it can be serious - and even deadly. Serious complications from the Corona are more likely in babies and young children, pregnant women, older adults, and people with certain long-term health conditions - like diabetes or asthma.<br/>

Getting COVID-19 vaccinated every year is the best way to lower your chances of getting the Corona. Keep in mind that getting the COVID-19 vaccine also protects the people around you. So when you and your family get vaccinated, you help keep yourselves and your community healthy.<br/></h6>

<h6 style={{textAlign:"justify",color:"#D35400 "}}> <span><strong>Who needs to get the COVID-19 vaccine?</strong> <br/>  </span></h6>

                             <h6 style={{textAlign:"justify"}}> Everyone needs to get the COVID-19 vaccine every year. It’s part of the routine vaccine schedules for children, teens, and adults.<br/></h6>



                             <h6 style={{textAlign:"justify",color:"#D35400 "}}> <span><strong>What are the side effects of the flu vaccine?</strong> <br/>  </span></h6>

                             <h6 style={{textAlign:"justify"}}> Side effects are usually mild and go away in a few days. Side effects from the COVID-19 vaccine may include:<br/></h6>
                             <h6 style={{textAlign:"justify",color:"#D35400 "}}><ul>
                                 <li>Pain, swelling, or redness where the shot was given</li>
                                 <li>Headache</li>
                                 <li>Muscle aches</li>
                                 <li>Fever</li>
                                 <li>Upset stomach</li>
                                 </ul></h6>
                                     


                
                                
                              
                               
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


export default DontWaitVaccinate;