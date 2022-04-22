import { AUTH_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_RELOAD_USER_SUCCESS, AUTH_AUTHORIZE_USER, AUTH_RESET_AUTHORIZATION, AUTH_LOGOUT } from "./authTypes"


export const login = incomingUser => async dispatch => {

    dispatch({ type: AUTH_ATTEMPT })
    const users = await (await fetch('http://localhost:3001/users')).json()
    const userFound = users.filter(user => {
        return user.email === incomingUser.email
    })[0]

    if (userFound?.email) {
        localStorage.setItem('loggedUser', JSON.stringify(userFound))
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: userFound })
    }
    else dispatch({ type: AUTH_LOGIN_FAILURE })

}

export const resetAuthorizations = () => async dispatch => {
    dispatch({ type: AUTH_RESET_AUTHORIZATION })
}

export const reloadUserData = () => async dispatch => {

    const loggedUser = await getLoggedUser()
    if (loggedUser)  dispatch({ type: AUTH_RELOAD_USER_SUCCESS, payload: loggedUser })
}

export const logout = () => dispatch => {

    localStorage.removeItem('loggedUser')
    dispatch({ type: AUTH_LOGOUT })

}

export const getLoggedUser = async () => {

    const loggedUser = localStorage.getItem('loggedUser') !== null
        ? await JSON.parse(localStorage.getItem('loggedUser'))
        : null

    return loggedUser

}