import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorSchedule.scss';


class DoctorSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        };
    }

    async componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        
        return (
           <div className='doctor-schedule-container'>
                <div className='all-schedule'>

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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
