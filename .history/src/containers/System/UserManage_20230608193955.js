import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserManage extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }
    

    state = {

    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="text-center">
                
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
