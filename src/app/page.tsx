// page.tsx
import React from "react";
import "./globals.css"; // Make sure to create and import the corresponding CSS file
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <header>
        <div className="logo">Avion</div>
        <nav>
          <Link href="#">Plant pots</Link>
          <Link href="#">Ceramics</Link>
          <Link href="#">Tables</Link>
          <Link href="#">Chairs</Link>
          <Link href="#">Crockery</Link>
          <Link href="#">Tableware</Link>
          <Link href="#">Cutlery</Link>
          <Link href="/ProductPage">Product Page</Link>
          <Link href="/ShoppingCart">Shopping Cart</Link>
          <Link href="/About">About</Link>
        </nav>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </header>

      <section className="hero">
        <div className="text">
          <h1>The furniture brand for the future, with timeless designs</h1>
          <button className="btn">View collection</button>
          <p>
            A new era in eco-friendly furniture with Avion, the French luxury
            retail brand with nice tones, refined colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <img
          alt="A stylish chair"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/Rjdv0Yauttp3HFIwgdHNT0VevwFc75NITeoYheFVxx4nJekPB.jpg"
          width="600"
        />
      </section>

      <section className="features">
        <h2>What makes our brand different</h2>
        <div className="feature-list">
          <div className="feature">
            <i className="fas fa-shipping-fast"></i>
            <h3>Next day as standard</h3>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="feature">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Handmade by Artisans</h3>
            <p>Handcrafted, made with passion and craftsmanship</p>
          </div>
          <div className="feature">
            <i className="fas fa-tags"></i>
            <h3>Unbeatable prices</h3>
            <p>For our materials and quality, you won't find better prices anywhere</p>
          </div>
          <div className="feature">
            <i className="fas fa-recycle"></i>
            <h3>Recycled packaging</h3>
            <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>New ceramics</h2>
        <div className="product-list">
          <div className="product">
            <img
              alt="The Dandy chair"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/bkFtQjGxqeXlFiORsVKSuacormowEN80MipTqWnnBsNbin8JA.jpg"
              width="300"
            />
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
          <div className="product">
            <img
              alt="Rustic Vase Set"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/0YFE9wcleelwV0THShkVhgXQJcSqW1HKZCBRINYrIZuuEP5TA.jpg"
              width="300"
            />
            <p>Rustic Vase Set</p>
            <p>£155</p>
          </div>
          <div className="product">
            <img
              alt="The Silky Vase"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/lNCVJDKMPeRSfEFDePHe482tfJJ8ctsb7JuYd2wCD1Iqm4JfE.jpg"
              width="300"
            />
            <p>The Silky Vase</p>
            <p>£125</p>
          </div>
          <div className="product">
            <img
              alt="The Lucy Lamp"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/lDeyeT8xJLkGLUy2q2aLkxC5KGGxlT35GLEOgqqYvJ23EP5TA.jpg"
              width="300"
            />
            <p>The Lucy Lamp</p>
            <p>£399</p>
          </div>
        </div>
        <button>View collection</button>
      </section>

      <section className="newsletter">
        <div className="content">
          <div className="text">
            <h2>Join the club and get the benefits</h2>
            <p>
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores, and more
            </p>
            <form>
              <input placeholder="you@example.com" type="email" />
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="content">
          <div className="text">
            <h2>From a studio in London to a global brand with over 400 outlets</h2>
            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the masses.
            </p>
            <p>
              Handmade, and lovingly crafted from the finest materials and honed
              into beautiful, timeless pieces for the home. Today we have over 400
              outlets worldwide and are the leading designers of the French interior
              style.
            </p>
            <button>Get in touch</button>
          </div>
          <img
            alt="A stylish living room setup"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/gsqTPg0ztYp7HFzZxAlr0IXbGKOYWohyg34ZNijavCbMxTeJA.jpg"
            width="600"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="column">
            <h3>Menu</h3>
            <ul>
              <li><a href="#">New arrivals</a></li>
              <li><a href="#">Best sellers</a></li>
              <li><a href="#">Recently viewed</a></li>
              <li><a href="#">Popular this week</a></li>
              <li><a href="#">All products</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Crockery</a></li>
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Homeware</a></li>
              <li><a href="#">Plant pots</a></li>
              <li><a href="#">Chairs</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Our company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Vacancies</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Returns policy</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Join our mailing list</h3>
            <form>
              <input placeholder="you@example.com" type="email" />
              <section className="hero">
        <div className="text"></div>
        <button className="btn">Sign up</button>
              </section>
            </form>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2022 Avion - L</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
