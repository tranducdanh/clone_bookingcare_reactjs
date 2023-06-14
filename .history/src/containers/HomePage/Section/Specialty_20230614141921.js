import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FormattedMessage } from 'react-intl';

import specialtyImg from '../../../assets/specialty/co-xuong-khop.jpg'

class Specialty extends Component {
    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <Slider {...settings}>
                        <div className='specialty-body'>
                            <img src={specialtyImg} alt="" />
                            <h6>Cơ Xương Khớp 1</h6>
                        </div>
                        <div className='img-custom'>
                        <img src={specialtyImg} alt="" />
                            <h6>Cơ Xương Khớp 1</h6>
                        </div>
                        <div className='img-custom'>
                        <img src={specialtyImg} alt="" />
                            <h6>Cơ Xương Khớp 1</h6>
                        </div>
                        <div className='img-custom'>
                        <img src={specialtyImg} alt="" />
                            <h6>Cơ Xương Khớp 1</h6>
                        </div>
                        <div className='img-custom'>
                            <h3>5</h3>
                        </div>
                        <div className='img-custom'>
                            <h3>6</h3>
                        </div>
                        <div className='img-custom'>
                            <h3>7</h3>
                        </div>
                        <div className='img-custom'>
                            <h3>8</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
