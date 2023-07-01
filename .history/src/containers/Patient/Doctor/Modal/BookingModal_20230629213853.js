import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss';
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash';

class BookingModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let {isOpenModalBooking, closeBookingModal, dataScheduleTimeModal} = this.props;
        let doctorId =''
        if(dataScheduleTimeModal && !_.isEmpty(dataScheduleTimeModal)){
            doctorId = dataScheduleTimeModal.doctorId
        }
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
                            <span className='left'><FormattedMessage id='home-page.text-booking'/></span>
                            <span onClick={closeBookingModal} className='right'><i className="fas fa-times"></i></span>
                        </div>
                        <div className='booking-modal-body'>
                            {/* {JSON.stringify(dataScheduleTimeModal)} */}
                            <div className='doctor-infor-modal'>
                                <ProfileDoctor doctorId={doctorId}/>
                            </div>
                            
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>Họ tên</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Số điện thoại</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>Email</label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id='home-page.address'/></label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-12 form-group'>
                                    <label><FormattedMessage id='home-page.reason'/></label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id='home-page.who'/></label>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id='home-page.gender'/></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className='booking-modal-footer'>
                            <button onClick={closeBookingModal} className='btn btn-secondary'><FormattedMessage id='home-page.cancel'/></button>
                            <button className='btn btn-warning'><FormattedMessage id='home-page.confirm'/></button>
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
