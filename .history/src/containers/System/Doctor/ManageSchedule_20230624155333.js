import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageSchedule.scss'
import {F}


class ManageSchedule extends Component {
    render() {
         
        return (
            <div className='manage-schedule-container'> 
                <div className='manage-schedule-title'>

                </div>
            </div> 
        
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
