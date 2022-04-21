import { AUTH_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./authTypes"


const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false
}

const authReducer = (state=initialState, action) =>{
    switch(action.type){
        case AUTH_ATTEMPT:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_LOGIN_FAILURE:
        case AUTH_LOGOUT:
            return {
                ...state,
                ...initialState
            }
        default:
            return state 
    }
}

export default authReducer