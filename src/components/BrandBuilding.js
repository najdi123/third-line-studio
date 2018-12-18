import React, {Component} from 'react';
import bb1 from "../images/GraphicPageImages/brand-building.png";

class BrandBuilding  extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default BrandBuilding;
