import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'

class OutstandingDoctor extends Component {

    constructor(props, context) {
        super(props, context)
        
    }
    

    componentDidMount(){
        this.props.loadTopDoctors()
    }
    render() {
        console.log('check: ', this.props.topDoctors);
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
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 1
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 2
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 2
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 3
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 4
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 5
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 6
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 6
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 7
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 7
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            Phó Giáo sư, Tiến sĩ KimCheese 8
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 8
                                        </div>
                                    </div>
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
        topDoctors: state.admin.topDoctors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
