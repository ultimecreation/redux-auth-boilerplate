import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Page from '../Layout/Page'
import { logout } from '../Redux/auth/authActions'

const Logout = ({ logoutUser }) => {

  useEffect(() => {
    logoutUser()
  }, [])

  return <Navigate to="/" />
}
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout())
  }
}
export default connect(null, mapDispatchToProps)(Logout)
