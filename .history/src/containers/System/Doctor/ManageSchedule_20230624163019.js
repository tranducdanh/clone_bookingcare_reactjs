import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageSchedule.scss'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';





class ManageSchedule extends Component {

    constructor(props, context) {
        super(props, context)
        this.state={

        }
    }
    
    componentDidMount(){
        this.props.fetchAllDoctors();
    }

    render() {
         
        return (
            <div className='manage-schedule-container'> 
                <div className='manage-schedule-title'>
                    <FormattedMessage id='manage-schedule.title'/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <label><FormattedMessage id='manage-schedule.choose-dr'/></label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='manage-schedule.choose-day'/></label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='col-12 choose-hour-container'>

                        </div>
                        <button className='btn btn-primary mt-4'>
                            <FormattedMessage id='manage-schedule.save'/>
                        </button>
                    </div>
                </div>
            </div> 
        
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        allDoctors: state.admin.allDoctors,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
