import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ProfileDoctor.scss'
import {getProfileDoctorById} from '../../../services/userService'
import{LANGUAGES} from '../../../utils'

class ProfileDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataProfile:{}
        };
    }

    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId)
        this.setState({
            dataProfile: data
        })
    }
 
    getInforDoctor = async (id)=>{
        let result = {}
        if(id){
            let res = await getProfileDoctorById(id)
            if(res && res.errCode === 0 ){
                result = res.data
            }
        }
        return result
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.doctorId !== this.props.doctorId){
            // let data = this.getInforDoctor(this.props.doctorId)
            // this.setState({
            //     dataProfile: data
            // })
        }
    }

    render() {
        let {language} = this.props
        let {dataProfile} = this.state
        let nameVi = '';
        let nameEn = '';
        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName}`;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        return (
            <div className='doctor-intro'>
                        <div className='doctor-img'>
                            <div
                                className='image'
                                style={{
                                    backgroundImage: `url(${
                                        dataProfile && dataProfile.image
                                            ? dataProfile.image
                                            : ''
                                    })`,
                                }}
                            ></div>
                        </div>
                        <div className='doctor-detail'>
                            <div className='doctor-position'>
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className='doctor-desc'>
                                {dataProfile &&
                                    dataProfile.Markdown &&
                                    detailDoctor.Markdown.description && (
                                        <span>
                                            {detailDoctor.Markdown.description}
                                        </span>
                                    )}
                            </div>
                            
                        </div>
                    </div>
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
