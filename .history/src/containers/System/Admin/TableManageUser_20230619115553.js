import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
} from '../../services/userService';
import { emitter } from '../../utils/emitter';

class TableManageUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {},
        };
    }

    state = {};

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');

        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    };

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        });
    };

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        });
    };
    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        });
    };

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage);
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false,
                });
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleDeleteUser = async (user) => {
        // console.log('user deleted', user);
        try {
            let response = await deleteUserService(user.id);
            // console.log(response);
            if (response && response.errCode === 0) {
                await this.getAllUsersFromReact();
            } else {
                alert(response.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleEditUser = (user) => {
        // console.log('checking user', user);
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
        });
    };

    editUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false,
                });
                await this.getAllUsersFromReact();
            } else {
                alert(res.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            
                    <table id='customers'>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    this.handleEditUser(item);
                                                }}
                                                className='btn-edit'
                                            >
                                                <i className='fas fa-pencil-alt'></i>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    this.handleDeleteUser(item);
                                                }}
                                                className='btn-delete'
                                            >
                                                <i className='fas fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
               
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
