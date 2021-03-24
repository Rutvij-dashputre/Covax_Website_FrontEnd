import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import { Switch, Route, Redirect } from "react-router-dom"
import Covid19Info from './Covid19Info';
import CommunityImmu from "./CommunityImmu";
import DontWaitVaccinate from "./DontWaitVaccinate";
import VaccinesWork from "./VaccinesWork";
import Contact from "./Contact";
import About from "./About";
import Carousel1 from "./Corousel";
import ListPatientComponent from './components/ListPatientComponent';
import CreatePatientComponent from './components/CreatePatientComponent';
import CreateHospitalComponent from './components/CreateHospitalComponent';
import CreateHomeComponent from './components/CreateHomeComponent';
import PasswordResetComponent from './components/PasswordResetComponent';
import HospitalLoginComponent from './components/HospitalLoginComponent';
import GoogleMap from './components/GoogleMap';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';
import CreateSessionComponent from './components/CreateSessionComponent';



const App = () => {
    return (

        <>
            <Switch>
                <Route exact path="/" component={CreateHomeComponent} />
                <Route exact path="/CreatePatientComponent" component={CreatePatientComponent} />
                <Route exact path="/CreateSessionComponent" component={CreateSessionComponent} />
                <Route exact path="/ForgotPasswordComponent" component={ForgotPasswordComponent} />
                <Route exact path="/CreateHospitalComponent" component={CreateHospitalComponent} />
                <Route exact path="/PasswordResetComponent" component={PasswordResetComponent} />
                <Route exact path="/HospitalLoginComponent" component={HospitalLoginComponent} />
                <Route exact path="/Covid19Info" component={Covid19Info} />
                <Route exact path="/CommunityImmu" component={CommunityImmu} />
                <Route exact path="/DontWaitVaccinate" component={DontWaitVaccinate} />
                <Route exact path="/VaccinesWork" component={VaccinesWork} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Carousel1" component={Carousel1} />
                <Route exact path="/GoogleMap" component={GoogleMap} />
                <Route exact path="/admin" component={ListPatientComponent} />
                <Redirect to="/" />
            </Switch>

        </>

    );
};

export default App;
