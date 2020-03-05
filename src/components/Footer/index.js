import React from "react";

function Footer() {

    return (
        <footer>
            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footersec">
                                <div className="flogo"><a href="#" title=""><img src="http://placehold.it/175x40"
                                                                                 alt=""/></a></div>
                                <ul>
                                    <li>
                                        <a href="#" title="">Ana Sayfa</a>
                                    </li>
                                    <li>
                                        <a href="#" title="">Hakkımızda</a>
                                    </li>
                                    <li>
                                        <a href="#" title="">AdreseUsta nasıl çalışır?</a>
                                    </li>
                                    <li>
                                        <a href="#" title="">Neden AdreseUsta?</a>
                                    </li>
                                </ul>
                                <span>Adres adres.</span>
                                <span>+90 0216 333 33 33</span>
                                <span>bilgi@adreseusta.com</span>
                                <div className="social">
                                    <a href="#" title=""><i className="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i className="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i className="fa fa-instagram"></i></a>
                                    <a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i className="fa fa-dribbble"></i></a>
                                    <a href="#" title=""><i className="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomline">
                <a href="#scrollup" className="scrollup" title=""><i className="fa fa-angle-up"></i></a>
                <span>© 2018 AdreseUsta</span>
            </div>
        </footer>
    );
}

export default Footer;