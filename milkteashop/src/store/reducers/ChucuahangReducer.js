import actionTypes from "../actions/actionTypes";

const initState = {
    isFound: false,
    username: '',
}

const chucuahangReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
        case actionTypes.GET_USER_BY_KEY:
            return {
                ...state,
                isFound: true,
                username: action.username
            }
            
        default:
            return state;
    }
}

export default chucuahangReducer