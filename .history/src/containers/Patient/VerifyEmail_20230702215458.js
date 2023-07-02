import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class VerifyEmail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            
        };
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search);
        const token = this.state.token
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    render() {
        return (
            <div>helo from verify email</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
