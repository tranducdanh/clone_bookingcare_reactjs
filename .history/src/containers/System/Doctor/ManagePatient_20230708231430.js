import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss';
import DatePicker from '../../../components/Input/DatePicker';
import { getListPatientForDoctor } from '../../../services/userService';
import moment from 'moment';

class ManagePatient extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: [],
        };
    }

    async componentDidMount() {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formatedDate = new Date(currentDate).getTime();
        this.getDataPatient(user, formatedDate);
    }

    getDataPatient = async (user, formatedDate) => {
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

    render() {
        // console.log('me check: ', this.state);
        let {dataPatient} =this.state;
        return (
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
                                <th><FormattedMessage id='menu.manage-patient.num' /></th>
                                <th>Actions</th>
                                
                            </tr>
                            {dataPatient && dataPatient.length > 0 ? dataPatient.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.patientData.firstName}</td>
                                        <td>{item.patientData.address}</td>
                                        <td>{item.patientData.genderData.valueVi}</td>
                                        <td>{item.timeTypeDataPatient.valueVi}</td>
                                        <td>
                                            <button className='btn btn-warning'>Xác nhận</button>
                                            <button className='btn btn-info'>Gửi hóa đơn</button>
                                        </td>
                                    </tr>
                                )
                            })
                        :
                        <tr className='text'>
                            No data
                        </tr>
                        }
                            
                           
                        </table>
                    </div>
                </div>
            </div>
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
