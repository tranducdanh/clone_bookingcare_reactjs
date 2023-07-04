import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss'
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';


class DetailSpecialty extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrDoctorId:[27,28]
        };
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    render() {
        let {arrDoctorId} = this.state
        return (
            <div>
                <HomeHeader/>
                <div>helo world from detail specialty</div>
                {arrDoctorId && ar}
                <DoctorSchedule 
                // detailDoctor={this.state.currentDoctorId}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
