import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
class ModalUser extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    lorem ipsum dolor sit amet, consectetur adip incidid tempor incidid tempor sit amet
                </ModalBody>
                <ModalFooter>
                    <Button color='primary'></Button>
                </ModalFooter>
            </Modal> 
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
