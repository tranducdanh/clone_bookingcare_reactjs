import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className='fas fa-bars'></i>
                            <img
                                className='header-logo'
                                src={logo}
                                alt='logo'
                            />
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id='home-header.specialty'/></b>
                                </div>
                                <div className='subs-title'>
                                <FormattedMessage id='home-header.search-doctor'/>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id='home-header.health-facility'/></b>
                                </div>
                                <div className='subs-title'>
                                <FormattedMessage id='home-header.select-room'/>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id='home-header.doctor'/></b>
                                </div>
                                <div className='subs-title'>
                                <FormattedMessage id='home-header.select-doctor'/>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id='home-header.fee'/></b>
                                </div>
                                <div className='subs-title'>
                                <FormattedMessage id='home-header.check-health'/>
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className='fas fa-question-circle'></i>
                                Hỗ trợ
                            </div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title-1'>NỀN TẢNG Y TẾ</div>
                        <div className='title-2'>
                            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
                        </div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input
                                type='text'
                                placeholder='Tìm chuyên khoa khám bệnh'
                            />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='far fa-hospital'></i>
                                </div>
                                <div className='text-child'>
                                    Khám Chuyên khoa
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-mobile-alt'></i>
                                </div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-stethoscope'></i>
                                </div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-capsules'></i>
                                </div>
                                <div className='text-child'>
                                    Xét nghiệm y học
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-user-md'></i>
                                </div>
                                <div className='text-child'>
                                    Sức khỏe tinh thần
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-briefcase-medical'></i>
                                </div>
                                <div className='text-child'>Khám nha khoa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
