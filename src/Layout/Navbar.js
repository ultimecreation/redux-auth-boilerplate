import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = ({ isAuthenticated }) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" >ReduxAuth</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" >Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/protege" className="nav-link" >Protégée</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        {isAuthenticated
                            ? <>
                                <li className="nav-item">
                                    <NavLink to="/deconnexion" className="nav-link" >Deconnexion</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/administration" className="nav-link" >Aministration</NavLink>
                                </li></>
                            :
                            <li className="nav-item">
                                <NavLink to="/connexion" className="nav-link" >Connexion</NavLink>
                            </li>



                        }


                    </ul>

                </div>
            </div>
        </nav>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}
export default connect(mapStateToProps)(Navbar)
