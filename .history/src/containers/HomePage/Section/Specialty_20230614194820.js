import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FormattedMessage } from 'react-intl';

import specialtyImg from '../../../assets/specialty/co-xuong-khop.jpg';

class Specialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 4,
            slidesToScroll: 2,
        };

        return (
            <div className='section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            Chuyên khoa phổ biến
                        </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 1</div>
                            </div>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 2</div>
                            </div>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 3</div>
                            </div>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 4</div>
                            </div>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 5</div>
                            </div>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 6</div>
                            </div>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 7</div>
                            </div>
                            <div className='specialty-custom'>
                                <div className='bg-img' />
                                <div className='subs'>Cơ Xương Khớp 8</div>
                            </div>
                        </Slider>
                    </div>
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
