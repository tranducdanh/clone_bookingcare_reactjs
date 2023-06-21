import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from '../../../services/userService'
import {LANGUAGES} from '../../../utils/constant'

import * as actions from '../../../store/actions'


class UserRedux extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            genderArr: [],
        };
    }

    async componentDidMount() {
        this.props.getGenderStart()
        // try {
        //     let res = await getAllCodeService('gender')
        //     if(res && res.errCode === 0){
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     // console.log('check: ',res);
        // } catch (e) {
        //     console.log(e);
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.genderRedux !== this.props.genderRedux){
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
    }

    render() {

        let genders = this.state.genderArr
        let languages = this.props.language
        let isLoadingGender = this.props.isLoadingGender
        // console.log('chi: ',this.props.genderRedux);
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Manage users redux with ducdanh (learn Redux)
                </div>
                
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                        <div className='col-12'>{isLoadingGender===true?'Loading':''}</div>
                            <div className='col-12 my-3 '>
                                <FormattedMessage id='manage-user.add'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.email'/></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.password'/></label>
                                <input
                                    className='form-control'
                                    type='password'
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.first-name'/></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.last-name'/></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.phonenumber'/></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id='manage-user.address'/></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.gender'/></label>
                                <select className='form-control'>
                                    {genders && genders.length > 0 &&genders.map((item, index)=>{
                                         return(
                                            <option key={index}>{languages===LANGUAGES.VI?item.valueVi:item.valueEn}</option>
                                         )
                                    })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.position'/></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.role'/></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.image'/></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-12 mt-3'>
                            <button className='btn btn-primary'><FormattedMessage id='manage-user.save'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
