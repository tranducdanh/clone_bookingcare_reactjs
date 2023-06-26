import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './ManageDoctor.scss';
import { LANGUAGES, CRUD_ACTIONS } from '../../../utils';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import {getDetailDoctor} from '../../../services/userService'

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // save to markdown table
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listDoctors: [],
            hasOldData: false,

            // save to doctor_infor table
            listPrice: [],
            listPayment: [],
            listProvince: [],
            selectedPrice:'',
            selectedPayment:'',
            selectedProvince:'',

            nameClinic:'',
            addressClinic:'',
            note:'',

        };
    }

    componentDidMount() {
        this.props.fetchAllDoctors();
        this.props.getRequiredDoctorInfor()
    }

    buildDataInputSelect = (inputData, type) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = type ==='USERS'?`${item.lastName} ${item.firstName}`: item.valueVi;
                let labelEn = type ==='USERS'?`${item.firstName} ${item.lastName}`: item.valueEn;
                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object);
            });
        }
        return result;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors, 'USERS');
            this.setState({
                listDoctors: dataSelect,
            });
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
            for (let i = 0; i < dataSelect.length; i++) {
                if (dataSelect[i].value === this.state.selectedOption.value) {
                    let label = dataSelect[i].label;
                    let value = dataSelect[i].value;
                    this.setState({
                        selectedOption: { label, value },
                    });
                    break;
                }
            }
            this.setState({
                listDoctors: dataSelect,
            });
        }
        if(prevProps.allRequiredDoctorInfor !== this.props.allRequiredDoctorInfor){
            let {resPrice, resPayment, resProvince } = this.props.allRequiredDoctorInfor
            let dataSelectPrice = this.buildDataInputSelect(resPrice);
            let dataSelectPayment = this.buildDataInputSelect(resPayment);
            let dataSelectProvince = this.buildDataInputSelect(resProvince);

            console.log(dataSelectPrice,dataSelectPayment,dataSelectProvince);
            this.setState({
                listPrice: dataSelectPrice,
                listPayment: dataSelectPayment,
                listProvince: dataSelectProvince,
            })

        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        });
    };

    handleSaveContentMarkdown = () => {
        let {hasOldData} = this.state

        this.props.saveInfoDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT: CRUD_ACTIONS.CREATE
        });
    };
    handleChange = async (selectedOption) => {
        this.setState({ selectedOption });
        let res = await getDetailDoctor(selectedOption.value)
        if(res&&res.errCode===0&&res.data&&res.data.Markdown){
            let markdown = res.data.Markdown
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true
            })
        }else{
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false
            })
        }
        // console.log('danh check: ', res);
    };

    handleOnChangeDesc = (event) => {
        this.setState({
            description: event.target.value,
        });
    };

    render() {
        // console.log('check: ', this.state);
        // let listDoctors = this.state.listDoctors;
        let {hasOldData} = this.state
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'><FormattedMessage id='menu.doctor.create-info'/></div>
                <div className='more-info-doctor'>
                    <div className='content-left'>
                        <label><FormattedMessage id='menu.doctor.select-doctor'/> :</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                            placeholder={'Chọn bác sĩ'}
                        />
                    </div>
                    <div className='content-right form-group'>
                        <label><FormattedMessage id='menu.doctor.intro'/> :</label>
                        <textarea
                            value={this.state.description}
                            onChange={(event) => {
                                this.handleOnChangeDesc(event);
                            }}
                            className='form-control'
                            rows={3}
                        >
                            
                        </textarea>
                    </div>
                </div>
                <div className='more-info-doctor-extra row'>
                    <div className='col-4 form-group'>
                        <label>Chọn giá</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                            placeholder={'Chọn bác sĩ'}
                        />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Chọn phương thức thanh toán</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                            placeholder={'Chọn bác sĩ'}
                        />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Chọn tỉnh thành</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Tên phòng khám</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Địa chỉ phòng khám</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Ghi chú</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='manage-doctor-edit'>
                    <MdEditor
                        style={{ height: '300px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button
                    onClick={() => {
                        this.handleSaveContentMarkdown();
                    }}
                    className={hasOldData===true?'btn btn-warning mt-3':'btn btn-primary mt-3'}
                >
                    {hasOldData===true?<span><FormattedMessage id='menu.doctor.save-change'/></span>:<span><FormattedMessage id='menu.doctor.save'/></span>}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allDoctors: state.admin.allDoctors,
        language: state.app.language,
        allRequiredDoctorInfor: state.admin.allRequiredDoctorInfor
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        getRequiredDoctorInfor: () => dispatch(actions.getRequiredDoctorInfor()),
        saveInfoDoctor: (data) => dispatch(actions.saveInfoDoctor(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
