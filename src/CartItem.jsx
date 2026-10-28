import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Leaf, ShoppingCart, Plus, Minus, Trash2, ArrowLeft, CreditCard, Sparkles } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping, onNavigateToHome, onNavigateToAbout }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  // Helper to parse numeric cost whether formatted as "$15" or 15
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    return parseFloat(String(cost).replace(/[^0-9.]/g, '')) || 0;
  };

  // Calculate total amount for all products in cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate subtotal for an individual item
  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  // Calculate total items count across cart
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, id: item.id, quantity: item.quantity - 1 }));
    } else {
      // If quantity reaches 0 or decremented from 1, remove item
      dispatch(removeItem(item.name || item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name || item.id));
  };

  const handleCheckout = () => {
    setCheckoutMessage(true);
    setTimeout(() => {
      setCheckoutMessage(false);
    }, 4500);
  };

  return (
    <div className="cart-page">
      {/* Universal Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand" onClick={onNavigateToHome}>
          <div className="nav-logo-icon">
            <Leaf size={24} />
          </div>
          <div className="nav-brand-text">
            <h2>Paradise Nursery</h2>
            <span>Houseplant Boutique</span>
          </div>
        </div>

        <div className="nav-links">
          <button className="nav-link" onClick={onNavigateToHome}>
            Home
          </button>
          <button className="nav-link" onClick={onContinueShopping}>
            Plants
          </button>
          {onNavigateToAbout && (
            <button className="nav-link" onClick={onNavigateToAbout}>
              About Us
            </button>
          )}
          <button 
            id="cart-nav-badge" 
            className="nav-cart-btn" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ShoppingCart size={20} />
            <span className="cart-btn-text">Cart</span>
            <span id="cart-item-count" className="cart-count-badge">
              {calculateTotalQuantity()}
            </span>
          </button>
        </div>
      </nav>

      <main className="cart-container">
        <div className="cart-header">
          <div className="cart-header-title">
            <span className="cart-badge">Your Selection</span>
            <h1>Shopping Cart</h1>
            <p>Review and customize your green collection before checking out.</p>
          </div>
        </div>

        {checkoutMessage && (
          <div className="checkout-alert" role="alert">
            <Sparkles size={22} />
            <div>
              <strong>Coming Soon!</strong>
              <p>Our secure checkout system is currently being integrated. Thank you for choosing Paradise Nursery!</p>
            </div>
          </div>
        )}

        {cartItems.length === 0 ? (
          <div className="empty-cart-card">
            <div className="empty-cart-icon">
              <ShoppingCart size={48} />
            </div>
            <h2>Your Cart is Currently Empty</h2>
            <p>Looks like you haven't brought any green companions into your cart yet.</p>
            <button 
              id="empty-continue-shopping-btn" 
              className="continue-shopping-btn primary"
              onClick={onContinueShopping}
            >
              <ArrowLeft size={18} /> Explore Our Plants
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Cart Items List */}
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id || item.name} className="cart-item-card">
                  <div className="cart-item-img-wrap">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  </div>

                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <div className="cart-item-unit-cost">
                      Unit Price: <strong>{item.cost}</strong>
                    </div>

                    <div className="cart-item-actions">
                      <div className="quantity-control-group">
                        <button 
                          className="quantity-btn minus"
                          onClick={() => handleDecrement(item)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button 
                          className="quantity-btn plus"
                          onClick={() => handleIncrement(item)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button 
                        className="cart-item-delete"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={16} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal">
                    <span className="subtotal-label">Subtotal</span>
                    <span className="subtotal-value">${calculateTotalCost(item)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary Card */}
            <aside className="cart-summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Items</span>
                <span className="summary-val">{calculateTotalQuantity()} units</span>
              </div>
              <div className="summary-row">
                <span>Standard Nursery Shipping</span>
                <span className="summary-val free-shipping">FREE</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total Amount</span>
                <span id="cart-total-amount" className="total-val">${calculateTotalAmount()}</span>
              </div>

              <div className="summary-actions">
                <button 
                  id="checkout-btn" 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  <CreditCard size={18} /> Checkout
                </button>
                <button 
                  id="continue-shopping-btn" 
                  className="continue-shopping-btn secondary"
                  onClick={onContinueShopping}
                >
                  <ArrowLeft size={18} /> Continue Shopping
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Paradise Nursery Shopping Application. All rights reserved.</p>
        <p>Built with React & Redux Toolkit for Coursera IBM Full Stack Developer Certification.</p>
      </footer>
    </div>
  );
}

export default CartItem;
