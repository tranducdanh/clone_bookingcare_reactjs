import actionTypes from './actionTypes';
import {getAllCodeService} from '../../services/userService'


// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = (dispatch, getState) => {
    try {
        
    } catch (e) {
        dispatch({
            fetchGenderFailed()
        })
        console.log('fetchGenderStart error: ',e);
    }
};
export const fetchGenderSuccess = () => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
});
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});