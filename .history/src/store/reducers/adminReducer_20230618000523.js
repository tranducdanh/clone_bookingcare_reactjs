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
            let copyState = {...state};
            copyState.isLoadingGender = true;
            console.log('check fetch gender start redux: ',action);
            return {
                ...copyState,
                
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = {...state}
            copyState.genders = action.data
            copyState.isLoadingGender = false
            console.log('check fetch gender success redux: ',action);
            return {
                ...copyState,
 
            };
        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = []
            state.isLoadingGender = false
            return {
                ...state,
                
            };
        
        default:
            return state;
    }
};

export default adminReducer;
