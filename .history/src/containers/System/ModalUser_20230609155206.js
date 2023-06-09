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

            >
                <ModalHeader
                    toggle={() => {
                        this.toggle();
                    }}
                >
                    Create A New User
                </ModalHeader>
                <ModalBody>
                    lorem ipsum dolor sit amet, consectetur adip incidid tempor
                    incidid tempor sit amet lorem ipsum dolor sit amet,
                    consectetur adip incidid tempor incidid tempor sit amet
                    lorem ipsum dolor sit amet, consectetur adip incidid tempor
                    incidid tempor sit amet
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
