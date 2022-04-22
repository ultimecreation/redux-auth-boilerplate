import { AUTH_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./authTypes"


export const login = incomingUser => async dispatch =>{

    dispatch({type:AUTH_ATTEMPT})
    const users = await (await fetch('http://localhost:3001/users')).json()
    const userFound = users.filter( user =>{
        return user.email === incomingUser.email
    })[0]

    if(userFound?.email) dispatch({type: AUTH_LOGIN_SUCCESS, payload: userFound})
    else dispatch({ type: AUTH_LOGIN_FAILURE})
}

export const logout = () => dispatch => dispatch({ type: AUTH_LOGOUT})