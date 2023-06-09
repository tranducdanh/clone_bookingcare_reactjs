import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrUsers: [],
        };
    }

    state = {};

    async componentDidMount() {
        let response = await getAllUsers('ALL');

        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <div className='user-container'>
                <div className='title text-center'>
                    Manage user with DucDanh
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
                        <tr>
                            {arrUsers &&
                                arrUsers.map((item, index) => {
                                    return (
                                        <div>
                                            <td>{item.email}</td>
                                            <td>Maria Anders</td>
                                            <td>Germany</td>
                                            <td>Germany</td>
                                            <td>Germany</td>
                                        </div>
                                    );
                                })}
                        </tr>
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
