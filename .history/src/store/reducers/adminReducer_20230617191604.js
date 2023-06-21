import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('check fetch gender redux: ',action);
            return {
                ...state,
                
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                genders:
                
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
