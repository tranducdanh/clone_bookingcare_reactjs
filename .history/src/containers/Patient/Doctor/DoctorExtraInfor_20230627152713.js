import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorExtraInfor.scss';

import { LANGUAGES } from '../../../utils';

import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        };
    }

    componentDidMount() {
        
    }

    

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    handleOnChangeSelectTime = async (event)=>{
        if ( this.props.detailDoctor && this.props.detailDoctor !== -1) {  
            let doctorId = this.props.detailDoctor;
            let date = event.target.value

            let res = await getScheduleByDate(doctorId, date)

            if(res && res.errCode === 0){
                this.setState({
                    allAvailableTime: res.data? res.data:[]
                })
            }

            console.log('check res: ', res);
        }
        // console.log('event selected time: ', event.target.value);
    }

    render() {
        
        return (
            <div></div>
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
