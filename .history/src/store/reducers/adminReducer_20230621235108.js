import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            state.isLoadingGender = true;
            // console.log('check fetch gender start redux: ',action);
            return {
                ...state,
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            // let copyState = {...state}
            state.genders = action.data;
            state.isLoadingGender = false;
            // console.log('check fetch gender success redux: ',action);
            return {
                ...state,
            };
        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = [];
            state.isLoadingGender = false;
            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            // console.log('check fetch position start redux: ',action);
            state.positions = action.data;
            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = [];
            //  console.log('check fetch position success redux: ',action);
            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;

            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state,
            };

        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;

            return {
                ...state,
            };
        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = [];
            return {
                ...state,
            };
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state,
            };
        case actionTypes.FETCH_TOP_DOCTORS_FAILED:
            state.topDoctors = [];
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default adminReducer;
