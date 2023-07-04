import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import 

class MedicalFacility extends Component {

    constructor(props, context) {
        super(props, context)
        this.state={
            dataClinics:[]
        }
    }

    async componentDidMount(){
        let res = await getAllSpecialty();
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : [],
            });
        }
    }
    
    render() {
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            Cơ sở y tế nổi bật
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
