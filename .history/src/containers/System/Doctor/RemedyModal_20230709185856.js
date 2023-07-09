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
        let { isOpenRemedyModal, closeRemedyModal, dataModal } =this.props;
        // console.log('check state: ', this.state);
        return (
            <div>
                <Modal
                    size='md'
                    centered
                    isOpen={isOpenRemedyModal}
                    className={'remedy-modal-container'}
                >
                    <div className='remedy-modal-content'>
                        <div className='remedy-modal-header'>
                            <span className='left'>
                                <FormattedMessage id='home-page.text-booking' />
                            </span>
                            <span onClick={closeRemedyModal} className='right'>
                                <i className='fas fa-times'></i>
                            </span>
                        </div>
                        <div className='remedy-modal-body'>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <div>
                                        <label>Email bệnh nhân</label>
                                        <input type="email" value={dataModal.email} className='form-control'/>
                                    
                                </div>
                                <div className='col-6 form-group'>
                                    <div className='form-control'>
                                        <label>Chọn file hóa đơn</label>
                                        <input type="file" />
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div className='remedy-modal-footer'>
                            <button
                                onClick={closeRemedyModal}
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
