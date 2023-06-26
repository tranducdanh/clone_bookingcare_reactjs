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
        let { language } = this.props;        
        let allDays = this.getArrDays(language)
            this.setState({
                allDays: allDays,
            })   
    }

    getArrDays = (language)=>{
        let allDays = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                if(i === 0){
                    let ddMM = moment(new Date()).format('ddd - DD/MM');
                }
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

                allDays.push(object);
        }
        // console.log('check array date: ', arrDate);

        return allDays
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {
            let allDays = this.getArrDays(this.props.language)
            this.setState({
                allDays: allDays
            })   
        }
        if(prevProps.detailDoctor !== this.props.detailDoctor) {
            let allDays = this.getArrDays(this.props.language)
            let res = await getScheduleByDate(this.props.detailDoctor, allDays[0].value);
            this.setState({
                allAvailableTime: res.data ? res.data : []
            })
        }
    }

    handleOnChangeSelectTime = async (event)=>{
        if ( this.props.detailDoctor && this.props.detailDoctor !== -1) {  
            let doctorId = this.props.detailDoctor;
            let date = event.target.value

            let res = await getScheduleByDate(doctorId, date)

            if(res && res.errCode === 0){
                this.setState({
                    allAvailableTime: res.data? res.data:[]
                })
            }

            console.log('check res: ', res);
        }
        // console.log('event selected time: ', event.target.value);
    }

    render() {
        let { allDays , allAvailableTime} = this.state;
        let {language} =this.props
        return (
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select onChange={(event)=>{this.handleOnChangeSelectTime(event)}} className='select'>
                        {allDays &&
                            allDays.length > 0 &&
                            allDays.map((item, index) => {
                                return (
                                    <option value={item.value} key={index}>
                                        {item.label}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className='all-time-available'>
                    <div className='text-calendar'>
                        <span><i className="fas fa-calendar-alt"></i><FormattedMessage id='home-page.text-calendar'/></span>
                    </div>
                    <div className='time-available-content'>
                        {allAvailableTime && allAvailableTime.length > 0 ? allAvailableTime.map((item, index)=>{
                            let timeDisplay = language === LANGUAGES.VI ? item.timeTypeData.valueVi: item.timeTypeData.valueEn
                            return(
                                <button key={index} className='btn-available-time'>{timeDisplay}</button>
                            )
                        }): <div><FormattedMessage id='home-page.book-empty'/></div>}                      
                        
                    </div>
                    {allAvailableTime && allAvailableTime.length > 0 &&
                        <div className='text-instruction'>
                        <i className="far fa-hand-point-up"></i>
                        <FormattedMessage id='home-page.book'/> 
                    </div>
                    }
                    
                </div>
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
