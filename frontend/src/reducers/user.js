import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGOUT_REQUEST, FETCH_LOGOUT_SUCCESS } from '../constants/actionTypes'

const initialState = {
    logged: false,
    error: null,
    loading: false,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                logged: true,
                ...action.payload.user,
            }

        case FETCH_LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_LOGOUT_SUCCESS:
            return initialState
        default:
            return state

    }
}

export default user