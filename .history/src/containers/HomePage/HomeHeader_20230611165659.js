import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home

class HomeHeader extends Component {
    render() {
        

        return (
            <div className='home-header-container'>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
