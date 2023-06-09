import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
class ModalUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            address:''
        };
    }

    componentDidMount() {}

    toggle = () => {
        this.props.toggleUserModal();
    };

    handleOnChangeInput =(event, id)=>{

        let copyState = {...this.state}
        copyState
        console.log('event: ',event.target.value, id); 
    }

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
                    Create A New User
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='text'
                            onChange={(event)=>{this.handleOnChangeInput(event, 'email')}} />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password'
                            onChange={(event)=>{this.handleOnChangeInput(event, 'password')}} />
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='text'
                            onChange={(event)=>{this.handleOnChangeInput(event, 'firstName')}} />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text'
                            onChange={(event)=>{this.handleOnChangeInput(event, 'lastName')}} />
                        </div>
                        <div className='input-container max'>
                            <label>Address</label>
                            <input type='text'
                            onChange={(event)=>{this.handleOnChangeInput(event, 'address')}} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className='px-3'
                        color='primary'
                        onClick={() => {
                            this.toggle();
                        }}
                    >
                        Add new{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
