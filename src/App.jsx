import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Leaf, ArrowRight, Info, ShoppingCart } from 'lucide-react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  // Navigation view state: 'landing', 'plants', 'cart', 'about'
  const [currentView, setCurrentView] = useState('landing');
  const cartItems = useSelector(state => state.cart.items);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleGetStarted = () => {
    setCurrentView('plants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePlants = () => {
    setCurrentView('plants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCart = () => {
    setCurrentView('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setCurrentView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* 1. Landing Page View */}
      {currentView === 'landing' && (
        <div className="landing-page background-image">
          <div className="landing-card">
            <div className="landing-brand">
              <div className="landing-brand-icon">
                <Leaf size={28} />
              </div>
              <span>Boutique Botanical Haven</span>
            </div>

            <h1 className="landing-title">Welcome to Paradise Nursery</h1>
            <div className="landing-divider"></div>

            <p className="landing-description">
              Welcome to Paradise Nursery, where green meets tranquility. Step into a world of curated 
              houseplants designed to cleanse your atmosphere, brighten every living corner, and infuse 
              serene natural balance directly into your home.
            </p>

            <div className="landing-btn-container">
              <button 
                id="get-started-btn" 
                className="get-started-btn" 
                onClick={handleGetStarted}
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>

              <button 
                id="about-us-btn" 
                className="about-us-link-btn" 
                onClick={handleNavigateAbout}
              >
                <Info size={18} />
                <span>About Us</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Plant Catalog View */}
      {currentView === 'plants' && (
        <ProductList
          onNavigateToHome={handleNavigateHome}
          onNavigateToCart={handleNavigateCart}
          onNavigateToAbout={handleNavigateAbout}
        />
      )}

      {/* 3. Cart View */}
      {currentView === 'cart' && (
        <CartItem
          onContinueShopping={handleNavigatePlants}
          onNavigateToHome={handleNavigateHome}
          onNavigateToAbout={handleNavigateAbout}
        />
      )}

      {/* 4. About Us View */}
      {currentView === 'about' && (
        <div className="about-page-wrapper">
          <nav className="navbar">
            <div className="nav-brand" onClick={handleNavigateHome}>
              <div className="nav-logo-icon">
                <Leaf size={24} />
              </div>
              <div className="nav-brand-text">
                <h2>Paradise Nursery</h2>
                <span>Houseplant Boutique</span>
              </div>
            </div>

            <div className="nav-links">
              <button className="nav-link" onClick={handleNavigateHome}>
                Home
              </button>
              <button className="nav-link" onClick={handleNavigatePlants}>
                Plants
              </button>
              <button className="nav-link active" onClick={handleNavigateAbout}>
                About Us
              </button>
              <button 
                className="nav-cart-btn" 
                onClick={handleNavigateCart}
                aria-label="View shopping cart"
              >
                <ShoppingCart size={20} />
                <span className="cart-btn-text">Cart</span>
                <span className="cart-count-badge">
                  {totalCartCount}
                </span>
              </button>
            </div>
          </nav>

          <AboutUs onGetStarted={handleNavigatePlants} />

          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Paradise Nursery Shopping Application. All rights reserved.</p>
            <p>Built with React & Redux Toolkit for Coursera IBM Full Stack Developer Certification.</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
