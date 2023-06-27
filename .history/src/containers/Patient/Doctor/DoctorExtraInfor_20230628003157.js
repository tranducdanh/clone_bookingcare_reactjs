import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorExtraInfor.scss';

import { getExtraInforDoctorById } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';

class DoctorExtraInfor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowDetailInfor: false,
            extraInfor: {},
        };
    }

    componentDidMount() {}

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.detailDoctor !== this.props.detailDoctor) {
            let res = await getExtraInforDoctorById(this.props.detailDoctor);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data,
                });
            }
        }
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status,
        });
    };

    render() {
        let { isShowDetailInfor, extraInfor } = this.state;
        let { language } = this.props;

        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'><FormattedMessage id='home-page.address-clinic'/></div>
                    <div className='name-clinic'>
                        {extraInfor && extraInfor.nameClinic
                            ? extraInfor.nameClinic
                            : ''}
                    </div>
                    <div className='detail-clinic'>
                        {extraInfor && extraInfor.addressClinic
                            ? extraInfor.addressClinic
                            : ''}
                    </div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false && (
                        <div>
                            <span className='text'><FormattedMessage id='home-page.price'/>:</span>{' '}
                            {extraInfor &&
                                extraInfor.priceTypeData &&
                                language === LANGUAGES.VI && (
                                    <NumberFormat
                                        className='format-price'
                                        value={extraInfor.priceTypeData.valueVi}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={'đ'}
                                    />
                                )}
                            {extraInfor &&
                                extraInfor.priceTypeData &&
                                language === LANGUAGES.EN && (
                                    <NumberFormat
                                        className='format-price'
                                        value={extraInfor.priceTypeData.valueEn}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                )}
                            <span
                                className='show'
                                onClick={() => {
                                    this.showHideDetailInfor(true);
                                }}
                            >
                                <FormattedMessage id='home-page.more-detail'/>
                            </span>
                        </div>
                    )}

                    {isShowDetailInfor === true && (
                        <div className='main'>
                            <div className='text'><FormattedMessage id='home-page.price'/>:</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                        <FormattedMessage id='home-page.price'/>
                                            <small>
                                            {extraInfor && extraInfor.note
                            ? extraInfor.note
                            : ''}
                                            </small>
                                        </td>
                                        <td className='price'>
                                            {extraInfor &&
                                                extraInfor.priceTypeData &&
                                                language === LANGUAGES.VI && (
                                                    <NumberFormat
                                                        className='format-price'
                                                        value={
                                                            extraInfor
                                                                .priceTypeData
                                                                .valueVi
                                                        }
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        suffix={'đ'}
                                                    />
                                                )}
                                            {extraInfor &&
                                                extraInfor.priceTypeData &&
                                                language === LANGUAGES.EN && (
                                                    <NumberFormat
                                                        className='format-price'
                                                        value={
                                                            extraInfor
                                                                .priceTypeData
                                                                .valueEn
                                                        }
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        prefix={'$'}
                                                    />
                                                )}
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2} className='note'>
                                        <FormattedMessage id='home-page.pay'/>
                                            {extraInfor && extraInfor.paymentTypeData
                            ? extraInfor.paymentTypeData.valueVi
                            : ''}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>

                            {/* <div>Giá khám: 300.000<sup>đ</sup> <br/>
                        Giá khám đã bao gồm phí đặt lịch hẹn trước (Giá niêm yết của phòng khám) <br/>
                        Giá khám cho người nước ngoài 30 USD</div>
                            <div>Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ</div> */}
                            <div className='hide-main'>
                                <span
                                    className='hide'
                                    onClick={() => {
                                        this.showHideDetailInfor(false);
                                    }}
                                >
                                    Thu gọn
                                </span>
                            </div>
                        </div>
                    )}
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
