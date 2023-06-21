import actionTypes from './actionTypes';

export const fetchGenderStart = () => ({
    type: actionTypes.FETCH_GENDER_START,
});
export const fetchGenderSuccess = () => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
});
export const fetchGenderFailed = () => ({
    type: actionTypes.ADD_USER_FAIL,
});