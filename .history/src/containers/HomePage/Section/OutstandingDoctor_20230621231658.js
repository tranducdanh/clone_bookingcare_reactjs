import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';


class OutstandingDoctor extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            arrDoctors: [],
        }
    }
    

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.topDoctors!== this.props.topDoctors){
            this.setState({
                arrDoctors: this.props.topDoctors
            })
        }
    }

    componentDidMount(){
        this.props.loadTopDoctors()
    }
    render() {
        let arrDoctors = this.state.arrDoctors
        arrDoctors = arrDoctors.concat(arrDoctors)
        console.log('check: ', arrDoctors);

        let {language} = this.props

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
                            
                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index)=>{
                                if (user.image) {
                                    imageBase64 = new Buffer(user.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.lastName} ${item.firstName} `;
                                return(
                                    <div key={index} className='section-custom section-outstanding-doctor'>
                                <div className='space'>
                                    <div className='outer-bg'>
                                        <div className='bg-img section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div className='subs'>
                                            {language === LANGUAGES.VI? nameVi: nameEn}
                                        </div>
                                        <div className='sub'>
                                            Cơ Xương Khớp 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                                )
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
        topDoctors: state.admin.topDoctors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
