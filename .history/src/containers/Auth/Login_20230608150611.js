import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as actions from '../../store/actions';

import './Login.scss';
import { FormattedMessage } from 'react-intl';

import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        };
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    };
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };
    handleLogin = async () => {
        // console.log(
        //     'username: ',
        //     this.state.username,
        //     'password: ',
        //     this.state.password
        // );
        // console.log(this.state);

        this.setState({
            errMessage: '',
        });

        try {
            let data = await handleLoginApi(this.state.username, this.state.password).then(res)
        } catch (error) {
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage: error.response.data.message,
                    }); 
                }
            }
            
        }
    };

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        });
    };

    render() {
        return (
            <div className='login-backgroud'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>User Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your username...'
                                value={this.state.username}
                                onChange={(event) =>
                                    this.handleOnChangeUsername(event)
                                }
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input
                                    type={
                                        this.state.isShowPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    className='form-control'
                                    placeholder='Enter your password...'
                                    value={this.state.password}
                                    onChange={(event) =>
                                        this.handleOnChangePassword(event)
                                    }
                                />
                                <span
                                    onClick={() => {
                                        this.handleShowHidePassword();
                                    }}
                                >
                                    <i
                                        class={
                                            this.state.isShowPassword
                                                ? 'fas fa-eye'
                                                : 'fas fa-eye-slash'
                                        }
                                    ></i>
                                </span>
                            </div>
                        </div>

                        <div className='col-12' style={{ color: '#ee5253', fontSize:'11px' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 '>
                            <button
                                onClick={() => {
                                    this.handleLogin();
                                }}
                                className='btn-login'
                            >
                                Log in
                            </button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>
                                Forgot your password ?
                            </span>
                        </div>
                        <div className='col-12 text-center'>
                            <span>Or sign in with: </span>
                        </div>
                        <div className='col-12 social-login text-center'>
                            <i className='fab fa-google-plus'></i>
                            <i className='fab fa-facebook'></i>
                        </div>
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
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) =>
            dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
