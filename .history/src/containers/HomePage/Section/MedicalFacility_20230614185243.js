import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import './HomePage.scss'
import MedicalFacility from './Section/MedicalFacility'

class Me extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Specialty/>
                <MedicalFacility />
                <div style={{height:'300px'}}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
