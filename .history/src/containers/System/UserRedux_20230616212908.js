import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }
    
    

    componentDidMount() {
    }


    render() {
        return (
            <div className='user-redux-container'>
                <div className='user-redux-title'>
                    Manage users redux
                </div>
                <div className='user-redux-body' >
                    
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
