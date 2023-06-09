import actionTypes from './actionTypes';
import {getAllCodeService} from '../../services/userService'


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
    return (dispatch, getState)=>{
        try {
            let res =await getAllCodeService('gender')
            if(res&&res.errCode ===0){
                fetchGenderSuccess(res.data)
            }else{
                fetchGenderFailed()
            }
        } catch (e) {
            fetchGenderFailed()
            console.log('fetchGenderStart error: ',e);
        }
    }
};
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
});
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});