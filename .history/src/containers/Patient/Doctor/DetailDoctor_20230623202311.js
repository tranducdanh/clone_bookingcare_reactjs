import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss'
class DetailDoctor extends Component {
    render() {
        console.log(this.props.match.params.id);    
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={false}/>
                <div className='doctor-detail-container'>
                    <div className='doctor-intro'>
                        <div className='doctor'>

                        </div>
                    </div>
                    <div className='doctor-schedule'>

                    </div>
                    <div className='doctor-detail-info'>

                    </div>
                    <div className='doctor-comment'>

                    </div>
                </div>
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
