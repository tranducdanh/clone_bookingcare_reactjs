import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
// import './TableManageUser.scss';


class TableManageUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userRedux:[],

        };
    }


    componentDidMount (){
        this.props.fetchUsersRedux()
    }
    render() {
        console.log('check: ', this.props.listUsers);

        return (
            
                    <table id='customers'>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                       
                                    <tr >
                                        <td>email</td>
                                        <td>firstName</td>
                                        <td>lastName</td>
                                        <td>address</td>
                                        <td>
                                        <button
                                                
                                                className='btn-edit'
                                            >
                                                <i className='fas fa-pencil-alt'></i>
                                            </button>
                                            <button
                                                
                                                className='btn-delete'
                                            >
                                                <i className='fas fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                
                    </table>
               
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersRedux: ( ) => dispatch(actions.fetcAllUsersStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
