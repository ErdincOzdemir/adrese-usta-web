import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CommentsList extends Component {
    render() {
        const settings = {
            vertical: false,
            infinite: true,
            dots: false,
            beforeChange: function(currentSlide, nextSlide) {
                console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
                console.log("after change", currentSlide);
            }
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <p>Çok güzel oldu çok da güzel iyi oldu taam mı?</p>
                        <h3>Erdinç ÖZDEMİR</h3>
                        <span>İnsan</span>
                    </div>
                    <div>
                        <p>Çok güzel oldu çok da güzel iyi oldu taam mı?</p>
                        <h3>Erdinç ÖZDEMİR</h3>
                        <span>İnsan</span>
                    </div>
                    <div>
                        <p>Çok güzel oldu çok da güzel iyi oldu taam mı?</p>
                        <h3>Erdinç ÖZDEMİR</h3>
                        <span>İnsan</span>
                    </div>
                    <div>
                        <p>Çok güzel oldu çok da güzel iyi oldu taam mı?</p>
                        <h3>Erdinç ÖZDEMİR</h3>
                        <span>İnsan</span>
                    </div>
                    <div>
                        <p>Çok güzel oldu çok da güzel iyi oldu taam mı?</p>
                        <h3>Erdinç ÖZDEMİR</h3>
                        <span>İnsan</span>
                    </div>
                </Slider>
            </div>
        );
    }
}