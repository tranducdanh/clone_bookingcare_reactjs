import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import * as actions from '../../store/actions';

import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
    handleLogin = () => {
        console.log(this.state.username);
        console.log(this.state.password);
    };

    render() {
        return (
            <div className='login-backgroud'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>User Name</label>
                            <div className='form-control'>
                            <input
                                type='text'
                                placeholder='Enter your username...'
                                value={this.state.username}
                                onChange={(event) =>
                                    this.handleOnChangeUsername(event)
                                }
                            />
                            <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='form-control'>
                            <input
                                type='password'
                                
                                placeholder='Enter your password...'
                                value={this.state.password}
                                onChange={(event) =>
                                    this.handleOnChangePassword(event)
                                }
                            />
                            <i class="fa-solid fa-eye-slash"></i>
                            </div>
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
