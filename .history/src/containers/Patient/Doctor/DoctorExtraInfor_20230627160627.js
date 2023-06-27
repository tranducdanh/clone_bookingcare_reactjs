import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorExtraInfor.scss';

import { LANGUAGES } from '../../../utils';

import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowDetailInfor: false
        };
    }

    componentDidMount() {
        
    }

    

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    showHide

    render() {
        let {isShowDetailInfor} = this.state
        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'>ĐỊA CHỈ KHÁM</div>
                    <div className='name-clinic'>Bệnh viện Lão khoa Trung ương</div>
                    <div className='detail-clinic'>Số 1A Phương Mai, Đống Đa, Hà Nội</div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false && 
                    <div>
                        GIÁ KHÁM: 300.000đ. Xem chi tiết
                    </div>}
                    {isShowDetailInfor === true &&
                    <>
                    <div className='text'>GIÁ KHÁM:</div>
                    <div>Giá khám: 300.000<sup>đ</sup> <br/>
                        Giá khám đã bao gồm phí đặt lịch hẹn trước (Giá niêm yết của phòng khám) <br/>
                        Giá khám cho người nước ngoài 30 USD</div>
                    <div>Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ</div>
                    <div>Ẩn bảng giá</div>
                    </>
                    }
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
