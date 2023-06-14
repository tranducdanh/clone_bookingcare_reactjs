import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import Slider from "react-slick";

import { FormattedMessage } from 'react-intl';


class Specialty extends Component {
    
    render() {
       
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
