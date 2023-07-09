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
        let { isOpenRemedyModal, closeBookingModal, dataModal } =
            this.props;
        

        // console.log('check state: ', this.state);
        return (
            <div>
                <Modal
                    size='md'
                    centered
                    isOpen={true}
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
