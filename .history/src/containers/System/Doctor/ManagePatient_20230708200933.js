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
                    Quản lí bệnh nhân khám bệnh
                </div>
                <div className='manage-patient-content row'>
                    <div className='col-5 form-group'>
                        <label>Chọn ngày tháng</label>
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
                                <th>STT</th>
                                <th>Họ tên</th>
                                <th>Giới tính</th>
                                <th>Actions</th>
                                
                            </tr>
                            {dataPatient && dataPatient.length > 0 && dataPatient.map((item, index) => {
                                return(
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                    <td>Germany</td>
                            </tr>
                                )
                            })}
                            
                           
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
