import React, {Component} from 'react';
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import p1 from "../images/GraphicPageImages/magellan-650x459.jpg";
import p2 from "../images/GraphicPageImages/aiga-650x459.jpg";
import p3 from "../images/GraphicPageImages/la-650x459.jpg";
import p4 from "../images/GraphicPageImages/village-650x459.jpg";
import p5 from "../images/GraphicPageImages/sunset-650x459.jpg";
import p6 from "../images/GraphicPageImages/telesign-650x459.jpg";

class Top extends Component {
    render() {
        return (
            <div>
                <section className="intro">
                    <div className="jumbotron">
                        <div className="container">
                            <Flash>
                                <h1 className="name top">حسین رضازاده</h1>

                            </Flash>
                            <Fade left>

                                <h1 className="describe">

                                    طراح گرافیک، لوگو و مشاور برندینگ مستقر در تهران
                                </h1>
                            </Fade>

                        </div>
                    </div>
                    <section className="row portfolio">
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p1} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p2} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p3} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p4} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p5} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="col-sm-12 col-md-6 col-lg-4 pax">
                                <div className="img__wrap thumbnail">
                                    <img className="img__img" src={p6} alt="" />
                                    <div className="img__description">
                                        <div className="m-center">
                                            Content goes here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </section>
                </section>
            </div>
        );
    }
}

export default Top;
