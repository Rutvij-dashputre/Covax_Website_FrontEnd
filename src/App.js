
import React from 'react';
//import { Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//import { Switch, Route, Redirect } from "react-router-dom"
// import Home from "./Home";
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

const App = () => {
    return ( 
     
    <>
    <Register/>
    {/* <Navbar /> */}
   
    {/* <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Courses" component={Courses}/>
        <Route exact path="/Faculty" component={Faculty}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Pgdac" component={Pgdac}/>
        <Route exact path="/Pgdmc" component={Pgdmc}/>
        <Route exact path="/Pgdia" component={Pgdia}/>
        <Route exact path="/Pgdbda" component={Pgdbda}/>
        <Redirect to="/" />
       

         </Switch>
         <Footer /> */}
    </>

    );
};

export default App;