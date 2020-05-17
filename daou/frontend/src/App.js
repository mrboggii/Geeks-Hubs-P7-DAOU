import React from 'react';
import{ BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen.js';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen.js';

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const openMenu = () => {document.querySelector(".sidebar").classList.add("open"); }
  const closeMenu = () => {document.querySelector(".sidebar").classList.remove("open"); }
   return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">DAOU</Link>
      </div>
      <div className="header-links">
        <Link to="/cart"><a href="carrito.html">CARRITO</a></Link>
        {
          userInfo ? <Link to="/profile">{userInfo.name}</Link> :
          <Link to="/signin">ENTRAR</Link>
        }
        
      </div>
    </header>
    <aside className="sidebar">
      <h3>Protuctos</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Aceite de Argán</a>
        </li>

        <li>
          <a href="index.html">Aceite con Plata Artesanal</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
      <Route path="/register" component={RegisterScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </div>
    </main>
    <footer className="footer">
      © DAOU Argán 2020 
    </footer>
  </div>
  </BrowserRouter>
  );
}
export default App;
