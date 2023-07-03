import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import {getAllSpecialty} from '../../../services/userService'

class Specialty extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            dataSpecialty:[]
        }
    }
    

    async componentDidMount(){
        let res = await getAllSpecialty()
        if(res && res.errCode === 0){
            this.setState({
                dataSpecialty: res
            })
        }
    }
    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            Chuyên khoa phổ biến
                        </span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-img section-specialty' />
                                <div className='subs'>Cơ Xương Khớp 1</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
