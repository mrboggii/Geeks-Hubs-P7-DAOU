import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {document.querySelector(".sidebar").classList.add("open"); }

  const closeMenu = () => {document.querySelector(".sidebar").classList.remove("open"); }
  


  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">DAOU</a>
      </div>
      <div className="header-links">
        <a href="carrito.html">CARRITO</a>
        <a href="signin.html">ENTRAR</a>
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
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/100ml.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Aceite de Argán 100ml</a>
              </div>
              <div className="product-brand">Cristal</div>
              <div className="product-price">€16,99</div>
              <div className="product-rating">4.5 stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div class="product">
              <img className="product-image" src="/images/50ml.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Aceite de Argán 50ml</a>
              </div>
              <div className="product-brand">Cristal</div>
              <div className="product-price">€11,99</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/30ml.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Aceite Argán 30ml</a>
              </div>
              <div className="product-brand">Cristal</div>
              <div className="product-price">€7,99</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/Plata60ml.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Aceite de Argán 60ml con Plata artesanal</a>
              </div>
              <div className="product-brand">Plata</div>
              <div className="product-price">$60</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/Plata30ml.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Aceite de Argán 30ml con Plata artesanal</a>
              </div>
              <div className="product-brand">Plata</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/pack3.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Pack de 3</a>
              </div>
              <div className="product-brand">Cristal</div>
              <div className="product-price">€29.99</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer class="footer">
      © DAOU Argán 2020 
    </footer>
  </div>
  );
}

export default App;
