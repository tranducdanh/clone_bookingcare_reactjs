import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FormattedMessage } from 'react-intl';


class Specialty extends Component {
    
    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
       
        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    specialty
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
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
