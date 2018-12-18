import React, { Component } from "react";
import "./GraphicDesign.css";

import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

import Top from "../components/Top";
import Services from "../components/Services";
import About from "../components/About";
import BrandBuilding from "../components/BrandBuilding";
import Brands from "../components/Brands";
import News from "../components/News";





class GraphicDesign extends Component {
    render() {
        return (
            <div className="content-wrap container-fluid">
                <Navbar />


                <Top/>
                <Services/>
                <About/>
                <BrandBuilding/>
                <Brands/>
                <News/>



                <Footer />
            </div>
        );
    }
}

export default GraphicDesign;
