import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ManageSpecialty.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { CommonUtils } from '../../../utils';


const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageSpecialty extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
        };
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}

    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionHTML: html,
            descriptionMarkdown: text,
        });
    };

    handleOnchangeInput = (event, id)=>{
        let stateCopy ={...this.state}
        stateCopy[id]= event.target.value
        this.setState({
            ...stateCopy,
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imageBase64: base64,
            });
        }        
    };

    render() {
        return (
            <div className='manage-specialty-container'>
                <div className='manage-specialty-title'>
                    <FormattedMessage id='menu.specialty.title-specialty' />
                </div>
                <div className='add-new-specialty row'>
                    <div className='col-6 form-group'>
                        <label>
                            <FormattedMessage id='menu.specialty.name-specialty' />
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.name}
                            onChange={(event) => {
                                this.handleOnchangeInput(event, 'name');
                            }}
                        />
                    </div>
                    <div className='col-6 form-group'>
                        <label>
                            <FormattedMessage id='menu.specialty.img-specialty' />
                        </label>
                        <input type='file' className='form-control-file' onChange={(event)=>{this.handleOnchangeImage(event)}}/>
                    </div>
                    <div className='col-12 md'>
                        <MdEditor
                            style={{ height: '400px' }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className='col-12'>
                        <button onClick={()=>{this.handleSaveNewSpecialty}} className='btn btn-warning'>
                            <FormattedMessage id='menu.specialty.save-specialty' />
                        </button>
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
