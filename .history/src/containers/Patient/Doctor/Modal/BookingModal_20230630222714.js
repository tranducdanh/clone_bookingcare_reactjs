import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss';
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash';
import DatePicker from '../../../../components/Input/DatePicker';

class BookingModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reason: '',
            dayOfBirth: '',
            gender: '',
            doctorId: '',
            
        };
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}


    handleOnchangeInput = (event, id)=>{
        let valueInput = event.target.value

        let stateCopy ={...this.state}
        stateCopy[id] = valueInput
        this.setState({
            ...stateCopy
        })
    }

    handleOnChangeDatePicker = ()=>{}

    render() {
        let { isOpenModalBooking, closeBookingModal, dataScheduleTimeModal } =
            this.props;
        let doctorId = '';
        if (dataScheduleTimeModal && !_.isEmpty(dataScheduleTimeModal)) {
            doctorId = dataScheduleTimeModal.doctorId;
        }

        console.log('check state: ', this.state);
        return (
            <div>
                <Modal
                    size='lg'
                    centered
                    isOpen={isOpenModalBooking}
                    className={'booking-modal-container'}
                >
                    <div className='booking-modal-content'>
                        <div className='booking-modal-header'>
                            <span className='left'>
                                <FormattedMessage id='home-page.text-booking' />
                            </span>
                            <span onClick={closeBookingModal} className='right'>
                                <i className='fas fa-times'></i>
                            </span>
                        </div>
                        <div className='booking-modal-body'>
                            {/* {JSON.stringify(dataScheduleTimeModal)} */}
                            <div className='doctor-infor-modal'>
                                <ProfileDoctor
                                    doctorId={doctorId}
                                    isShowDescriptionDoctor={false}
                                    dataScheduleTimeModal={dataScheduleTimeModal}
                                />
                            </div>

                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.name' />
                                    </label>
                                    <input
                                        onChange={(event)=>{this.handleOnchangeInput(event,'fullName')}}
                                        value={this.state.fullName}
                                        type='text'
                                        className='form-control'
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.phonenumber' />
                                    </label>
                                    <input
                                        onChange={(event)=>{this.handleOnchangeInput(event,'phoneNumber')}}
                                        value={this.state.phoneNumber}
                                        type='text'
                                        className='form-control'
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.email' />
                                    </label>
                                    <input
                                        onChange={(event)=>{this.handleOnchangeInput(event,'email')}}
                                        value={this.state.email}
                                        type='text'
                                        className='form-control'
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.address' />
                                    </label>
                                    <input
                                        onChange={(event)=>{this.handleOnchangeInput(event,'address')}}
                                        value={this.state.address}
                                        type='text'
                                        className='form-control'
                                    />
                                </div>
                                <div className='col-12 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.reason' />
                                    </label>
                                    <input
                                        onChange={(event)=>{this.handleOnchangeInput(event,'reason')}}
                                        value={this.state.reason}
                                        type='text'
                                        className='form-control'
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.day-of-birth' />
                                    </label>
                                    <DatePicker
                                        onChange={this.handleOnChangeDatePicker}
                                        className='form-control'
                                        value={this.state.dayOfBirth}                                        
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.gender' />
                                    </label>
                                    <input
                                        onChange={(event)=>{this.handleOnchangeInput(event,'gender')}}
                                        value={this.state.gender}
                                        type='text'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='booking-modal-footer'>
                            <button
                                onClick={closeBookingModal}
                                className='btn btn-secondary'
                            >
                                <FormattedMessage id='home-page.cancel' />
                            </button>
                            <button className='btn btn-warning'>
                                <FormattedMessage id='home-page.confirm' />
                            </button>
                        </div>
                    </div>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
