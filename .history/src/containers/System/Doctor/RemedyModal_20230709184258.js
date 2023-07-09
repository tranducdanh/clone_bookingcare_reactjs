import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './RemedyModal.scss';
import { Modal } from 'reactstrap';
import { toast } from 'react-toastify';
import moment from 'moment';

class RemedyModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
           
        };
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    render() {
        let { isOpenRemedyModal, closeBookingModal, dataModal } =this.props;
        // console.log('check state: ', this.state);
        return (
            <div>
                <Modal
                    size='md'
                    centered
                    isOpen={isOpenRemedyModal}
                    className={'remedy-modal-container'}
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
                            

                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id='home-page.name' />
                                    </label>
                                    <input
                                        onChange={(event) => {
                                            this.handleOnchangeInput(
                                                event,
                                                'fullName'
                                            );
                                        }}
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
                                        onChange={(event) => {
                                            this.handleOnchangeInput(
                                                event,
                                                'phoneNumber'
                                            );
                                        }}
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
                                        onChange={(event) => {
                                            this.handleOnchangeInput(
                                                event,
                                                'email'
                                            );
                                        }}
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
                                        onChange={(event) => {
                                            this.handleOnchangeInput(
                                                event,
                                                'address'
                                            );
                                        }}
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
                                        onChange={(event) => {
                                            this.handleOnchangeInput(
                                                event,
                                                'reason'
                                            );
                                        }}
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
                                    <Select
                                        value={this.state.selectedGender}
                                        onChange={this.handleChangeSelect}
                                        options={this.state.genders}
                                    />
                                </div>
                                <div className='col-12 text-center text'>
                                    -- <FormattedMessage id='home-page.text-waring' /> --
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
                            <button onClick={()=>this.handleConfirmBooking()} className='btn btn-warning'>
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
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
