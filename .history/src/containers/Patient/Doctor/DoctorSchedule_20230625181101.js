import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorSchedule.scss';
import  Select from 'react-select';


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
        let options =[]
        return (
           <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <Select
                        // styles = {customStyles}
                        optionsoptions
                    />
                </div>
                <div className='all-time-available'>

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
