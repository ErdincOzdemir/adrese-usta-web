import React from 'react';
import Electric from './images/electric.jpg';
import Gas from './images/gas.jpg';
import Paint from './images/paint.jpg';
import Tv from './images/tv.jpg';
import Water from './images/water.jpg';

function PopularServices() {

    return (
        <section>
            <div className="block gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <h2>Popüler Hizmetler</h2>
                                <span>Ne arıyorsun?</span>
                            </div>
                            <div className="catsec">
                                <div className="row" id="masonry">
                                    <div className="col-lg-4">
                                        <div className="category">
                                            <img src={Gas} alt=""/>
                                            <div className="cattitle">
                                                <h3><a href="#" title="">Doğalgaz Tesisatı</a></h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="category">
                                            <img src={Water} alt=""/>
                                            <div className="cattitle">
                                                <h3><a href="#" title="">Su Tesisatı</a></h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="category">
                                            <img src={Tv} alt=""/>
                                            <div className="cattitle">
                                                <h3><a href="#" title="">TV Tamiri ve Uydu</a></h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="category">
                                            <img src={Paint} alt=""/>
                                            <div className="cattitle">
                                                <h3><a href="#" title="">Boya - Badana - Alçı</a></h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="category">
                                            <img src={Electric} alt=""/>
                                            <div className="cattitle">
                                                <h3><a href="#" title="">Elektrik ve Aydınlatma</a></h3>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularServices;