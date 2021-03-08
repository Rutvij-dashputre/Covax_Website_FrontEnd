
import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import { Switch, Route, Redirect } from "react-router-dom"
 import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Courses from "./Courses";
// import Faculty from "./Faculty";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import Pgdac from "./Pgdac";
// import Pgdmc from "./Pgdmc";
// import Pgdia from "./Pgdia";
// import Pgdbda from "./Pgdbda";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import Register from "./Register"
import Covid19Info from './Covid19Info';
import CommunityImmu from "./CommunityImmu";
import DontWaitVaccinate from "./DontWaitVaccinate";
import VaccinesWork from "./VaccinesWork";
import Contact from "./Contact";
import About from "./About";
import HospReg from "./HospReg";

const App = () => {
    return ( 
     
    <>
    {/* <Register/> */}
    {/* <Navbar /> */}
   
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Register" component={Register}/>
         {/* <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Courses" component={Courses}/>
        <Route exact path="/Faculty" component={Faculty}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/Login" component={Login}/> */}
         <Route exact path="/Covid19Info" component={Covid19Info}/>
         <Route exact path="/CommunityImmu" component={CommunityImmu}/>
         <Route exact path="/DontWaitVaccinate" component={DontWaitVaccinate}/>
         <Route exact path="/VaccinesWork" component={VaccinesWork}/>
         <Route exact path="/Contact" component={Contact}/>
         <Route exact path="/About" component={About}/>
         <Route exact path="/HospReg" component={HospReg}/>
        {/* <Route exact path="/Pgdmc" component={Pgdmc}/>
        <Route exact path="/Pgdia" component={Pgdia}/>
        <Route exact path="/Pgdbda" component={Pgdbda}/>  */}
        <Redirect to="/" /> 
       

         </Switch> 
         {/* {/* <Footer />  */}
    </>

    );
};

export default App;