import { AUTH_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_RELOAD_USER,AUTH_RELOAD_USER_SUCCESS } from "./authTypes"


const initialState = {
    user: null,
    roles: null,
    isAuthenticated: false,
    isLoading: false
}

const authReducer = (state=initialState, action) =>{
    switch(action.type){
        case AUTH_RELOAD_USER:
        case AUTH_ATTEMPT:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_RELOAD_USER_SUCCESS:
        case AUTH_LOGIN_SUCCESS:
            const roles = [...action.payload.roles] 
            delete action.payload.roles
            delete action.payload.password

            return {
                ...state,
                user: {...action.payload},
                roles: roles,
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