import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
class ModalUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {}

    toggle = () => {
        this.props.toggleUserModal();
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => {
                    this.toggle();
                }}
                className={'className'}
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
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 form-group' >
                                <label>Email</label>
                                <input type="text" />
                            </div>
                            <div className='col-6 form-group' >
                                <label>Password</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color='primary'
                        onClick={() => {
                            this.toggle();
                        }}
                    >
                        Do something{' '}
                    </Button>
                    {''}
                    <Button
                        color='secondary'
                        onClick={() => {
                            this.toggle();
                        }}
                    >
                        Cancel{' '}
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
