import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss';
import DatePicker from '../../../components/Input/DatePicker';
import {getListPatientForDoctor} from '../../../services/userService'
import moment from 'moment';

class ManagePatient extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: {}
        };
    }

    async componentDidMount() {
        let {user} = this.props;
        let {currentDate} = this.state
        
        let formatedDate = new Date(currentDate).getTime();

        
    }

    getDataPatient = ()=>{

    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0],
        });
    };

    render() {
        // console.log('me check: ', this.props.user);
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
                                minDate={new Date().setHours(0,0,0,0)}
                            />
                    </div>
                    <div className='col-12 table-manage-patient'>
                        <table>
                            <tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                                <th>Country</th>
                                <th>Country</th>
                                <th>Country</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Germany</td>
                                <td>Germany</td>
                                <td>Germany</td>
                            </tr>                          
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Germany</td>
                                <td>Germany</td>
                                <td>Germany</td>
                            </tr>                          
                                                    
                                                  
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
