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
            listSpecialty: [],
            listClinic: [],
            selectedPrice:'',
            selectedPayment:'',
            selectedProvince:'',
            selectedSpecialty:'',
            selectedClinic:'',

            nameClinic:'',
            addressClinic:'',
            note:'',
            specialtyId:'',
            clinicId:'',
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
            if(type ==='USERS'){
                inputData.map((item, index) => {
                    let object = {};
                    let labelVi = `${item.lastName} ${item.firstName}`;
                    let labelEn = `${item.firstName} ${item.lastName}`;
                    object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    object.value = item.id;
                    result.push(object);
                });
            }
            if(type === 'PRICE'){
                inputData.map((item, index) => {
                    let object = {};
                    let labelVi = `${item.valueVi} VND`;
                    let labelEn = `${item.valueEn} USD`;
                    object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    object.value = item.keyMap;
                    result.push(object);
                });
            }
            if(type === 'PAYMENT'||type === 'PROVINCE'){
                inputData.map((item, index) => {
                    let object = {};
                    let labelVi = `${item.valueVi}`;
                    let labelEn = `${item.valueEn}`;
                    object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    object.value = item.keyMap;
                    result.push(object);
                });
            }
            if(type === 'SPECIALTY'){
                inputData.map((item, index) => {
                    let object = {};
                    object.label = item.name;
                    object.value = item.id;
                    result.push(object);
                });
            }            
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
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors,'USERS');
            let {resPrice, resPayment, resProvince, resSpecialty } = this.props.allRequiredDoctorInfor
            let dataSelectPrice = this.buildDataInputSelect(resPrice, 'PRICE');
            let dataSelectPayment = this.buildDataInputSelect(resPayment,'PAYMENT');
            let dataSelectProvince = this.buildDataInputSelect(resProvince,'PROVINCE');
            let dataSelectSpecialty = this.buildDataInputSelect(resSpecialty,'SPECIALTY');

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
                listPrice: dataSelectPrice,
                listPayment: dataSelectPayment,
                listProvince: dataSelectProvince,
                listSpecialty: dataSelectSpecialty
            });
        }
        if(prevProps.allRequiredDoctorInfor !== this.props.allRequiredDoctorInfor){
            let {resPrice, resPayment, resProvince,resSpecialty } = this.props.allRequiredDoctorInfor
            let dataSelectPrice = this.buildDataInputSelect(resPrice, 'PRICE');
            let dataSelectPayment = this.buildDataInputSelect(resPayment,'PAYMENT');
            let dataSelectProvince = this.buildDataInputSelect(resProvince,'PROVINCE');
            let dataSelectSpecialty = this.buildDataInputSelect(resSpecialty,'SPECIALTY');


            // console.log(dataSelectPrice,dataSelectPayment,dataSelectProvince);
            this.setState({
                listPrice: dataSelectPrice,
                listPayment: dataSelectPayment,
                listProvince: dataSelectProvince,
                listSpecialty: dataSelectSpecialty,
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
            action: hasOldData === true ? CRUD_ACTIONS.EDIT: CRUD_ACTIONS.CREATE,

            selectedPrice:this.state.selectedPrice.value,
            selectedPayment:this.state.selectedPayment.value,
            selectedProvince:this.state.selectedProvince.value,
            nameClinic:this.state.nameClinic,
            addressClinic:this.state.addressClinic,
            note:this.state.note,
            clinicId: this.state.selectedClinic && this.state.selectedClinic.value ? this.state.selectedClinic.value :'',
            specialtyId: this.state.selectedSpecialty.value
        });
    };
    handleChange = async (selectedOption) => {
        this.setState({ selectedOption });
        let {listPayment, listPrice, listProvince, listSpecialty} = this.state
        let res = await getDetailDoctor(selectedOption.value)
        if(res&&res.errCode===0&&res.data&&res.data.Markdown){
            let markdown = res.data.Markdown

            let addressClinic ='', nameClinic ='', note ='', paymentId ='',
            priceId ='',provinceId='',selectedPrice ='',selectedPayment ='',selectedProvince='',
            selectedSpecialty =''

            if(res.data.Doctor_Infor){
                addressClinic = res.data.Doctor_Infor.addressClinic
                nameClinic = res.data.Doctor_Infor.nameClinic
                note =res.data.Doctor_Infor.note 
                paymentId = res.data.Doctor_Infor.paymentId
                priceId = res.data.Doctor_Infor.priceId  
                provinceId = res.data.Doctor_Infor.provinceId  
                
                selectedPayment = listPayment.find(item =>{                
                    return item && item.value === paymentId                
                })
                selectedPrice = listPrice.find(item =>{                
                    return item && item.value === priceId                
                })
                selectedProvince = listProvince.find(item =>{                
                    return item && item.value === provinceId                
                })                
                selectedSpecialty = listSpecialty.find(item =>{                
                    return item && item.value === provinceId                
                })                
            }

            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true,

                addressClinic: addressClinic,
                nameClinic: nameClinic,
                note: note,
                selectedPrice: selectedPrice,
                selectedPayment: selectedPayment,
                selectedProvince: selectedProvince
            })
        }else{
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false,

                nameClinic:'',
                addressClinic:'',
                note:'',
            })
        }
        // console.log('danh check: ', res);
    };

    handleChangeSelectDoctorInfor = async (selectedOption, name)=>{
        let stateName = name.name
        let stateCopy ={ ...this.state}
        stateCopy[stateName] = selectedOption
        this.setState({
            ...stateCopy
        })
    }

    handleOnChangeText = (event, id) => {
        let copyState = {...this.state}
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        });
    };

    render() {
        console.log('check: ', this.state);
        // let listDoctors = this.state.listDoctors;
        let {hasOldData, listSpecialty} = this.state
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
                            placeholder={<FormattedMessage id='menu.doctor.select-doctor'/>}                            
                        />
                    </div>
                    <div className='content-right form-group'>
                        <label><FormattedMessage id='menu.doctor.intro'/> :</label>
                        <textarea
                            value={this.state.description}
                            onChange={(event) => {
                                this.handleOnChangeText(event,'description');
                            }}
                            className='form-control'
                            rows={3}
                        >
                            
                        </textarea>
                    </div>
                </div>
                <div className='more-info-doctor-extra row'>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.select-price'/></label>
                        <Select
                            value={this.state.selectedPrice}
                            onChange={this.handleChangeSelectDoctorInfor}
                            options={this.state.listPrice}
                            placeholder={<FormattedMessage id='menu.doctor.select-price'/>}
                            name="selectedPrice"
                        />
                    </div>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.select-payment'/></label>
                        <Select
                            value={this.state.selectedPayment}
                            onChange={this.handleChangeSelectDoctorInfor}
                            options={this.state.listPayment}
                            placeholder={<FormattedMessage id='menu.doctor.select-payment'/>}
                            name="selectedPayment"
                        />
                    </div>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.select-province'/></label>
                        <Select
                            value={this.state.selectedProvince}
                            onChange={this.handleChangeSelectDoctorInfor}
                            options={this.state.listProvince}
                            placeholder={<FormattedMessage id='menu.doctor.select-province'/>}
                            name="selectedProvince"
                        />
                    </div>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.name-clinic'/></label>
                        <input type="text" className='form-control' value={this.state.nameClinic}
                            onChange={(event) => {
                                this.handleOnChangeText(event,'nameClinic');
                            }}/>
                    </div>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.address-clinic'/></label>
                        <input type="text" className='form-control' value={this.state.addressClinic}
                            onChange={(event) => {
                                this.handleOnChangeText(event,'addressClinic');
                            }} />
                    </div>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.note'/></label>
                        <input type="text" className='form-control' value={this.state.note}
                            onChange={(event) => {
                                this.handleOnChangeText(event,'note');
                            }}/>
                    </div>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.select-specialty'/></label>
                        <Select
                            value={this.state.selectedSpecialty}
                            onChange={this.handleChangeSelectDoctorInfor}
                            options={listSpecialty}
                            placeholder={<FormattedMessage id='menu.doctor.select-specialty'/>}  
                            name='selectedSpecialty'                          
                        />
                    </div>
                    <div className='col-4 form-group'>
                        <label><FormattedMessage id='menu.doctor.select-clinic'/></label>
                        <Select
                            value={this.state.selectedClinic}
                            onChange={this.handleChangeSelectDoctorInfor}
                            options={this.state.listClinic}
                            placeholder={<FormattedMessage id='menu.doctor.select-clinic'/>}  
                            name='selectedClinic'                          
                        />
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
