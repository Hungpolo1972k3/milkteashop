import actionTypes from './actionTypes'
export const nvghlogin = (nvghInfo) => ({
    type: actionTypes.LOGIN_SUCCESS,
    nvghInfo: nvghInfo
})