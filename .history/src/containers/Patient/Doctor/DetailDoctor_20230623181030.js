import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';


class DetailDoctor extends Component {
    render() {
         
        
        return (
           <div>detail doctor</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
