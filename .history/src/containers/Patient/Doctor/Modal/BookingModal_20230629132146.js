import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss';
import { Modal } from 'reactstrap';

class BookingModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let {isOpenModalBooking, closeBookingModal, dataScheduleTimeModal} = this.props;
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
                            <span className='left'>ĐẶT LỊCH KHÁM</span>
                            <span onClick={closeBookingModal} className='right'><i className="fas fa-times"></i></span>
                        </div>
                        <div className='booking-modal-body'>
                            {/* {JSON.stringify(dataScheduleTimeModal)} */}
                            <div className='doctor-infor-modal'>

                            </div>
                            <div className='price-modal'>
                                Giá khám: 500.000<sup
                            </div>

                        </div>
                        <div className='booking-modal-footer'>
                            <button className='btn btn-secondary'>Hủy</button>
                            <button className='btn btn-warning'>Xác nhận</button>
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
