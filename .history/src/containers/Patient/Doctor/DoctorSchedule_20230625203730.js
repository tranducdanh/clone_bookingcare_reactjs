import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorSchedule.scss';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import {getScheduleByDate} from '../../../services/userService'

class DoctorSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            allDays: [],
        };
    }

    componentDidMount() {
        let { language } = this.props;        
        this.setArrDays(language)        
    }

    setArrDays = async (language)=>{
        let arrDays = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                object.label = moment(new Date())
                    .add(i, 'days')
                    .format('ddd - DD/MM');
            } else {
                object.label = moment(new Date())
                    .add(i, 'days')
                    .locale('en')
                    .format('ddd - DD/MM');
            }
            object.value = moment(new Date())
                .add(i, 'days')
                .startOf('day')
                .valueOf();

            arrDays.push(object);
        }
        // console.log('check array date: ', arrDate);

        let res = await getScheduleByDate(20, 1687798800000)
        console.log('check res: ', res);

        this.setState({
            arrDays: arrDays,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {
            this.setArrDays(this.props.language)
        }
    }

    render() {
        let { arrDays } = this.state;
        return (
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select onChange={()=>{}} className='select'>
                        {arrDays &&
                            arrDays.length > 0 &&
                            arrDays.map((item, index) => {
                                return (
                                    <option value={item.value} key={index}>
                                        {item.label}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className='all-time-available'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
