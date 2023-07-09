import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss';
import DatePicker from '../../../components/Input/DatePicker';
import { getListPatientForDoctor, sendRemedy } from '../../../services/userService';
import moment from 'moment';
import { LANGUAGES } from '../../../utils';
import RemedyModal from './RemedyModal';
import { toast } from 'react-toastify';

class ManagePatient extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: [],
            isOpenRemedyModal: false,
            dataModal: {}
        };
    }

    async componentDidMount() {
        
        this.getDataPatient(user, formatedDate);
    }

    getDataPatient = async (user, formatedDate) => {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formatedDate = new Date(currentDate).getTime();
        
        let res = await getListPatientForDoctor({
            doctorId: user.id,
            date: formatedDate,
        });
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data,
            });
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {}

    handleOnChangeDatePicker = (date) => {
        this.setState(
            {
                currentDate: date[0],
            }, () => {
                let { user } = this.props;
                let { currentDate } = this.state;
                let formatedDate = new Date(currentDate).getTime();
                this.getDataPatient(user, formatedDate);
            }
        );
    };

    handleBtnConfirm = (item)=>{
        
        let data = {
            doctorId: item.doctorId,
            patientId: item.patientId,
            email: item.patientData.email,
            timeType: item.timeType
        }
        this.setState({
            isOpenRemedyModal: true,
            dataModal: data
        })
    }

    closeRemedyModal = () => {
        this.setState({
            isOpenRemedyModal: false,
        });
    };

    sendRemedy = async (dataFromChild)=>{
        let {dataModal} = this.state

        let res = await sendRemedy({
            email: dataFromChild.email,
            imgBase64: dataFromChild.imgBase64,
            doctorId: dataModal.doctorId,
            patientId: dataModal.patientId,
            timeType: dataModal.timeType,
        })
        if(res && res.errCode === 0){
            toast.success('Send remedy succeed !')
        }else{
            toast.error('Something wrong...')
            console.log('error sending: ', res);
        }
    }

    render() {
        // console.log('me check: ', this.state);
        let {dataPatient, isOpenRemedyModal, dataModal} =this.state;
        let {language} =this.props
        return (
            <>
            <RemedyModal
                isOpenRemedyModal={isOpenRemedyModal}
                dataModal={dataModal}
                closeRemedyModal={this.closeRemedyModal}
                sendRemedy={this.sendRemedy}
            />
            <div className='manage-patient-container'>
                <div className='manage-patient-title'>
                    <FormattedMessage id='menu.manage-patient.title' />
                </div>
                <div className='manage-patient-content row'>
                    <div className='col-5 form-group'>
                        <label><FormattedMessage id='menu.manage-patient.select-date' /></label>
                        <DatePicker
                            onChange={this.handleOnChangeDatePicker}
                            className='form-control'
                            value={this.state.currentDate}
                            minDate={new Date().setHours(0, 0, 0, 0)}
                        />
                    </div>
                    <div className='col-12 table-manage-patient'>
                        <table>
                            <tr>
                                <th><FormattedMessage id='menu.manage-patient.num' /></th>
                                <th><FormattedMessage id='menu.manage-patient.name' /></th>
                                <th><FormattedMessage id='menu.manage-patient.address' /></th>
                                <th><FormattedMessage id='menu.manage-patient.gender' /></th>
                                <th><FormattedMessage id='menu.manage-patient.time' /></th>
                                <th>Actions</th>
                                
                            </tr>
                            {dataPatient && dataPatient.length > 0 ? dataPatient.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.patientData.firstName}</td>
                                        <td>{item.patientData.address}</td>
                                        <td>{language === LANGUAGES.VI? item.patientData.genderData.valueVi :  item.patientData.genderData.valueEn}</td>
                                        <td>{language === LANGUAGES.VI?item.timeTypeDataPatient.valueVi: item.timeTypeDataPatient.valueEn}</td>
                                        <td>
                                            <button onClick={()=>{this.handleBtnConfirm(item)}} className='btn btn-info'><FormattedMessage id='menu.manage-patient.confirm' /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        :
                        <tr>
                            <td colSpan={6} className='text'>
                                <FormattedMessage id='menu.manage-patient.note' />
                            </td>
                        </tr>
                        }
                            
                           
                        </table>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        user: state.user.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
