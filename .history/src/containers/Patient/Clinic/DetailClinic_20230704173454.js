import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DetailClinic.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import {
    getAllCodeService,
    getDetailClinicById,
} from '../../../services/userService';
import _ from 'lodash';
import { LANGUAGES } from '../../../utils';

class DetailClinic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrDoctorId: [],
            dataDetailClinic: {},
        };
    }

    async componentDidMount() {
        if (
            this.props.match &&
            this.props.match.params &&
            this.props.match.params.id
        ) {
            let id = this.props.match.params.id;
            let res = await getDetailClinicById({
                id: id,
            });

            if (res && res.errCode === 0) {
                let data = res.data;
                let arrDoctorId = [];
                if (data && !_.isEmpty(data)) {
                    let arr = data.doctorClinic;
                    if (arr && arr.length > 0) {
                        arr.map((item) => {
                            arrDoctorId.push(item.doctorId);
                        });
                    }
                }

                this.setState({
                    dataDetailClinic: res.data,
                    arrDoctorId: arrDoctorId,
                });
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let { arrDoctorId, dataDetailClinic } = this.state;
        let { language } = this.props;
        return (
            <div className='detail-clinic-container'>
                <HomeHeader />
                <div className='description-clinic-main'>
                    <div className='description-clinic'>
                        {dataDetailClinic && !_.isEmpty(dataDetailClinic) && 
                            <>
                            </>
                            
                        }
                    </div>
                </div>
                <div className='make-color-clinic'>
                    {arrDoctorId &&
                        arrDoctorId.length > 0 &&
                        arrDoctorId.map((item, index) => {
                            return (
                                <div key={index} className='each-doctor'>
                                    <div className='content-left'>
                                        <div className='profile-doctor-clinic'>
                                            <ProfileDoctor
                                                doctorId={item}
                                                isShowDescriptionDoctor={true}
                                                isShowLinkDetail={true}
                                                isShowPrice={false}
                                                // dataScheduleTimeModal={
                                                //     dataScheduleTimeModal
                                                // }
                                            />
                                        </div>
                                    </div>
                                    <div className='content-right'>
                                        <div className='content-right-up'>
                                            <DoctorSchedule
                                                detailDoctor={item}
                                            />
                                        </div>
                                        <div className='content-right-down'>
                                            <DoctorExtraInfor
                                                detailDoctor={item}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
