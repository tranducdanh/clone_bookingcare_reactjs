import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils/constant';
import _ from 
// import { changeLanguageApp } from '../../store/actions';

class Header extends Component {

    componentDidMount(){
        let {userInfo} = this.props;

    }

    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    };
    render() {
        const { processLogout, language, userInfo } = this.props;

        return (
            <div className='header-container'>
                {/* thanh navigator */}
                <div className='header-tabs-container'>
                    <Navigator menus={adminMenu} />
                </div>

                <div className='languages'>
                    <span className='welcome'>
                        <FormattedMessage id='home-header.welcome' />,{' '}
                        {userInfo.firstName ? userInfo.firstName : ''} !!!
                    </span>
                    <span
                        title='Ngôn ngữ Việt Nam'
                        className={
                            language === LANGUAGES.VI
                                ? 'language-vi active'
                                : 'language-vi'
                        }
                        onClick={() => {
                            this.handleChangeLanguage(LANGUAGES.VI);
                        }}
                    >
                        VN
                    </span>
                    <span
                        title='English language'
                        className={
                            language === LANGUAGES.EN
                                ? 'language-en active'
                                : 'language-en'
                        }
                        onClick={() => {
                            this.handleChangeLanguage(LANGUAGES.EN);
                        }}
                    >
                        EN
                    </span>
                    {/* nút logout */}
                    <div
                        className='btn btn-logout'
                        onClick={processLogout}
                        title='log out'
                    >
                        <i className='fas fa-sign-out-alt'></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
