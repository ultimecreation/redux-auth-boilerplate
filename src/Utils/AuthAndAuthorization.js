import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthAndAuthorization = ({ isAuthenticated, roles,requiredRole, children}) => {
   
    if(isAuthenticated && roles.includes(requiredRole)) return children
    else return <Navigate to="/" />
}
const mapStateToProps = state =>{
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        roles: state.authReducer.roles,
    }
}
export default connect(mapStateToProps)(AuthAndAuthorization)
