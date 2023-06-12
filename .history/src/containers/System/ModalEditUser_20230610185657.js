import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import _ from 'lodash';

class ModalEditUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        };
    }

    componentDidMount() {
        // let {currentUser} = this.props;
        let user = this.props.currentUser;

        if(user && _.isEmpty(u))
        // console.log('edit : ', this.props.currentUser);
    }

    toggle = () => {
        this.props.toggleUserModal();
    };

    handleOnChangeInput = (event, id) => {
        //good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = [
            'email',
            'password',
            'firstName',
            'lastName',
            'address',
        ];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    };
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            // call api create modal
            this.props.createNewUser(this.state);
        }
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => {
                    this.toggle();
                }}
                className={'modal-user-container'}
                size='lg'
                // centered
            >
                <ModalHeader
                    toggle={() => {
                        this.toggle();
                    }}
                >
                    Edit A User
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, 'email');
                                }}
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, 'password');
                                }}
                                value={this.state.password}
                            />
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input
                                type='text'
                                onChange={(event) => {
                                    this.handleOnChangeInput(
                                        event,
                                        'firstName'
                                    );
                                }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, 'lastName');
                                }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container max'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, 'address');
                                }}
                                value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className='px-3'
                        color='primary'
                        onClick={() => {
                            this.handleAddNewUser();
                        }}
                    >
                        Save Change{' '}
                    </Button>
                    {''}
                    <Button
                        className='px-3'
                        color='secondary'
                        onClick={() => {
                            this.toggle();
                        }}
                    >
                        Close{' '}
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
