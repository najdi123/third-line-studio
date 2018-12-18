import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";

import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
// import Carousel from "../components/Carousel.jsx";
import "./GraphicDesign.css";

import p1 from "../images/GraphicPageImages/magellan-650x459.jpg";
import p2 from "../images/GraphicPageImages/aiga-650x459.jpg";
import p3 from "../images/GraphicPageImages/la-650x459.jpg";
import p4 from "../images/GraphicPageImages/village-650x459.jpg";
import p5 from "../images/GraphicPageImages/sunset-650x459.jpg";
import p6 from "../images/GraphicPageImages/telesign-650x459.jpg";
import d1 from "../images/GraphicPageImages/guidelines.png";
import d2 from "../images/GraphicPageImages/digital.png";
import d3 from "../images/GraphicPageImages/packaging.png";
import e1 from "../images/GraphicPageImages/experience-la.jpg";
import e2 from "../images/GraphicPageImages/experience-london.jpg";
import e3 from "../images/GraphicPageImages/experience-rome.jpg";
import e4 from "../images/GraphicPageImages/experience-dubai.jpg";
import e5 from "../images/GraphicPageImages/experience-staffordshire.jpg";
import bb1 from "../images/GraphicPageImages/brand-building.png";
import b1 from "../images/GraphicPageImages/logo-playboy.jpg";
import b2 from "../images/GraphicPageImages/logo-magellan-jets.jpg";
import b3 from "../images/GraphicPageImages/logo-la-cold.jpg";
import b4 from "../images/GraphicPageImages/logo-swell.jpg";
import b5 from "../images/GraphicPageImages/logo-espresso.jpg";
import b6 from "../images/GraphicPageImages/logo-saturnbath.jpg";
import b7 from "../images/GraphicPageImages/logo-moet.jpg";
import b8 from "../images/GraphicPageImages/logo-dca.jpg";
import b9 from "../images/GraphicPageImages/logo-ticketmaster.jpg";
import b10 from "../images/GraphicPageImages/logo-nespresso.jpg";
import b11 from "../images/GraphicPageImages/logo-akzonobel.jpg";
import b12 from "../images/GraphicPageImages/logo-barclays.jpg";
import n1 from "../images/GraphicPageImages/blog-clients.jpg";
import n2 from "../images/GraphicPageImages/blog-playboy.jpg";
import n3 from "../images/GraphicPageImages/blog-jet.jpg";





