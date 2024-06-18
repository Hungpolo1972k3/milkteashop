import actionTypes from './actionTypes'

export const getAllUsers = () =>  ({
    type: actionTypes.GET_ALL_USERS,
})
export const getUSerByKey = (username) =>  ({
    type: actionTypes.GET_USER_BY_KEY,
    username: username
})
