import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './RemedyModal.scss';
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash';
import DatePicker from '../../../../components/Input/DatePicker';
import * as actions from '../../../../store/actions';
import { LANGUAGES } from '../../../../utils';
import Select from 'react-select';
import {postBookAppointment} from '../../../../services/userService'
import { toast } from 'react-toastify';
import moment from 'moment';

class RemedyModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reason: '',
            dayOfBirth: '',
            genders: '',
            doctorId: '',
            selectedGender: '',
            timeType: '',
        };
    }

    componentDidMount() {
        this.props.getGender();
    }

    buildDataGender = (data) => {
        let result = [];
        let { language } = this.props;

        if (data && data.length > 0) {
            data.map((item) => {
                let object = {};
                object.label =
                    language === LANGUAGES.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object);
            });
        }
        return result;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {
            this.setState({
                genders: this.buildDataGender(this.props.genders),
            });
        }
        if (prevProps.genders !== this.props.genders) {
            this.setState({
                genders: this.buildDataGender(this.props.genders),
            });
        }
        if(prevProps.dataScheduleTimeModal !== this.props.dataScheduleTimeModal) {
            if (this.props.dataScheduleTimeModal && !_.isEmpty(this.props.dataScheduleTimeModal)) {
                let doctorId = this.props.dataScheduleTimeModal.doctorId;
                let timeType = this.props.dataScheduleTimeModal.timeType;
                this.setState({
                    doctorId: doctorId,
                    timeType: timeType
                })
            }
        }
    }

    handleOnchangeInput = (event, id) => {
        let valueInput = event.target.value;

        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy,
        });
    };

    handleOnChangeDatePicker = (date) => {
        this.setState({
            dayOfBirth: date[0],
        });
    };
 
    handleChangeSelect = (selectedOption)=>{
        this.setState({
            selectedGender: selectedOption
        })
    }

    buildTimeBooking = (dataScheduleTimeModal)=>{
        let {language} = this.props

        if(dataScheduleTimeModal && !_.isEmpty(dataScheduleTimeModal)){
            let time = language ===LANGUAGES.VI? dataScheduleTimeModal.timeTypeData.valueVi: dataScheduleTimeModal.timeTypeData.valueEn
            let date = language ===LANGUAGES.VI? moment.unix(+dataScheduleTimeModal.date/1000).format('dddd - DD/MM/YYYY'):
            moment.unix(+dataScheduleTimeModal.date/1000).locale('en').format('dddd - MM/DD/YYYY')
            return `${time} - ${date}`
        }
        return ''
    }

    buildDoctorName =(dataScheduleTimeModal)=>{
        let {language} = this.props

        if(dataScheduleTimeModal && !_.isEmpty(dataScheduleTimeModal)){
            let name =language === LANGUAGES.VI 
            ? `${dataScheduleTimeModal.doctorData.lastName} ${dataScheduleTimeModal.doctorData.firstName}`
            :`${dataScheduleTimeModal.doctorData.firstName} ${dataScheduleTimeModal.doctorData.lastName}`

            return name
        }
        return ''
    }

    handleConfirmBooking = async ()=>{
        //validate input
        let timeString = this.buildTimeBooking(this.props.dataScheduleTimeModal)
        let doctorName = this.buildDoctorName(this.props.dataScheduleTimeModal)

        let date = new Date(this.state.dayOfBirth).getTime()    
        
        let res = await postBookAppointment({
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            reason: this.state.reason,
            date: this.props.dataScheduleTimeModal.date,
            dayOfBirth: date,
            doctorId: this.state.doctorId,
            selectedGender: this.state.selectedGender.value,
            timeType: this.state.timeType,
            language: this.props.language,
            timeString: timeString,
            doctorName: doctorName
        })
        if(res && res.errCode === 0){
            toast.success('Booking a new appointment succeed !');
            this.props.closeBookingModal()
        }else{
            toast.error('Booking a new appointment failed !');
        }
        // console.log('check confirm button click: ', this.state);
    }

    render() {
        let { isOpenModalBooking, closeBookingModal, dataScheduleTimeModal } =
            this.props;
        let doctorId = '';
        if (dataScheduleTimeModal && !_.isEmpty(dataScheduleTimeModal)) {
            doctorId = dataScheduleTimeModal.doctorId;
        }

        // console.log('check state: ', this.state);
        return (
            <div>
                <Modal
                    size='md'
                    centered
                    isOpen={isOpenModalBooking}
                    className={'booking-modal-container'}
                >
                    <div>helo world from remedy modal</div>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
