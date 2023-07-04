import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import {getDetailSpecialtyById} from '../../../services/userService'

class DetailSpecialty extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrDoctorId: [27, 28],
            dataDetailSpecialty: {}
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
                specialtyId : id,
                location: 'ALL'
            });
            if (res && res.errCode === 0) {
                this.setState({
                    dataDetailSpecialty: res.data,
                    
                });
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let { arrDoctorId } = this.state;
        return (
            <div className='detail-specialty-container'>
                <HomeHeader />
                <div className='description-specialty-main'>
                    <div className='description-specialty'>
                        Cơ Xương Khớp <br />
                        Bác sĩ Cơ Xương Khớp giỏi <br />
                        Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại
                        Việt Nam:
                        <br />
                        Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh
                        nghiệm
                        <br />
                        Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và
                        giảng dạy tại Đại học Y khoa Hà Nội
                        <br />
                        Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu
                        Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu
                        nghị Việt Đức,Bệnh Viện E.
                        <br />
                        Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như:
                        Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...
                        <br />
                        Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân
                        dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
                    </div>
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
