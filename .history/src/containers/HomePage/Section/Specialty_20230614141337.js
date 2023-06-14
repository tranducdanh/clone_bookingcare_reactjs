import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FormattedMessage } from 'react-intl';

import {}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

class Specialty extends Component {
    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
        };

        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <Slider {...settings}>
                        <div className='img-custom'>
                            <img src="" alt="" />
                        </div>
                        <div className='img-custom'>
                            <h3>2</h3>
                        </div>
                        <div className='img-custom'>
                            <h3>3</h3>
                        </div>
                        <div className='img-custom'>
                            <h3>4</h3>
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
