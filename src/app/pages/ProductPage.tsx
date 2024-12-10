import React from "react";
import "./ProductPage.css";
import Link from "next/link";
function ProductPage(){
  return (
    <>
      <div className="header">
        Free delivery on all orders over £50 with code <strong>avion</strong> at checkout!
      </div>
      <div className="navbar">
        <div className="logo">Avion</div>
        <div className="links">
          <a href="#">Plant pots</a>
          <a href="#">Ceramics</a>
          <a href="#">Tables</a>
          <a href="#">Chairs</a>
          <a href="#">Crockery</a>
          <a href="#">Tableware</a>
          <a href="#">Cutlery</a>
        </div>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-user"></i>
        </div>
      </div>
      <div className="main-content">
        <img
          alt="A black chair with a minimalist design placed in a white room with a reflective floor."
          height="600"
          src="https://storage.googleapis.com/a1aa/image/Dzer3La14qSODK34Oydso55Xv9492tQZZR3mnngPcDfsgO5TA.jpg"
          width="600"
        />
        <div className="product-details">
          <h1>The Dandy Chair</h1>
          <div className="price">£250</div>
          <div className="description">
            <p>
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather upholstery.
            </p>
            <ul>
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>
          <div className="dimensions">
            <p>
              <strong>Dimensions:</strong>
            </p>
            <p>Height: 110cm</p>
            <p>Width: 75cm</p>
            <p>Depth: 50cm</p>
          </div>
          <div className="amount">
            <label htmlFor="amount">Amount:</label>
            <button>-</button>
            <input id="amount" type="text" value="1" readOnly />
            <button>+</button>
          </div>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
      <div className="suggestions">
        <h2>You might also like</h2>
        <div className="items">
          {/* Repeatable suggestion items */}
          <div className="item">
            <img
              alt="A black chair with wooden legs placed in front of a teal background."
              src="https://storage.googleapis.com/a1aa/image/2txV5mT5iY49BplwyKWH60pkk2naFP6K0UkJ8URCjnZLoTeJA.jpg"
              width="300"
            />
            <h3>The Dandy chair</h3>
            <div className="price">£250</div>
          </div>
          {/* More items... */}
        </div>
        <div className="view-collection">
          <button>View collection</button>
        </div>
      </div>
      {/* Additional content here */}
    </>
  );
};

export default ProductPage;
