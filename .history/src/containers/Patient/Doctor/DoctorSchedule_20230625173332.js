import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorSchedule.scss';


class DoctorSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        };
    }

    async componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        
        return (
           <div>
                doctor schedule
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
