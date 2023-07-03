import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ManageSpecialty.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageSpecialty extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        return (
            <div className='manage-specialty-container'>
                <div className='manage-specialty-title'>
                    <FormattedMessage id='menu.specialty.'/>
                </div>
                <div className='add-new-specialty row'>
                    <div className='col-6 form-group'>
                        <label>Tên chuyên khoa</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6 form-group'>
                        <label>Ảnh chuyên khoa</label>
                        <input type='file' className='form-control-file' />
                    </div>
                    <div className='col-12 md'>
                        <MdEditor
                            style={{ height: '400px' }}
                            renderHTML={(text) => mdParser.render(text)}
                            // onChange={this.handleEditorChange}
                            // value={this.state.contentMarkdown}
                        />
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-warning'>Lưu</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
