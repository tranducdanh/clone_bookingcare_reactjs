import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss'
class DetailDoctor extends Component {
    constructor(props, context) {
        super(props, context)
        this.state ={

        }
    }

    componentDidMount(){
        if(this.props.match && this.props.match.params && this.props.match.params)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }
    
    render() {
        console.log(this.props.match.params.id);    
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={false}/>
                <div className='doctor-detail-container'>
                    <div className='doctor-intro'>
                        <div className='doctor-img'>
                            <div className='image'>image</div>
                        </div>
                        <div className='doctor-detail'>
                            <div className='doctor-position'>
                                Giáo sư, Hà Văn Quyết
                            </div>
                            <div className='doctor-desc'>
                                Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh <br/>
                                Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris) <br/>
                                Bác sĩ nhận khám từ 16 tuổi trở lên
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
