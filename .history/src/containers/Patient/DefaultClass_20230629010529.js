import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorSchedule.scss';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import {getScheduleByDate} from '../../../services/userService'
import { FormattedMessage } from 'react-intl';

class DoctorSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            allDays: [],
            allAvailableTime: [],
        };
    }

    componentDidMount() {
          
    }

    

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    

    render() {
        
        return (
            <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
