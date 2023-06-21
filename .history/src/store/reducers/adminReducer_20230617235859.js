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
                ...copyStates,
                
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState1 = {...state}
            copyState1.genders = action.data
            copyState1.isLoadingGender = false
            console.log('check fetch gender success redux: ',action);
            return {
                ...copyState1,
 
            };
        case actionTypes.FETCH_GENDER_FAILED:
            let copyState2 = {...state}
            copyState.isLoadingGender = false
            return {
                ...copyState2,
                
            };
        
        default:
            return state;
    }
};

export default adminReducer;
