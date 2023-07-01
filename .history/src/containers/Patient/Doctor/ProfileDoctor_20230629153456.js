import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ProfileDoctor.scss'
import {getProfileDoctorById} from '../../../services/userService'

class ProfileDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataProfile:{}
        };
    }

    async componentDidMount() {
        let id = this.props.doctorId
        if(id){
            let res = await getProfileDoctorById(id)
            console.log('check profile: ',res);
        }
    }

    getInforDoctor = async (id)=>{
        let result = {}
        if(id){
            let res = await getProfileDoctorById(id)
            if(res && res.errCode)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    render() {
        return (
            <div>
                hello world from profile doctor
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
