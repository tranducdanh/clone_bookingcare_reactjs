import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='container-about'>
                <div className='section-about-header'>
                    SỐNG CHO HẾT ĐỜI THANH XUÂN | Dick x Xám x Tuyết
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                    <iframe width="1520" height="545" src="https://www.youtube.com/embed/mmuBhumw4Nk?list=PL0GFAEqDfEU7m7NxePr9EaoAoBswG9dSb" title="SỐNG CHO HẾT ĐỜI THANH XUÂN | MUSIC VIDEO | Dick x Xám x Tuyết" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>

                    </div>
                </div>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
