import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss'
import {getDetailDoctor} from '../../../services/userService'
class DetailDoctor extends Component {
    constructor(props, context) {
        super(props, context)
        this.state ={
            detailDoctor:{}
        }
    }

    async componentDidMount(){
        if(this.props.match && this.props.match.params && this.props.match.params.id){
            let id = this.props.match.params.id
            let res = await getDetailDoctor(id)
            if(res&&res.errCode === 0){
                this.setState({
                    detailDoctor: res.data
                })
            }            
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }
    
    render() {
        let { detailDoctor} = this.state
        let nameVi, nameEn =''
        if(detailDoctor&&detailDoctor.positionData) {
            let nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
            let nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
        } 
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={false}/>
                <div className='doctor-detail-container'>
                    <div className='doctor-intro'>
                        <div className='doctor-img'>
                            <div className='image' style={{
                                            backgroundImage: `url(${detailDoctor&&detailDoctor.image?detailDoctor.image:''})`,
                                        }}></div>
                        </div>
                        <div className='doctor-detail'>
                            <div className='doctor-position'>
                                Giáo sư, Hà Văn Quyết
                            </div>
                            <div className='doctor-desc'>
                                {detailDoctor&&detailDoctor.Markdown&&detailDoctor.Markdown.description&&
                                <span>
                                    {detailDoctor.Markdown.description}
                                </span>}
                                
                            </div>
                            <div className='plugin-fb'>
                                {/* coming soon */}
                            </div>
                        </div>
                    </div>
                    <div className='doctor-schedule'>
                        {/* coming soon */}
                    </div>
                    <div className='doctor-detail-info'>

                    </div>
                    <div className='doctor-comment'>
                        {/* coming soon */}
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
