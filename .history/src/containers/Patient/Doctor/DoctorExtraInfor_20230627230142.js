import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorExtraInfor.scss';

import {getExtraInforDoctorById}

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

    showHideDetailInfor = (status)=>{
        this.setState({
            isShowDetailInfor: status
        })
    }

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
                        GIÁ KHÁM: 300.000đ. <span className='show' onClick={()=>{this.showHideDetailInfor(true)}}>Xem chi tiết</span>
                    </div>}

                    {isShowDetailInfor === true &&
                    
                    <div className='main'>
                        <div className='text'>GIÁ KHÁM:</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Giá khám
                                        <small>Giá khám đã bao gồm phí đặt lịch hẹn trước (Giá niêm yết của phòng khám) <br/>
                                            Giá khám cho người nước ngoài 30 USD
                                        </small>
                                    </td>
                                    <td className='price'>
                                        300.000<sup>đ</sup>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={2} className='note'>Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ</td>
                                </tr>
                            </tfoot>
                        </table>

                            {/* <div>Giá khám: 300.000<sup>đ</sup> <br/>
                        Giá khám đã bao gồm phí đặt lịch hẹn trước (Giá niêm yết của phòng khám) <br/>
                        Giá khám cho người nước ngoài 30 USD</div>
                            <div>Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ</div> */}
                        <div className='hide-main'>
                            <span className='hide' onClick={()=>{this.showHideDetailInfor(false)}}>Thu gọn</span>
                        </div>
                    </div>
                    
                    
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
