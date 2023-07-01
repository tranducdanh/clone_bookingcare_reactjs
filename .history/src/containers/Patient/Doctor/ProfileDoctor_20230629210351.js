import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ProfileDoctor.scss';
import { getProfileDoctorById } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';

class ProfileDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataProfile: {},
        };
    }

    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId);
        this.setState({
            dataProfile: data,
        });
    }

    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data;
            }
        }
        return result;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.doctorId !== this.props.doctorId) {
            // let data = this.getInforDoctor(this.props.doctorId)
            // this.setState({
            //     dataProfile: data
            // })
        }
    }

    render() {
        let { language } = this.props;
        let { dataProfile } = this.state;
        let nameVi = '';
        let nameEn = '';
        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName}`;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        return (
            <>
            <div className='doctor-intro-profile'>
                <div className='doctor-img-profile'>
                    <div
                        className='image-profile'
                        style={{
                            backgroundImage: `url(${
                                dataProfile && dataProfile.image
                                    ? dataProfile.image
                                    : ''
                            })`,
                        }}
                    ></div>
                </div>
                <div className='doctor-detail-profile'>
                    <div className='doctor-position-profile'>
                        {language === LANGUAGES.VI ? nameVi : nameEn}
                    </div>
                    <div className='doctor-desc-profile'>
                        {dataProfile &&
                            dataProfile.Markdown &&
                            dataProfile.Markdown.description && (
                                <span>{dataProfile.Markdown.description}</span>
                            )}
                    </div>
                </div>

            </div>
            <div className='price-modal'>
                {dataProfile && dataProfile.Doc}
            </div>
            </>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
