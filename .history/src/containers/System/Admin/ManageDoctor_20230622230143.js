import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './ManageDoctor.scss';
import { LANGUAGES } from '../../../utils';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';

import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description:'',
            listDoctors:[]
        };
    }

    componentDidMount() {
        this.props.fetchAllDoctors()
    }

    

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.allDoctors!== this.props.allDoctors){
            this.setState({
                listDoctors: this.props.allDoctors
            });
        }
    }

    buildDataInputSelect = (inputData)=>{
        let result = []
        let {language} = this.props
        if(inputData&&inputData.length>0){
            in
            let object ={}
            let labelVi =`${item.lastName} ${item.firstName}`
            object.label = language ===LANGUAGES.VI?``
        }

        return result;
    }

    handleEditorChange=({ html, text })=> {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        console.log('check state: ', this.state);
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    handleOnChangeDesc = (event)=>{
        this.setState({
            description: event.target.value
        })
    }

    render() {
        console.log('check: ',this.state);
        let listDoctors = this.state.listDoctors
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'>Tạo thông tin bác sĩ</div>
                <div className='more-info-doctor'>
                    <div className='content-left'>
                        <label>Chọn bác sĩ:</label>
                        <Select                            
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className='content-right form-group'>
                        <label>Thông tin giới thiệu:</label>
                        <textarea value={this.state.description} onChange={(event)=>{this.handleOnChangeDesc(event)}} className='form-control' rows={4}>
                            abc
                        </textarea>
                    </div>
                </div>
                <div className='manage-doctor-edit'>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                </div>
                <button
                    onClick={() => {
                        this.handleSaveContentMarkdown();
                    }}
                    className='btn btn-warning mt-3'
                >
                    Lưu thông tin
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allDoctors: state.admin.allDoctors,
        language:state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {        
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
