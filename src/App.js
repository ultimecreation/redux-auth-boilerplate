
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Protected from './Pages/Protected';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import PageNotFound from './Pages/PageNotFound';
import Admin from './Pages/Admin';
import { useEffect } from 'react';
import { reloadUserData } from './Redux/auth/authActions';
import { connect } from 'react-redux';
import AuthAndAuthorization from './Utils/AuthAndAuthorization';
function App({ reloadUserData }) {

  useEffect(() => {
    reloadUserData()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protege" element={
          <AuthAndAuthorization requiredRole="USER">
            <Protected />
          </AuthAndAuthorization>
        } />
        <Route path="/administration" element={
          <AuthAndAuthorization requiredRole="ADMIN">
            <Admin requiredRoles={["ADMIN"]} />
          </AuthAndAuthorization>
        } />
        <Route path="/connexion" element={<Login />} />
        <Route path="/deconnexion" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>


  );
}

export default connect(null, { reloadUserData })(App);
