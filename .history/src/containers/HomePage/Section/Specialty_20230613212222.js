import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import { FormattedMessage } from 'react-intl';


class Specialty extends Component {
    
    render() {
       
        return (
            <div className='section-specialty'>
                <div className=''>

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
