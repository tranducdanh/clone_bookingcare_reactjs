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
            state.isLoadingGender = true;
            // console.log('check fetch gender start redux: ',action);
            return {
                ...state,
                
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            // let copyState = {...state}
            state.genders = action.data
            state.isLoadingGender = false
            // console.log('check fetch gender success redux: ',action);
            return {
                ...state,
 
            };
        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = []
            state.isLoadingGender = false
            return {
                ...state,
                
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            
            state.positions = action.data
            
            return {
                ...state,
 
            };
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            return {
                ...state,
                
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            
            state.positions = action.data
            
            return {
                ...state,
 
            };
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            return {
                ...state,
                
            };
        
        default:
            return state;
    }
};

export default adminReducer;
