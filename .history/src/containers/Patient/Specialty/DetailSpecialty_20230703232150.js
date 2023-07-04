import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';

class DetailSpecialty extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrDoctorId: [27, 28],
        };
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let { arrDoctorId } = this.state;
        return (
            <div className='detail-specialty-container'>
                <HomeHeader />
                <div className='description-specialty'>
                    Cơ Xương Khớp Bác sĩ Cơ Xương Khớp giỏi Danh sách các bác sĩ
                    uy tín đầu ngành Cơ Xương Khớp tại Việt Nam: Các chuyên gia
                    có quá trình đào tạo bài bản, nhiều kinh nghiệm Các giáo sư,
                    phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại
                    học Y khoa Hà Nội Các bác sĩ đã, đang công tác tại các bệnh
                    viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh
                    viện Hữu nghị Việt Đức,Bệnh Viện E. Là thành viên hoặc lãnh
                    đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội
                    Thấp khớp học,... Được nhà nước công nhận các danh hiệu Thầy
                    thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
                </div>
                {arrDoctorId &&
                    arrDoctorId.length > 0 &&
                    arrDoctorId.map((item, index) => {
                        return (
                            <DoctorSchedule key={index} detailDoctor={item} />
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
