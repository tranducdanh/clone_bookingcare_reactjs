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
                <div className='title'>
                    Manage users redux with ducdanh (learn Redux)
                </div>
                <div className='user-redux-body' >
                    <div className=''>
                        
                    </div>
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
