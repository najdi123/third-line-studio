import React, {Component} from 'react';
import e1 from "../images/GraphicPageImages/experience-la.jpg";
import e2 from "../images/GraphicPageImages/experience-london.jpg";
import e3 from "../images/GraphicPageImages/experience-rome.jpg";
import e4 from "../images/GraphicPageImages/experience-dubai.jpg";
import e5 from "../images/GraphicPageImages/experience-staffordshire.jpg";

class About extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default About;
