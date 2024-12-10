import React from "react";
import Link from "next/link";
import "./About.css";

function About  (){
  return (
    <>
      <header>
        Free delivery on all orders over £50 with code easter checkout
      </header>
      <div className="navbar">
        <div className="logo">Avion</div>
        <nav>
          <a href="#">All products</a>
          <a href="#">Plant pots</a>
          <a href="#">Ceramics</a>
          <a href="#">Tables</a>
          <a href="#">Chairs</a>
          <a href="#">Crockery</a>
          <a href="#">Tableware</a>
          <a href="#">Cutlery</a>
        </nav>
        <div className="actions">
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
          <a href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div className="hero">
        <h1>
          A brand built on the love of craftsmanship, quality and outstanding
          customer service
        </h1>
        <button>View our products</button>
      </div>
      <div className="section">
        <div className="content">
          <h2>It started with a small idea</h2>
          <p>
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014
          </p>
          <button>View collection</button>
        </div>
        <div className="image">
          <img
            alt="A stylish living room with a yellow chair and modern decor"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/hOo5Cv76vf02KyQvKNuJIkzfASeG7VLeo3qXPQrGuHFCN4kPB.jpg"
            width="600"
          />
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <h3>Next day as standard</h3>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className="feature">
          <h3>Made by true artisans</h3>
          <p>Handmade crafted goods made with real passion and craftsmanship</p>
        </div>
        <div className="feature">
          <h3>Unbeatable prices</h3>
          <p>
            For our materials and quality you won't find better prices anywhere
          </p>
        </div>
        <div className="feature">
          <h3>Recycled packaging</h3>
          <p>
            We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>
      <footer>
        <div className="column">
          <h3>Avion</h3>
          <p>21 New York Street</p>
          <p>New York City</p>
          <p>United States of America</p>
          <p>432 34</p>
        </div>
        <div className="column">
          <h3>Social links</h3>
          <div className="social-links">
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
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="column">
          <h3>Menu</h3>
          <a href="#">New arrivals</a>
          <a href="#">Best selling</a>
          <a href="#">Recently viewed</a>
          <a href="#">Popular this week</a>
          <a href="#">All products</a>
        </div>
        <div className="column">
          <h3>Categories</h3>
          <a href="#">Crockery</a>
          <a href="#">Furniture</a>
          <a href="#">Homeware</a>
          <a href="#">Plant pots</a>
          <a href="#">Chairs</a>
          <a href="#">Crockery</a>
        </div>
        <div className="column">
          <h3>Our company</h3>
          <a href="#">About us</a>
          <a href="#">Vacancies</a>
          <a href="#">Contact us</a>
          <a href="#">Privacy</a>
          <a href="#">Returns policy</a>
        </div>
      </footer>
    </>
  );
};

export default About;
