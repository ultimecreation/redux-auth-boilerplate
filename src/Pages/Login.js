import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Page from '../Layout/Page'
import { login } from '../Redux/auth/authActions'

const Login = ({isAuthenticated,isLoading,logUser}) => {
    const navigate = useNavigate()
    const [tmpUser,setTmpUser] = useState({
        email:'',
        password:''
    })
    useEffect(()=>{
        if(isAuthenticated) return navigate('/')
        return ()=>{}
    },[isAuthenticated])
    
    const handleChange = e => {
        setTmpUser(() =>{
            return{
                ...tmpUser,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit =  e => {
        e.preventDefault()
        if(tmpUser.email !== '' && tmpUser.password !== ''){
            logUser(tmpUser)
            setTmpUser({email:'',password:''})            
        } 
        
    }
    return (
        <Page>
            <h1>Connexion</h1>
            <div className="col-6 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='form-control' onChange={handleChange} value={tmpUser.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" className='form-control'  onChange={handleChange} value={tmpUser.password} autoComplete="false" />
                    </div>
                    <input type="submit" value={isLoading ? 'Chargement...' : 'Se connecter'} className="btn btn-primary mt-4" />
                </form>
            </div>
        </Page>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.authReducer.isLoading,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logUser: user => dispatch(login(user))
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
