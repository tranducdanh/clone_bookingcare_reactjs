import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './RemedyModal.scss';
import { Modal } from 'reactstrap';
import { toast } from 'react-toastify';
import moment from 'moment';
import{CommonUtils} from '../../../utils'

class RemedyModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email:'',
            imgBase64:''
        };
    }

    componentDidMount() {
        if(this.props.dataModal){
            this.setState({
                email: this.props.dataModal.email
            }) 
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.dataModal !== this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    handleOnchangeEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imgBase64: base64,
            });
        }
    };

    handleSendRemedy = ()=>{
        console.log('me check: ', this.);
    }

    render() {
        let { isOpenRemedyModal, closeRemedyModal, dataModal, sendRemedy } = this.props;
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
                                <FormattedMessage id='home-page.remedy.title' />
                            </span>
                            <span onClick={closeRemedyModal} className='right'>
                                <i className='fas fa-times'></i>
                            </span>
                        </div>
                        <div className='remedy-modal-body'>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id='home-page.remedy.email' /></label>
                                    <input
                                        type='email'
                                        value={this.state.email}
                                        className='form-control'
                                        onChange={(event)=>{this.handleOnchangeEmail(event)}}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label><FormattedMessage id='home-page.remedy.file' /></label>
                                    <input
                                        type='file'
                                        className='form-control-file'
                                        onChange={(event)=>{this.handleOnchangeImage(event)}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='remedy-modal-footer'>
                            <button
                                onClick={closeRemedyModal}
                                className='btn btn-secondary'
                            >
                                <FormattedMessage id='home-page.remedy.cancel' />
                            </button>

                            <button
                                onClick={this.handleSendRemedy()}
                                className='btn btn-warning'
                            >
                                <FormattedMessage id='home-page.remedy.send' />
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
