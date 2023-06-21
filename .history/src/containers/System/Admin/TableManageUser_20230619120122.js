import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import './TableManageUser.scss';
import {
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
} from '../../../services/userService';
import { emitter } from '../../../utils/emitter';

class TableManageUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        };
    }

    render() {

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
