import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Leaf, ShoppingCart, Check, Heart, Sparkles } from 'lucide-react';
import { addItem } from './CartSlice';
import './ProductList.css';

// 3 plant categories with 6 unique houseplants each = 18 plants total
export const plantsArray = [
  {
    category: "Air Purifying Plants",
    description: "Natural oxygenators and toxin removers proven by NASA clean air studies.",
    plants: [
      {
        id: "ap-1",
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80",
        description: "Produces night-time oxygen and filters household airborne toxins.",
        cost: "$15",
      },
      {
        id: "ap-2",
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1572688484437-31820e394186?auto=format&fit=crop&w=600&q=80",
        description: "Hardy, fast-growing variety that filters carbon monoxide and xylene.",
        cost: "$12",
      },
      {
        id: "ap-3",
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80",
        description: "Elegant white blooms with exceptional benzene and ammonia removal.",
        cost: "$18",
      },
      {
        id: "ap-4",
        name: "Boston Fern",
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80",
        description: "Lush cascading fronds that boost natural indoor air humidity.",
        cost: "$16",
      },
      {
        id: "ap-5",
        name: "Rubber Plant",
        image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80",
        description: "Glossy broad leaves with superior airborne particle capture.",
        cost: "$22",
      },
      {
        id: "ap-6",
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
        description: "Healing medicinal succulent that purifies indoor air naturally.",
        cost: "$14",
      },
    ],
  },
  {
    category: "Aromatic & Fragrant Plants",
    description: "Invigorating scents and botanical aromatherapy for a relaxing ambience.",
    plants: [
      {
        id: "ar-1",
        name: "English Lavender",
        image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80",
        description: "Calming sweet aroma known to promote deep, restorative sleep.",
        cost: "$20",
      },
      {
        id: "ar-2",
        name: "Rosemary Bush",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80",
        description: "Invigorating herbal scent that enhances mental focus and memory.",
        cost: "$15",
      },
      {
        id: "ar-3",
        name: "Sweet Jasmine",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80",
        description: "Intoxicating sweet evening blooms that alleviate daily stress.",
        cost: "$24",
      },
      {
        id: "ar-4",
        name: "Lemon Balm",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
        description: "Bright citrus scent that naturally uplifts spirits and repels pests.",
        cost: "$14",
      },
      {
        id: "ar-5",
        name: "Spearmint",
        image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
        description: "Crisp, refreshing herbal fragrance ideal for kitchen windowsills.",
        cost: "$11",
      },
      {
        id: "ar-6",
        name: "Eucalyptus",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
        description: "Menthol-rich cleansing aroma that clears airways and refreshes rooms.",
        cost: "$25",
      },
    ],
  },
  {
    category: "Low Maintenance & Resilient",
    description: "Virtually indestructible houseplants perfect for busy plant parents.",
    plants: [
      {
        id: "lm-1",
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80",
        description: "Thrives in low light conditions with minimal monthly watering needs.",
        cost: "$26",
      },
      {
        id: "lm-2",
        name: "Golden Pothos",
        image: "https://images.unsplash.com/photo-1596724817757-dc7169bb8d27?auto=format&fit=crop&w=600&q=80",
        description: "Trail-ready resilient vine that adapts to virtually any lighting.",
        cost: "$13",
      },
      {
        id: "lm-3",
        name: "Cast Iron Plant",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
        description: "True to its name, endures low lighting and irregular watering schedules.",
        cost: "$28",
      },
      {
        id: "lm-4",
        name: "Jade Plant",
        image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80",
        description: "Symbol of good luck and prosperity that loves sunny window ledges.",
        cost: "$17",
      },
      {
        id: "lm-5",
        name: "Chinese Evergreen",
        image: "https://images.unsplash.com/photo-1612363148952-45e05a8f4c28?auto=format&fit=crop&w=600&q=80",
        description: "Striking variegated foliage that forgives missed waterings easily.",
        cost: "$19",
      },
      {
        id: "lm-6",
        name: "Haworthia Zebra",
        image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80",
        description: "Charming petite succulent with striking horizontal white zebra stripes.",
        cost: "$10",
      },
    ],
  },
];

function ProductList({ onNavigateToHome, onNavigateToCart, onNavigateToAbout }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Helper to check if plant is already added in the cart
  const isPlantInCart = (plantName, plantId) => {
    return cartItems.some(item => item.name === plantName || item.id === plantId);
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page">
      {/* Top Navigation Bar */}
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
          <button className="nav-link active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Plants
          </button>
          {onNavigateToAbout && (
            <button className="nav-link" onClick={onNavigateToAbout}>
              About Us
            </button>
          )}
          <button 
            id="nav-cart-btn" 
            className="nav-cart-btn" 
            onClick={onNavigateToCart}
            aria-label="View shopping cart"
          >
            <ShoppingCart size={20} />
            <span className="cart-btn-text">Cart</span>
            <span id="nav-cart-count" className="cart-count-badge">
              {totalCartCount}
            </span>
          </button>
        </div>
      </nav>

      {/* Main Plant Catalog Container */}
      <main className="product-catalog">
        <header className="catalog-header">
          <span className="catalog-badge">Botanical Collection</span>
          <h1>Discover Our Handpicked Houseplants</h1>
          <p>
            Explore 18 carefully nurtured botanical treasures across 3 unique categories. 
            Choose the perfect companion for your bedroom, living space, or home office.
          </p>
        </header>

        {plantsArray.map((categoryGroup, index) => (
          <section key={index} className="category-section">
            <div className="category-header">
              <div className="category-title-wrap">
                <h2>{categoryGroup.category}</h2>
                <p>{categoryGroup.description}</p>
              </div>
              <span className="plant-count-tag">{categoryGroup.plants.length} Varieties</span>
            </div>

            <div className="plant-grid">
              {categoryGroup.plants.map((plant) => {
                const added = isPlantInCart(plant.name, plant.id);
                return (
                  <div key={plant.id} className={`plant-card ${added ? 'in-cart' : ''}`}>
                    <div className="plant-img-wrapper">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="plant-thumbnail"
                        loading="lazy"
                      />
                      <span className="plant-price-badge">{plant.cost}</span>
                      {added && (
                        <div className="in-cart-overlay">
                          <span>Added to Cart</span>
                        </div>
                      )}
                    </div>

                    <div className="plant-details">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-desc">{plant.description}</p>
                      
                      <div className="plant-card-footer">
                        <span className="plant-cost-text">{plant.cost}</span>
                        <button
                          id={`add-to-cart-${plant.id}`}
                          className={`add-to-cart-btn ${added ? 'disabled' : ''}`}
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                          aria-label={`Add ${plant.name} to cart`}
                        >
                          {added ? (
                            <>
                              <Check size={16} /> Added
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={16} /> Add to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Paradise Nursery Shopping Application. All rights reserved.</p>
        <p>Built with React & Redux Toolkit for Coursera IBM Full Stack Developer Certification.</p>
      </footer>
    </div>
  );
}

export default ProductList;
