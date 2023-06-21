import actionTypes from './actionTypes';
import {
    getAllCodeService,
    createNewUserService,
    getAllUsers,
    deleteUserService,
    editUserService,
    getTopDoctorHomeService
} from '../../services/userService';

import { toast } from 'react-toastify';

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
                toast.error('Fetch all user failed !');
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            toast.error('Fetch all user failed !');
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
                toast.success('Create a new user succeed !');
                dispatch(saveUserSuccess());
                dispatch(fetcAllUsersStart());
            } else {
                toast.error('Create new user failed !');
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error: ', e);
        }
    };
};

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESSED,
});

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
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

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            // console.log('check create new user redux: ', res);

            if (res && res.errCode === 0) {
                toast.success('Delete user succeed !');
                dispatch(deleteUserSuccess());
                dispatch(fetcAllUsersStart());
            } else {
                toast.error('Delete user failed !');
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error('Delete user failed !');
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error: ', e);
        }
    };
};

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESSED,
});

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
});

export const editUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(userId);
            // console.log('check create new user redux: ', res);

            if (res && res.errCode === 0) {
                toast.success('Update user succeed !');
                dispatch(editUserSuccess());
                dispatch(fetcAllUsersStart());
            } else {
                toast.error('Update user failed !');
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error('Update user failed !');
            dispatch(editUserFailed());
            console.log('editUserFailed error: ', e);
        }
    };
};

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESSED,
});

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
});
