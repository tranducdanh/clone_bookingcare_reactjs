import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageSchedule.scss'


class ManageSchedule extends Component {
    render() {
         
        return (
            <div className='m'> 
                
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