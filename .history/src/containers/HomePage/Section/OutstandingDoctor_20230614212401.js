import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';

class OutstandingDoctor extends Component {
    render() {
        return (
            <div className='section-share section-outstanding-docotr'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            Bác sĩ nổi bật tuần qua
                        </span>
                        <button className='btn-section'>Tìm kiếm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 1
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 2
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 3
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 4
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 5
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 6
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 7
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 8
                                </div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
