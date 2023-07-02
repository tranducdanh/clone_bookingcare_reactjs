import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {postVerifyBookAppointment} from  '../../services/userService'
import HomeHeader from '../HomePage/HomeHeader';

class VerifyEmail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            statusVerify: false,
            errCode: 0
        };
    }

    async componentDidMount() {
        if(this.props.location && this.props.location.search){
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookAppointment({
                token: token,
                doctorId: doctorId
            })
            if(res && res.errCode === 0){
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            }
    
            // console.log(token, doctorId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    render() {
        let 
        return (
            <>
            <HomeHeader/>
            <div>helo from verify email</div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
