import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import { getDetailSpecialtyById, getAllCodeService } from '../../../services/userService';
import _ from 'lodash';

class DetailSpecialty extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrDoctorId: [],
            dataDetailSpecialty: {},
            listProvince:[]
        };
    }

    async componentDidMount() {
        if (
            this.props.match &&
            this.props.match.params &&
            this.props.match.params.id
        ) {
            let id = this.props.match.params.id;
            let res = await getDetailSpecialtyById({
                id: id,
                location: 'ALL'
            });

            let resProvince = await getAllCodeService('PROVINCE')
            // console.log('danh check: ',res);
            if (res && res.errCode === 0 && resProvince && resProvince.errCode === 0) {
                let data = res.data
                let arrDoctorId=[]
                if(data && !_.isEmpty(data)){
                    let arr = data.doctorSpecialty
                    if(arr && arr.length > 0){
                        arr.map(item =>{
                            arrDoctorId.push(item.doctorId)
                        })
                        
                    }
                }
                this.setState({
                    dataDetailSpecialty: res.data,
                    arrDoctorId: arrDoctorId,
                    listProvince: resProvince.data
                });
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let { arrDoctorId, dataDetailSpecialty, listProvince } = this.state;
        let{language} = this.props
        return (
            <div className='detail-specialty-container'>
                <HomeHeader />
                <div className='description-specialty-main'>
                    <div className='description-specialty'>
                        {dataDetailSpecialty && !_.isEmpty(dataDetailSpecialty) && 
                        
                        <div dangerouslySetInnerHTML={{__html: dataDetailSpecialty.descriptionHTML}}></div>
                        }
                    </div>
                </div>
                <div className='search-doctor-location'>
                    <select className='select-location'>
                        {listProvince && listProvince.length > 0 && listProvince.map((item, index)=>{
                            return(
                                <option>{item.}</option>
                            )
                        })}
                        
                        
                    </select>
                </div>

                {arrDoctorId &&
                    arrDoctorId.length > 0 &&
                    arrDoctorId.map((item, index) => {
                        return (
                            <div key={index} className='each-doctor'>
                                <div className='content-left'>
                                    <div className='profile-doctor-specialty'>
                                        <ProfileDoctor
                                            doctorId={item}
                                            isShowDescriptionDoctor={true}
                                            // dataScheduleTimeModal={
                                            //     dataScheduleTimeModal
                                            // }
                                        />
                                    </div>
                                </div>
                                <div className='content-right'>
                                    <div className='content-right-up'>
                                        <DoctorSchedule detailDoctor={item} />
                                    </div>
                                    <div className='content-right-down'>
                                        <DoctorExtraInfor detailDoctor={item} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
