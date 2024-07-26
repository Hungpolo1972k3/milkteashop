import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    nvghInfo: ''
}

const nvghReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                nvghInfo: action.nvghInfo
            }
        default:
            return state; 
    }
}

export default nvghReducer