import actionTypes from "../actions/actionTypes";

const initState = {
    isAdded: false,
    donhang: '',
    tensanpham: ''
}
const shoppingcartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_SHOPPING_CART_SUCCESS:{
            return {
                ...state,
                isAdded: true,
                donhang: action.donhang,
                tensanpham: action.tensanpham
            }
        }
        default:
            return state;
    }
}


export default shoppingcartReducer