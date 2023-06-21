import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import './UserRedux.scss';

import * as actions from '../../../store/actions';
import TableManageUser from './TableManageUser';



class UserRedux extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',

            

            arrCheck: {
                email: 'Email',
                password: 'Mật khẩu',
                firstName: 'Tên',
                lastName: 'Họ',
                phoneNumber: 'Số điện thoại',
                address: 'Địa chỉ',
            },

            action:'',
            userEditId: ''
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
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender:
                    arrGenders && arrGenders.length > 0
                        ? arrGenders[0].key
                        : '',
            });
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position:
                    arrPositions && arrPositions.length > 0
                        ? arrPositions[0].key
                        : '',
            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
            });
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux;
            let arrPositions = this.props.positionRedux;
            let arrRoles = this.props.roleRedux;
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                
            });
        }
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {

            let base64 = await CommonUtils.getBase64(file)
            // console.log('check base64: ', base64);

            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64,
            });
        }
        // console.log(data);
        // console.log('check file: ',file);
        // console.log('check file: ',objectUrl);
    };

    handleSaveUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === false) return;
        // console.log(this.state);

        let {action} = this.state;
        if(action === CRUD_ACTIONS.CREATE){
            //fire actions redux create new user
            this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
            avatar: this.state.avatar
        });}
        if(action === CRUD_ACTIONS.EDIT){
            //fire actions redux edit user
            this.props.editUserRedux({ 
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                // avatar: this.state.avatar,
            })
        }

        this.props.fetchUsersRedux();
    };

    checkValidInput = () => {
        let isValid = true;
        if (this.props.language === LANGUAGES.EN) {
            this.setState({
                arrCheck: {
                    email: 'Email',
                    password: 'Password',
                    firstName: 'First name',
                    lastName: 'Last name',
                    phoneNumber: 'Phone number',
                    address: 'Address',
                },
            });
        } else {
            this.setState({
                arrCheck: {
                    email: 'Email',
                    password: 'Mật khẩu',
                    firstName: 'Tên',
                    lastName: 'Họ',
                    phoneNumber: 'Số điện thoại',
                    address: 'Địa chỉ',
                },
            });
        }
        // console.log('check state: ', this.state);
        for (let i = 0; i < Object.keys(this.state.arrCheck).length; i++) {
            let key = Object.keys(this.state.arrCheck)[i];
            // console.log('key: ', key);
            if (!this.state[key]) {
                isValid = false;
                if (this.props.language === LANGUAGES.EN) {
                    alert(
                        'This input is required: ' + this.state.arrCheck[key]
                    );
                } else {
                    alert(
                        'Ô dữ liệu cần phải nhập vào: ' +
                            this.state.arrCheck[key]
                    );
                }
                break;
            }
        }
        return isValid;
    };

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    };

    handleEditUserFromParent = (user)=>{
        let imageBase64 =''
        if(user.image){
            const imageBuffer =Buffer.from(JSON.stringify(user.image))
            imageBase64 =`data:image/jpeg` imageBuffer.toString('base64')
            
        }
        

        console.log('check user edit from parent: ', user);
        this.setState({
            email: user.email,
            password: 'HASHCODE',
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role:user.roleId,
            avatar: '',
            previewImgURL:'',
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id
        });
    }
    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let languages = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        // console.log('check state: ', this.state);
        // console.log('chi: ',this.props.genderRedux);

        let {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            gender,
            position,
            role,
            avatar,
        } = this.state;

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
                                <input
                                    className='form-control'
                                    type='email'
                                    value={email}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'email');
                                    }}
                                    disabled={this.state.action ===CRUD_ACTIONS.EDIT? true: false}
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.password' />
                                </label>
                                <input
                                    className='form-control'
                                    type='password'
                                    value={password}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'password');
                                    }}
                                    disabled={this.state.action ===CRUD_ACTIONS.EDIT? true: false}
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.first-name' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={firstName}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'firstName');
                                    }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.last-name' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={lastName}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'lastName');
                                    }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.phonenumber' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={phoneNumber}
                                    onChange={(event) => {
                                        this.onChangeInput(
                                            event,
                                            'phoneNumber'
                                        );
                                    }}
                                />
                            </div>
                            <div className='col-9'>
                                <label>
                                    <FormattedMessage id='manage-user.address' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={address}
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'address');
                                    }}
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.gender' />
                                </label>
                                <select
                                    className='form-control'
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'gender');
                                    }}
                                    value={gender}
                                >
                                    {genders &&
                                        genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
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
                                <select
                                    className='form-control'
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'position');
                                    }}
                                    value={position}
                                >
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
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
                                <select
                                    className='form-control'
                                    onChange={(event) => {
                                        this.onChangeInput(event, 'role');
                                    }}
                                    value={role}
                                >
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
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
                            <div className='col-12 mt-3 my-3'>
                                <button
                                    onClick={() => {
                                        this.handleSaveUser();
                                    }}
                                    className={this.state.action === CRUD_ACTIONS.EDIT?'btn btn-warning':'btn btn-primary' }
                                >
                                    {this.state.action === CRUD_ACTIONS.EDIT?<FormattedMessage id='manage-user.edit' />:<FormattedMessage id='manage-user.save' /> }
                                    
                                </button>
                            </div>
                            <div className='col-12 mb-5'>
                                <TableManageUser
                                    handleEditUserFromParent = {this.handleEditUserFromParent}
                                    action = {this.state.action}
                                />
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
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUsersRedux: () => dispatch(actions.fetcAllUsersStart()),
        editUserRedux: (data) => dispatch(actions.editUser(data))

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
