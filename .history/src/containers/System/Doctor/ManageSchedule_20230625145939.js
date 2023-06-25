import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageSchedule.scss';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from '../../../store/actions';
import { LANGUAGES, DATE_FORMAT } from '../../../utils';
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment';
import { toast } from 'react-toastify';
import _ from 'lodash';
import {bulkCreateSchedule} from '../../../services/userService'


class ManageSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            listDoctors: [],
            selectedDoctor: {},
            currentDate: '',
            rangeTime: [],
        };
    }

    componentDidMount() {
        this.props.fetchAllDoctors();
        this.props.fetchAllScheduleTime();
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object);
            });
        }
        return result;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            });
        }
        if (prevProps.allScheduleTimes !== this.props.allScheduleTimes) {
            let data = this.props.allScheduleTimes;
            if (data && data.length > 0) {
                // data.map(item =>{
                //     item.isSelected = false;
                //     return item;
                // })
                data = data.map((item) => ({ ...item, isSelected: false }));
            }

            this.setState({
                rangeTime: data,
            });
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            for (let i = 0; i < dataSelect.length; i++) {
                if (dataSelect[i].value === this.state.selectedDoctor.value) {
                    let label = dataSelect[i].label;
                    let value = dataSelect[i].value;
                    this.setState({
                        selectedDoctor: { label, value },
                    });
                    break;
                }
            }
            this.setState({
                listDoctors: dataSelect,
            });
        }
    }

    handleChange = async (selectedOption) => {
        this.setState({ selectedDoctor: selectedOption });
    };

    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0],
        });
    };

    handleOnClickBtnTime = (time) => {
        let { rangeTime } = this.state;
        if (rangeTime && rangeTime.length > 0) {
            rangeTime = rangeTime.map((item) => {
                if (item.id === time.id) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });

            this.setState({
                rangeTime: rangeTime,
            });
        }
    };

    handleSaveSchedule = async () => {
        let {rangeTime, selectedDoctor, currentDate} = this.state;
        let result = []
        
        if(selectedDoctor && _.isEmpty(selectedDoctor)){
            toast.error('Invalid selected doctor !');
            return
        }
        if(!currentDate){
            toast.error('Invalid selected date !');
            return
        }
        // let formattedDate = moment(currentDate).format(DATE_FORMAT.SEND_TO_SERVER);
        let d

        if(rangeTime && rangeTime.length > 0){
            let selectedTime = rangeTime.filter(item => item.isSelected === true)
            if(selectedTime && selectedTime.length > 0){
                selectedTime.map(timedetail =>{
                    let object ={}
                    object.doctorId = selectedDoctor.value
                    object.date = formattedDate
                    object.timeType = timedetail.keyMap
                    result.push(object)
                })
            }else{
                toast.error('Invalid selected time !');
                return
            }
        }
        let res = await bulkCreateSchedule({
            arrSchedule: result
        })
        console.log('check res: ', res );
    };

    render() {
        // console.log('danh checkk state: ', this.state);
        let { rangeTime } = this.state;
        let { language } = this.props;
        return (
            <div className='manage-schedule-container'>
                <div className='manage-schedule-title'>
                    <FormattedMessage id='manage-schedule.title' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <label>
                                <FormattedMessage id='manage-schedule.choose-dr' />
                            </label>
                            <Select
                                value={this.state.selectedDoctor}
                                onChange={this.handleChange}
                                options={this.state.listDoctors}
                            />
                        </div>
                        <div className='col-6'>
                            <label>
                                <FormattedMessage id='manage-schedule.choose-date' />
                            </label>
                            <DatePicker
                                onChange={this.handleOnChangeDatePicker}
                                className='form-control'
                                value={this.state.currentDate}
                                minDate={new Date()}
                            />
                        </div>
                        <div className='col-12 choose-hour-container'>
                            {rangeTime &&
                                rangeTime.length > 0 &&
                                rangeTime.map((item, index) => {
                                    return (
                                        <button
                                            onClick={() => {
                                                this.handleOnClickBtnTime(item);
                                            }}
                                            className={
                                                item.isSelected === true
                                                    ? 'btn-time active'
                                                    : 'btn-time'
                                            }
                                            key={index}
                                        >
                                            {language === LANGUAGES.VI
                                                ? item.valueVi
                                                : item.valueEn}
                                        </button>
                                    );
                                })}
                        </div>
                        <button
                            onClick={() => {
                                this.handleSaveSchedule();
                            }}
                            className='btn btn-primary mt-4'
                        >
                            <FormattedMessage id='manage-schedule.save' />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        allDoctors: state.admin.allDoctors,
        language: state.app.language,
        allScheduleTimes: state.admin.allScheduleTimes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
