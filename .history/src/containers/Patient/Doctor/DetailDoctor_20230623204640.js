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
                        <div className='doctor-img'>
                            <div className='abc'>abc</div>
                        </div>
                        <div className='doctor-desc'>
                            <div className='doctor-position'>
                                Giáo sư, Hà Văn Quyết
                            </div>
                            <div className='doctor-'>
                                Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh <br/>
                                Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris) <br/>
                                Bác sĩ nhận khám từ 16 tuổi trở lên
                            </div>
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