class GraphicDesign extends Component {
    render() {
        return (
            <div className="content-wrap container-fluid">
                <Navbar />
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
                <section className="about">
                    <div className="jumbotron">
                        <div className="container">

                            <h6 className="name">درباره</h6>
                            {/*<Fade left>*/}
                            <p className="describe-designer start-right">
                                <span dir="rtl">
                                من دیوید کاکس، طراح گرافیک فریلنس، مشاور برندینگ و طراح بسته بندی محصولات و مستقر در لوس آنجلس هستم. من بیشتر از 15 سال سابقه همکاری با بهترین برندهای جهان و همکاری در طراحی بیستر از 100 لوگو با بهترین آژانس های تبلیغاتی جهانی دارم.
                                <br/>
                                </span>
                            </p>
                            <br/>
                            {/*</Fade>*/}
                            <a href="#" style={{ color: "rgb(0, 240, 220)", textDecoration: 'none'  }}>
                                <p style={{ color: "rgb(0, 240, 220)", textDecoration: 'none'  }}>
                                    DOWNLOAD RESUME »
                                </p></a>

                        </div>
                    </div>
                    <section className="about">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={e1} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5> Los Angeles, USA</h5>
                                <p> 2012 – CURRENT </p>
                                <p>
                                    During the past 5 years in LA I have completed projects for
                                    more than 50 brands, including TeleSign, a global digital
                                    security company and The Sunset Team, a West Hollywood real
                                    estate agency. Plus packaging for CuttinEdge Lab and LA Cold
                                    Brew. Other projects include a website for a Hollywood film
                                    editor, digital advertising for private jet company and
                                    brand creation for a European organic food supplier. I also
                                    acted as Agency of Record for AIGA Los Angeles, responsible
                                    for design and production of event assets including social
                                    media graphics, emailers and posters.
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5>London, UK</h5>
                                <p>1996 – 2012</p>
                                <p>
                                    I lived and worked in London for more than 15 years where I
                                    freelanced at some of London’s (and the world’s) best design
                                    agencies including FutureBrand, Design Bridge, Identica,
                                    Pentagram, BEAR, Landor and Interbrand. Working at these
                                    agencies gave me the opportunity to work on brands such as
                                    Barclays, Ticketmaster, Virgin, McDonalds, AkzoNobel, Moët &
                                    Chandon and Nespresso. Additionally, I worked with my own
                                    clients, including a Dubai based automotive company
                                    specializing in roadside assistance.
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={e2} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={e3} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5>Rome, Italy</h5>
                                <p>1995 – 1996</p>
                                <p>
                                    I was only in Rome for one year, but during my time I
                                    completed work for various boutique brands, including a
                                    high-end leather supplier and a stationer specializing in
                                    bespoke stationery and printed goods. I also continued to
                                    work with the global advertising powerhouse DMB&B, working
                                    out of their Milan and Dubai offices. I focused on their
                                    European based clients including Cadbury, McDonald’s,
                                    Siemens and Smirnoff.
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5>Dubai, UAE</h5>
                                <p>1992 – 1995</p>
                                <p>
                                    I spent most of my 4 years in Dubai working at DMB&B, which
                                    at the time was the biggest advertising company in the
                                    world. I was responsible for visualization and retouching
                                    for clients including GMC, Dubai Department of Tourism &
                                    Commerce, Philips and Nestlé. My other role at the agency
                                    was that of a production artist, tasked with the creation of
                                    multilingual adverts for publication across the Gulf and the
                                    Middle East.
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={e4} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-image">
                                <img src={e5} alt="" />
                            </div>
                            <div className="col-sm-6 col-md-6 city-text">
                                <h5>Staffordshire, UK</h5>
                                <p>1972 – 1992</p>
                                <p>
                                    I grew up in Staffordshire, among the rolling hills and lush
                                    landscape of middle England, some 100 miles north of London.
                                    After completing my Graphic Design Diploma in 1992 I was
                                    offered a job at a design agency in Dubai. So I decided to
                                    jump on a plane and in at the deep end. The rest as they
                                    say, is history.
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="brand-building">
                    <div className="jumbotron blue-jumbo">
                        <div className="container blue-container">

                            <strong>
                                <p className="name">ساخت برند</p>
                            </strong>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                  <span dir="rtl">
                                    <h2 className="blue-describe start-right">
                                        توسعه برند با در نظر داشتن تصویر بزرگ.

                                    </h2>
                                    <p >
                                        ما هیچ وقت متوجه نمیشویم که مشتریان چگونه برای اولین بار با کار ما آشنا میشوند.
                                        ممکن از طریق وبسایت، تبلیغات آنلاین، کارت کاری شما یا غرفه ای در نمایشگاه باشد.
                                        پس امری ضروریست که تمامی آنها فرستنده یک پیغام و هم سو باشند. توانایی در نظر گرفتن باقی
                                        داراییها در طول طراحی و تولید، حتی اگر در زمان سفارش از من خواسته نشده باشد،
                                        در نهایت به نمایش یکنواخت بودن هویت برند می شود. تجربه گسترده من به این معناست که
                                        توانایی طراحی، پیاده سازی و ساخت هر ایتم خواست شما را دارم. از لوازم تحریر، وثایق چاپی،
                                        تبلیغات چاپی و دستورالعمل های استفاده از لوگوی برند و بسته بندی، برند دفتری، استندهای نمایشگاهی،
                                        وبسایتها و تبلیغات آنلاین و ...
                                    </p>
                                  </span>

                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <section className="brand-building-image">
                                        <img src={bb1} alt="" />
                                    </section>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="brands">
                    <div className="jumbotron">
                        <div className="container">

                            <h6 className="name">برندها</h6>
                            {/*<Fade left>*/}
                            <p className="describe-brands">
                                From telecommunication giants, household brands and private jet companies to small businesses and individuals, I’ve completed work in just about every business sector.
                            </p>
                            {/*</Fade>*/}

                            <section className="brands-logo">
                                <div className="row brands-row">
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b1} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b2} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b3} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b4} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b5} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b6} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b7} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b8} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b9} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b10} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b11} alt="" />
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                        <img src={b12} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <section className="news">
                    <div className="jumbotron">
                        <div className="container">
                            <h6 className="name">اخبار</h6>
                            <p className="describe-brands">
                                All the latest news, updates on recent projects and stories from the world of design.
                            </p>

                            <section className="row news-images">
                                <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                    <a className="nav-link" to="#">
                                        <img src={n1} alt="" />
                                        <h5 className="describe-news" style={{paddingTop: '2rem'}}>
                                            Thou Shall Not Consult With thy Neighbor’s Wife for Design
                                            Feedback
                                        </h5>
                                    </a>
                                    <p style={{ color: "rgb(0, 240, 220)" }}>SEPTEMBER 17, 2017</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                    <a className="nav-link" to="#">
                                        <img src={n2} alt="" />
                                        <h5 className="describe-news" style={{paddingTop: '2rem'}}>New packaging design collaboration with Playboy in LA</h5>
                                    </a>
                                    <p style={{ color: "rgb(0, 240, 220)" }}>SEPTEMBER 3, 2017</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                    <a className="nav-link" to="#">
                                        <img src={n3} alt="" />
                                        <h5 className="describe-news" style={{paddingTop: '2rem'}}>
                                            Flying high with new Magellan Jets advertising campaign
                                        </h5>
                                    </a>
                                    <p style={{ color: "rgb(0, 240, 220)" }}>AUGUST 24, 2017</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default GraphicDesign;
