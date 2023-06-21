import actionTypes from './actionTypes';
import {getAllCodeService} from '../../services/userService'


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = async (dispatch, getState) => {
    try {
        let res = await getAllCodeService('gender')
        if(res&&res.errCode ===0){
            
        }
    } catch (e) {
        fetchGenderFailed()
        console.log('fetchGenderStart error: ',e);
    }
};
export const fetchGenderSuccess = () => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
});
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});