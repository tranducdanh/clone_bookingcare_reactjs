import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='container-about'>
                    <div className='section-about-header'>
                        Truyền thông nói về BookingCare
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe
                                width='570'
                                height='321'
                                src='https://www.youtube.com/embed/FyDQljKtWnI'
                                title='CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className='content-right'>
                            Nền tảng đặt lịch khám bệnh <br />
                            Kỉ niệm - gia đình - tình yêu - hiphop và những
                            thước phim <br />
                            Sống cho hết đời thanh xuân - là sự kết hợp một lần
                            nữa giữa BCTM và TNS - hãy cùng nâng niu và thưởng
                            thức âm nhạc theo một cách trải lòng nhất.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
