import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGOUT_REQUEST, FETCH_LOGOUT_SUCCESS } from "../constants/actionTypes"



export function fetchLogin(user) {
    return dispatch => {
        dispatch(fetchLoginRequest())

        setTimeout(() => {
            user.name = 'guest#1'
            dispatch(fetchLoginSuccess(user))
        }, 1)
    }
}

export function fetchLogout() {
    return dispacth => {
        dispacth(fetchLogoutRequest())
        setTimeout(() => {
            dispacth(fetchLogoutSuccess())
        }, 1)
    }
}

export const fetchLogoutRequest = () => ({
    type: FETCH_LOGOUT_REQUEST
})

export const fetchLogoutSuccess = () => ({
    type: FETCH_LOGOUT_SUCCESS
})

export const fetchLoginRequest = () => ({
    type: FETCH_LOGIN_REQUEST
})

export const fetchLoginSuccess = user => ({
    type: FETCH_LOGIN_SUCCESS,
    payload: {
        user
    }
})