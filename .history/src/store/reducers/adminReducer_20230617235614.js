import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: []
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyStates = {...state};
            copyStates.isLoadingGender = true;
            console.log('check fetch gender start redux: ',action);
            return {
                ...copyStates,
                
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = {...state}
            copyState.genders = action.data
            console.log('check fetch gender success redux: ',action);
            return {
                ...copyState,
 
            };
        case actionTypes.FETCH_GENDER_FAILED:
            return {
                ...state,
                
            };
        
        default:
            return state;
    }
};

export default adminReducer;
