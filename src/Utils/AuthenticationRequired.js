import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthenticationRequired = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) return <Navigate to="/connexion" />
    return children
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}
export default connect(mapStateToProps)(AuthenticationRequired)
