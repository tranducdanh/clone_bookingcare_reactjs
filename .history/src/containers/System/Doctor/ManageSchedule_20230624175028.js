import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageSchedule.scss'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import DatePicker from '../../../components/Input/DatePicker'
import moment from 'moment';
import FormattedDate from '../../../components/Formating/FormattedDate'

class ManageSchedule extends Component {

    constructor(props, context) {
        super(props, context)
        this.state={
            listDoctors:[],
            selectedDoctor: {},
            currentDate:''
        }
    }
    
    componentDidMount(){
        this.props.fetchAllDoctors();
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object);
            });
        }
        return result;
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            });
        }
        // if (prevProps.language !== this.props.language) {
        //     let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
        //     for (let i = 0; i < dataSelect.length; i++) {
        //         if (dataSelect[i].value === this.state.selectedOption.value) {
        //             let label = dataSelect[i].label;
        //             let value = dataSelect[i].value;
        //             this.setState({
        //                 selectedOption: { label, value },
        //             });
        //             break;
        //         }
        //     }
        //     this.setState({
        //         listDoctors: dataSelect,
        //     });
        // }
    }

    handleChange = async (selectedOption) => {
        this.setState({ selectedDoctor: selectedOption });
        
    };

    handleOnChangeDatePicker = ()=>{
        
    }

    render() {
        console.log('danh checkk: ', this.state);
        return (
            <div className='manage-schedule-container'> 
                <div className='manage-schedule-title'>
                    <FormattedMessage id='manage-schedule.title'/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <label><FormattedMessage id='manage-schedule.choose-dr'/></label>
                            <Select
                                value={this.state.selectedDoctor}
                                onChange={this.handleChange}
                                options={this.state.listDoctors}
                            />
                        </div>
                        <div className='col-6'>
                            <label><FormattedMessage id='manage-schedule.choose-day'/></label>
                            <DatePicker onChange={this.handleOnChangeDatePicker} className='form-control'/>
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
