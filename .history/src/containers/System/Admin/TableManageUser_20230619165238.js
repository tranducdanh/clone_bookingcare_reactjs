import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
// import './TableManageUser.scss';

class TableManageUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            usersRedux: [],
        };
    }

    componentDidMount() {
        this.props.fetchUsersRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers,
            });
        }
    }
    render() {
        // console.log('check: ', this.props.listUsers);
        // console.log('check state: ', this.state);

        let arrUsers = this.state.usersRedux;
        return (
            <table id='customers'>
                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
                {arrUsers &&
                    arrUsers.length > 0 &&
                    arrUsers.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.address}</td>
                                <td>{item.phonenumber}</td>
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersRedux: () => dispatch(actions.fetcAllUsersStart()),
        deleteUser: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);