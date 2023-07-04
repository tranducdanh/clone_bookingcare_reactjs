import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ManageClinic.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { CommonUtils } from '../../../utils';
import {createNewSpecialty} from '../../../services/userService'
import { toast } from 'react-toastify';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageClinic extends Component {
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

    handleSaveNewClinic = async ()=>{
        let res = await createNewSpecialty(this.state)
        if(res && res.errCode ===0){
            toast.success('Add new clinic succeed !!!')
            this.setState({
                name: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
            })
        }else{
            toast.error('Add new clinic failed !!!')
        }
        
    }

    render() {
        return (
            <div className='manage-clinic-container'>
                <div className='manage-clinic-title'>
                    <FormattedMessage id='menu.clinic.title-clinic' />
                </div>
                <div className='add-new-clinic row'>
                    <div className='col-6 form-group'>
                        <label>
                            <FormattedMessage id='menu.clinic.name-clinic' />
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
                            <FormattedMessage id='menu.clinic.img-clinic' />
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
                        <button onClick={()=>{this.handleSaveNewClinic()}} className='btn btn-warning'>
                            <FormattedMessage id='menu.clinic.save-clinic' />
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
