import actionTypes from "../actions/actionTypes";

const initState = {
    isChoosen: false,
    productInfo: ''
}


const productReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_SHOPPING_CART:{
            return {
                ...state,
                isChoosen: true,
                productInfo: action.productInfo
            }
        }
        default:
            return state;
    }
}

export default productReducer