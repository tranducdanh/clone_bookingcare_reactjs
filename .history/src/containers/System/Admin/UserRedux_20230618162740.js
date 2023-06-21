import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils/constant';
import './UserRedux.scss';

import * as actions from '../../../store/actions';

class UserRedux extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',

            email:'',
            password:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            address:'',
            gender: '',
            position: '',
            role: '',
            avatar:''
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
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
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux,
            });
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux,
            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux,
            });
        }
    }

    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
            });
        }

        // console.log(data);
        // console.log('check file: ',file);
        // console.log('check file: ',objectUrl);
    };

    handleSaveUser = ()=>{

    }

    onChangeInput = ()=>{
            // email:'',
            // password:'',
            // firstName:'',
            // lastName:'',
            // phoneNumber:'',
            // address:'',
            // gender: '',
            // position: '',
            // role: '',
            // avatar:''
    }
    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let languages = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        // console.log('check state: ', this.state);
        // console.log('chi: ',this.props.genderRedux);

        let {email, password, firstName, lastName, phoneNumber, address, gender, position, } = this.state;

        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Manage users redux with ducdanh (learn Redux)
                </div>

                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div
                                className={
                                    isLoadingGender === true
                                        ? 'my-3 loading-spinner'
                                        : ''
                                }
                            ></div>
                            <div className='col-12 my-3 '>
                                <FormattedMessage id='manage-user.add' />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.email' />
                                </label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.password' />
                                </label>
                                <input
                                    className='form-control'
                                    type='password'
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.first-name' />
                                </label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.last-name' />
                                </label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.phonenumber' />
                                </label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-9'>
                                <label>
                                    <FormattedMessage id='manage-user.address' />
                                </label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.gender' />
                                </label>
                                <select className='form-control'>
                                    {genders &&
                                        genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {languages === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.position' />
                                </label>
                                <select className='form-control'>
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {languages === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.role' />
                                </label>
                                <select className='form-control'>
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {languages === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.image' />
                                </label>
                                <div className='preview-img-container'>
                                    <input
                                        id='previewImg'
                                        type='file'
                                        hidden
                                        onChange={(event) => {
                                            this.handleOnchangeImage(event);
                                        }}
                                    />
                                    <label
                                        className='label-upload'
                                        htmlFor='previewImg'
                                    >
                                        Upload <i class='fas fa-upload'></i>
                                    </label>
                                    <div
                                        className='preview-image'
                                        style={{
                                            backgroundImage: `url(${this.state.previewImgURL})`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <button onClick={()=>{this.handleSaveUser()}} className='btn btn-primary'>
                                    <FormattedMessage id='manage-user.save' />
                                </button>
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
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
