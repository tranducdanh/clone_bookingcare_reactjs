import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss'

class ManagePatient extends Component {
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
        return (
            <div className='manage-patient-container'>
                <div className='manage-patient-title'>
                    Quản lí bệnh nhân khám bệnh
                </div>
                <div className='manage-patient-content row'>
                    <div className='col-5 form-group'>
                        <label>Chọn ngày tháng</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <div className='col-12'>
                        <table style={}}>
                            <tr>
                                <th>Name</th>
                                <th colspan='2'>Phone</th>
                            </tr>
                            <tr>
                                <td>danh</td>
                                <td>1212122121</td>
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
