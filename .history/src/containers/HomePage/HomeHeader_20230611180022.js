import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {
    render() {
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i class='fas fa-bars'></i>
                        <div className='header-logo'>
                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div>
                                <b>Chuyên khoa</b>
                            </div>
                            <div>TÌm bác sỹ theo chuyên khoa</div>
                        </div>
                        <div className='child-content'>
                            <div>
                                <b>Cơ sở y tế</b>
                            </div>
                            <div>Chọn bệnh viện phòng khám</div>
                        </div>
                        <div className='child-content'>
                            <div>
                                <b>Bác sỹ</b>
                            </div>
                            <div></div>
                        </div>
                        <div className='child-content'>
                            <div>
                                <b>Gói khám</b>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className='right-content'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
