import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import d1 from "../images/GraphicPageImages/guidelines.png";
import d2 from "../images/GraphicPageImages/digital.png";
import d3 from "../images/GraphicPageImages/packaging.png";

class Services extends Component {
    render() {
        return (
            <div>
                <section className="services">
                    <div className="jumbotron blue-jumbo">
                        <div className="container blue-container">
                            <section className="intro">
                                <Fade top>
                                    <h1 className="name"> خدمات</h1>
                                </Fade>
                                <Fade left>
                                    <h1 className="blue-describe ">
                                        <span dir="rtl">
                                        ارائه کننده خدمات مبتکرانه برای طراحی برند، لوگو، گرافیک محتوا و بسته بندی محصولات.
                                        </span>
                                    </h1>
                                </Fade>
                            </section>
                            <section className="row services-wrapper">
                                <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                    <div className="brand-design start-right ">
                                        <a href="#">
                                            <Fade left>
                                                <img src={d1} alt="" />
                                            </Fade>
                                        </a>
                                        <br/>
                                        <h6 className=" ">طراحی برند</h6>
                                        <p className=" color">
                                            استراتژی برند و راهنمایی خلاق برای تولید چاپ محصولات و پروژه آنلاین
                                        </p>
                                        <span dir="rtl">

                                            <li>Brand Creation</li>
                                            <li>Art Direction</li>
                                            <li>Brand Strategy</li>
                                            <li>Advertising</li>
                                            <li>Brand Guidelines</li>
                                            <li>Environment Design</li>
                                            <li>Artwork Production</li>
                                            <li>Print Management</li>
                                        </span>
                                        <br />
                                        <br />
                                        <a href="#">
                                            <p style={{ color: "white", textDecoration: "none" }}>VIEW BRAND PORTFOLIO ></p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                    <div className="brand-design start-right">
                                        <a href="#">
                                            <Fade bottom>
                                                <img src={d2} alt="" />
                                            </Fade>
                                        </a>
                                        <br/>
                                        <h6 >طراحی دیجیتال</h6>
                                        <p className=" color">
                                            طراحی وبسایت و داراییهای دیجیتال با تمرکز بر زیبایی و یکنواختی برند

                                        </p>
                                        <span dir="rtl">
                                            <li style={{ color: "white" }}>Website Design</li>
                                            <li style={{ color: "white" }}>Digital Advertising</li>
                                            <li style={{ color: "white" }}>Mobile Websites</li>
                                            <li style={{ color: "white" }}>Social Media</li>
                                            <li style={{ color: "white" }}>Digital Assets</li>
                                            <li style={{ color: "white" }}>App Design</li>
                                            <li style={{ color: "white" }}>File Preparation</li>
                                            <li style={{ color: "white", textDecoration: "none" }}>Onscreen Presentations</li>
                                        </span>
                                        <br />
                                        <br />
                                        <a href="#">
                                            <p style={{ color: "white", textDecoration: "none" }}>
                                                VIEW DIGITAL PORTFOLIO >
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                    <div className="brand-design start-right">
                                        <a href="#">
                                            <Fade right>
                                                <img src={d3} alt="" />
                                            </Fade>
                                        </a>
                                        <br/>
                                        <h6 >طراحی بسته بندی</h6>
                                        <span dir="rtl">
                                            <p className=" color">
                                                ارائه تمام راه حل های بسته بندی، از طراحی مفهومی تا اثر هنری آماده چاپ.
                                            </p>
                                            <li>Packaging Design</li>
                                            <li>Brand Creation</li>
                                            <li> Art Direction</li>
                                            <li>Packaging Implementation</li>
                                            <li>Product Development</li>
                                            <li>Mockup Creation</li>
                                            <li>Packaging Production</li>
                                            <li>Prepress Preparation</li>
                                        </span>
                                        <br />
                                        <br />
                                        <a href="#">
                                            <p style={{ color: "white", textDecoration: "none" }}>AGING PORTFOLIO ></p>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>


                </section>
            </div>
        );
    }
}

export default Services;
