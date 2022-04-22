
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Protected from './Pages/Protected';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import PageNotFound from './Pages/PageNotFound';
import AuthenticationRequired from './Utils/AuthenticationRequired';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/protege" element={<AuthenticationRequired><Protected/></AuthenticationRequired>}/>
        <Route path="/connexion" element={<Login/>}/>
        <Route path="/deconnexion" element={<Logout/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
