import React from "react";
import "./ShoppingCart.css";
import Link from "next/link";

function ShoppingCart  (){
  return (
    <>
      <header className="header">
        <div className="logo">Avion</div>
        <div className="search-cart">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </header>

      <nav className="nav">
        <a href="#">Plant pots</a>
        <a href="#">Ceramics</a>
        <a href="#">Tables</a>
        <a href="#">Chairs</a>
        <a href="#">Crockery</a>
        <a href="#">Tableware</a>
        <a href="#">Cutlery</a>
      </nav>

      <div className="container">
        <h1>Your shopping cart</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="product-info">
                  <img
                    alt="Greystone vase - A timeless ceramic vase with a tri color grey glaze."
                    height="80"
                    src="https://storage.googleapis.com/a1aa/image/QZckLQBgLfXDekoBquCWheFmTZuU1zycl8K5UB5wuMDwrcynA.jpg"
                    width="80"
                  />
                  <div>
                    <p>Greystone vase</p>
                    <p>A timeless ceramic vase with a tri color grey glaze.</p>
                    <p className="price">£85</p>
                  </div>
                </div>
              </td>
              <td>1</td>
              <td>£85</td>
            </tr>
            <tr>
              <td>
                <div className="product-info">
                  <img
                    alt="Basic white vase - Beautiful and simple this is one for the classics."
                    height="80"
                    src="https://storage.googleapis.com/a1aa/image/BBbvqsLxP3IpI9xqMHYLN9Gmn2Pa0Jj9S8meAb9S0lq7Kn8JA.jpg"
                    width="80"
                  />
                  <div>
                    <p>Basic white vase</p>
                    <p>Beautiful and simple this is one for the classics.</p>
                    <p className="price">£125</p>
                  </div>
                </div>
              </td>
              <td>1</td>
              <td>£125</td>
            </tr>
          </tbody>
        </table>

        <div className="cart-summary">
          <div className="subtotal">
            <p>
              Subtotal <span>£210</span>
            </p>
            <p>Taxes and shipping are calculated at checkout!</p>
          </div>
          <a className="checkout-btn" href="#">
            Go to checkout
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-section">
          <div>
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#">New arrivals</a>
              </li>
              <li>
                <a href="#">Best sellers</a>
              </li>
              <li>
                <a href="#">Recently viewed</a>
              </li>
              <li>
                <a href="#">Popular this week</a>
              </li>
              <li>
                <a href="#">All products</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              <li>
                <a href="#">Crockery</a>
              </li>
              <li>
                <a href="#">Furniture</a>
              </li>
              <li>
                <a href="#">Homeware</a>
              </li>
              <li>
                <a href="#">Plant pots</a>
              </li>
              <li>
                <a href="#">Chairs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Our company</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Vacancies</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Returns policy</a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h4>Join our mailing list</h4>
            <div>
              <input placeholder="your@email.com" type="email" />
              <button>Sign up</button>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-skype"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="copyright">
          <p>Copyright 2022 Avion LTD</p>
        </div>
      </footer>
    </>
  );
};

export default ShoppingCart;
