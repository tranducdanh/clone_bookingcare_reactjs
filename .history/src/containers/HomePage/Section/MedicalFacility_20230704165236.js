import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import { getAllClinic } from '../../../services/userService';

class MedicalFacility extends Component {

    constructor(props, context) {
        super(props, context)
        this.state={
            dataClinics:[]
        }
    }

    async componentDidMount(){
        let res = await getAllClinic();
        if (res && res.errCode === 0) {
            this.setState({
                dataClinics: res.data ? res.data : [],
            });
        }
    }
    
    render() {
        let {dataClinics} = this.state
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
                            {dataClinics && dataClinics.length > 0 && dataClinics.map((item))}
                            <div className='section-custom'>
                                <div className='bg-img section-medical-facility' />
                                <div className='subs'>
                                    Bệnh viện Hữu nghị Việt Đức 1
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
