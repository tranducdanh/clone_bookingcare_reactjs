import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
// import './TableManageUser.scss';


import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}

class ManageDoctor extends Component {
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

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id);
    };

    handleEditUser = (user)=>{
        // console.log('chek user edit: ', user );
        this.props.handleEditUserFromParent(user)
    }
    render() {
        // console.log('check: ', this.props.listUsers);
        // console.log('check state: ', this.state);

        let arrUsers = this.state.usersRedux;
        return ( 
            <React.Fragment>
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
                                    <button 
                                    onClick={()=>{this.handleEditUser(item)}}
                                    className='btn-edit'>
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
            <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </React.Fragment>
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
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
