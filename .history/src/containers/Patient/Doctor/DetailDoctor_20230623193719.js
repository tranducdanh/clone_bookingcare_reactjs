import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
class DetailDoctor extends Component {
    render() {
        console.log(this.props.match.params.id);    
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={true}/>
                <div>detail doctor</div>
            </React.Fragment>
            
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
