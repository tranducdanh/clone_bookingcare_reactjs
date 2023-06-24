import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import { Redirect } from 'react-router';

class OutstandingDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrDoctors: [],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctors !== this.props.topDoctors) {
            this.setState({
                arrDoctors: this.props.topDoctors,
            });
        }
    }

    componentDidMount() {
        this.props.loadTopDoctors();
    }
    handleViewDetailDoctor = (doctor)=>{
        console.log('check doctor: ', doctor);
        return <Redirect to='' push={true}/>
    }
    render() {
        let arrDoctors = this.state.arrDoctors;

        // console.log('check: ', arrDoctors);

        let { language } = this.props;

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id='home-page.outstanding-doctor' />
                        </span>
                        <button className='btn-section'>
                            <FormattedMessage id='home-page.more' />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {arrDoctors &&
                                arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(
                                            item.image,
                                            'base64'
                                        ).toString('binary');
                                    }
                                    let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                    let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                    return (
                                        <div className='section-custom section-outstanding-doctor'>
                                            <div onClick={()=>{this.handleViewDetailDoctor(item)}} key={index} className='space'>
                                                <div className='outer-bg'>
                                                    <div
                                                        className='bg-img section-outstanding-doctor'
                                                        style={{
                                                            backgroundImage: `url(${imageBase64})`,
                                                        }}
                                                    />
                                                </div>
                                                <div className='position text-center'>
                                                    <div className='subs'>
                                                        {language ===
                                                        LANGUAGES.VI
                                                            ? nameVi
                                                            : nameEn}
                                                    </div>
                                                    <div className='sub'>
                                                        Cơ Xương Khớp 1
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctors: state.admin.topDoctors,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
