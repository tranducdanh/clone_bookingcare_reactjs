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
                    <divclassName='located'>GIÁ KHÁM:</divclassName=>
                    <div></div>
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
