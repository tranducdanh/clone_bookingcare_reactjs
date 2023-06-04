import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    
    

    render() {
        return (
            <div className='login-backgroud'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group'>
                            <label>User Name</label>
                            <input type="text" className='form-control' placeholder='Enter user name...' />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Password</label>
                            <input type="password" className='form-control' placeholder='Enter your pass' />
                        </div>
                        <div className='col-12'>
                        <button>Login</button>
                        </div>
                        <div className='col-12'>
                            <span>Forgot your password?</span>
                        </div>
                        <div className='col-12'>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
