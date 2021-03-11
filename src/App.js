
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./Home";
import Covid19Info from './Covid19Info';
import CommunityImmu from "./CommunityImmu";
import DontWaitVaccinate from "./DontWaitVaccinate";
import VaccinesWork from "./VaccinesWork";
import Contact from "./Contact";
import About from "./About";
import ListPatientComponent from './components/ListPatientComponent';
import CreatePatientComponent from './components/CreatePatientComponent';
import CreateHospitalComponent from './components/CreateHospitalComponent';



const App = () => {
    return (

        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/CreatePatientComponent" component={CreatePatientComponent} />
                <Route exact path="/CreateHospitalComponent" component={CreateHospitalComponent} />
                <Route exact path="/Covid19Info" component={Covid19Info} />
                <Route exact path="/CommunityImmu" component={CommunityImmu} />
                <Route exact path="/DontWaitVaccinate" component={DontWaitVaccinate} />
                <Route exact path="/VaccinesWork" component={VaccinesWork} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/result" component={ListPatientComponent} />
                <Redirect to="/" />
            </Switch>

        </>

    );
};

export default App;