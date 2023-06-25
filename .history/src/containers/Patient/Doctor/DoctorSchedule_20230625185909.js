import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorSchedule.scss';
import moment from 'moment';
import localization from 'moment/locale/vi'
import { LANGUAGES } from '../../../utils';

class DoctorSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            allDays: []
        };
    }

    async componentDidMount() {
        let {language} = this.props

        console.log('moment vi: ',moment(new Date()).format('ddd - DD/MM'));
        console.log('moment en: ',moment(new Date()).locale('en').format('ddd - DD/MM'));

        let arrDays =[]
        for (let i = 0; i <7 ;i++){
            let object ={}
            object.label = moment(new Date()).add(i, 'days').format('ddd - DD/MM')
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf()
        
            arrDays.push(object)
        }
        // console.log('check array date: ', arrDate);
        this.setState({
            arrDays: arrDays
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let { arrDays} =this.state
        return (
           <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select className='select'>
                        { arrDays && arrDays.length > 0 && arrDays.map((item, index) =>{
                            <option>Thứ 2</option>
                        })}
                        <option>Thứ 2</option>
                        
                    </select>
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
