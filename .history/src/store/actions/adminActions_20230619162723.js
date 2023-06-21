import actionTypes from './actionTypes';
import {
    getAllCodeService,
    createNewUserService,
    getAllUsers
} from '../../services/userService';

import {}

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            });
            let res = await getAllCodeService('gender');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error: ', e);
        }
    };
};
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
});
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({
            //     type: actionTypes.FETCH_GENDER_START,
            // })
            let res = await getAllCodeService('position');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed error: ', e);
        }
    };
};
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
});
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({
            //     type: actionTypes.FETCH_GENDER_START,
            // })
            let res = await getAllCodeService('role');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailed error: ', e);
        }
    };
};

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
});
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
});

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log('check create new user redux: ', res);
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess());
                dispatch(fetcAllUsersStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error: ', e);
        }
    };
};

export const saveUserSuccess = () => ({
    type: actionTypes.CREACTE_USER_SUCCESSED,
});

export const saveUserFailed = () => ({
    type: actionTypes.CREACTE_USER_FAILED,
});


export const fetcAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            
            let res = await getAllUsers('ALL');
            if (res && res.errCode === 0) {
                
                dispatch(fetcAllUsersSuccess(res.users.reverse()));
            } else {
                dispatch(fetcAllUsersFailed());
            }
        } catch (e) {
            dispatch(fetcAllUsersFailed());
            console.log('fetcAllUsersFailed error: ', e);
        }
    };
};

export const fetcAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data,
});
export const fetcAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
});