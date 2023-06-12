import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUser } from '../../services/userService';
import ModalUser from './ModalUser';
class UserManage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        };
    }

    state = {};

    async componentDidMount() {
        await this.getAllUsersFromReact()
    }

    getAllUsersFromReact =async()=>{
        let response = await getAllUsers('ALL');

        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    }

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

    createNewUser =(data)=>{
        try {
            createNewUser(data)
        } catch (error) {
            console.log();
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <div className='user-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleUserModal={this.toggleUserModal}
                    createNewUser = {this.createNewUser}
                />
                <div className='title text-center'>
                    Manage user with DucDanh
                </div>
                <div className='mt-3 mx-5'>
                    <button
                        onClick={() => {
                            this.handleAddNewUser();
                        }}
                        className='btn btn-primary px-3'
                    >
                        <i className='fas fa-plus'></i>Add New Users
                    </button>
                </div>
                <div className='users-table mt-4 mx-5'>
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
                                            <button className='btn-edit'>
                                                <i className='fas fa-pencil-alt'></i>
                                            </button>
                                            <button className='btn-delete'>
                                                <i className='fas fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
