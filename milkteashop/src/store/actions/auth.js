import actionTypes from './actionTypes'
export const register = (userInfo) =>  ({
    type: actionTypes.LOGIN_SUCCESS,
    userInfo: userInfo
})
export const login = (userInfo) => ({
    type: actionTypes.LOGIN_SUCCESS,
    userInfo: userInfo
})
export const addproducttoshoppingcart = (productInfo) =>({
    type: actionTypes.ADD_PRODUCT_TO_SHOPPING_CART,
    productInfo: productInfo
})

export const addproducttoshoppingcartsuccess = (donhang, tensanpham) =>({
    type: actionTypes.ADD_PRODUCT_TO_SHOPPING_CART_SUCCESS,
    donhang: donhang,
    tensanpham: tensanpham
})