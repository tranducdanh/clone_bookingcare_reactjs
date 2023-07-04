import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';

class HandBook extends Component {
    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage/</span>
                        <button className='btn-section'>Tất cả bài viết</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs'>Cẩm nang 1</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs'>Cẩm nang 2</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs '>Cẩm nang 3</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs'>Cẩm nang 4</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs'>Cẩm nang 5</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs'>Cẩm nang 6</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs'>Cẩm nang 7</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-img section-handbook' />
                                <div className='subs'>Cẩm nang 8</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
