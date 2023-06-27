import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorExtraInfor.scss';

import { LANGUAGES } from '../../../utils';

import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {
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
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='located'>ĐỊA CHỈ KHÁM</div>
                    <div>Bệnh viện Lão khoa Trung ương</div>
                    <div>Số 1A Phương Mai, Đống Đa, Hà Nội</div>
                </div>
                <div className='content-down'>
                    <div className='located'>GIÁ KHÁM:</div>
                    <div>Giá khám: 
Giá khám đã bao gồm phí đặt lịch hẹn trước (Giá niêm yết của phòng khám)
Giá khám cho người nước ngoài 30 USD</div>
                    <div></div>
                    <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
