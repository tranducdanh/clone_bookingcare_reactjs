import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';

class OutstandingDoctor extends Component {
    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
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
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 1
                                </div>
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 2
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 3
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 4
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 5
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 6
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 7
                                </div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-outstanding-doctor' />
                                <div className='subs outstanding-doctor'>
                                    Phó Giáo sư, Tiến sĩ KimCheese 8
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
