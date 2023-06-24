import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageSchedule.scss'
import { FormattedMessage } from 'react-intl';


class ManageSchedule extends Component {
    render() {
         
        return (
            <div className='manage-schedule-container'> 
                <div className='manage-schedule-title'>
                    <FormattedMessage id='manage-schedule.title'/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <label></label>
                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
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
