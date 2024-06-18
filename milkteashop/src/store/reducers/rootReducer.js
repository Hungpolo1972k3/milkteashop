import authReducer from "./authReducer";
import productReducer from "./productReducer";
import shoppingcartReducer from "./shoppingcartReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import chucuahangReducer from "./ChucuahangReducer";


const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'userInfo']
}
const chucuahangConfig = {
    ...commonConfig,
    key: 'chucuahang',
    whitelist: ['isFound', 'username']
}

const productConfig = {
    ...commonConfig,
    key: 'product',
    whitelist: ['isChoosen', 'productInfo']
}
const shoppingcartConfig = {
    ...commonConfig,
    key: 'shoppingcart',
    whitelist: ['isAdded', 'donhang', 'tensanpham']
}
const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    chucuahang: persistReducer(chucuahangConfig, chucuahangReducer),
    product: persistReducer(productConfig, productReducer),
    shoppingcart : persistReducer(shoppingcartConfig, shoppingcartReducer)
})

export default rootReducer