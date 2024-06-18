import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    userInfo: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: ''
            }
        default:
            return state;
    }
}

export default authReducer