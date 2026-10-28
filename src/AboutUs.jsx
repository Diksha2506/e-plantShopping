import React from 'react';
import { Leaf, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import './AboutUs.css';

function AboutUs({ onGetStarted }) {
  return (
    <div className="about-us-container">
      <div className="about-us-hero">
        <span className="badge">Welcome to Paradise</span>
        <h1>Where Green Meets Serenity</h1>
        <p className="about-tagline">
          At Paradise Nursery, we believe that bringing nature indoors enriches lives, purifies the air, and cultivates everyday tranquility.
        </p>
      </div>

      <div className="about-us-content">
        <div className="about-card story-card">
          <div className="card-icon">
            <Leaf size={32} />
          </div>
          <h2>Our Story & Purpose</h2>
          <p>
            Founded with an enduring passion for living greenery, Paradise Nursery is a premier online botanical sanctuary dedicated to connecting plant lovers, urban dwellers, and novice gardeners with nature. We curate an extensive selection of ethically cultivated houseplants designed to breathe freshness, vitality, and aesthetic harmony into homes and workspaces.
          </p>
        </div>

        <div className="about-card mission-card">
          <div className="card-icon">
            <Award size={32} />
          </div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make green living effortless and accessible for everyone. We carefully nurture each plant from propagation to doorstep packaging, ensuring that you receive healthy, thriving flora alongside expert plant-care guidance to support your botanical journey.
          </p>
        </div>

        <div className="about-card benefits-card">
          <div className="card-icon">
            <HeartHandshake size={32} />
          </div>
          <h2>Customer Benefits</h2>
          <p>
            When you choose Paradise Nursery, you enjoy superior quality specimens, sustainable packaging, verified air-purifying varieties, safe pet-friendly options, and friendly customer care. We empower every home to blossom into a serene oasis of health and well-being.
          </p>
        </div>
      </div>

      <div className="about-cta-section">
        <h3>Ready to build your indoor sanctuary?</h3>
        <button 
          id="about-explore-btn" 
          className="explore-btn"
          onClick={onGetStarted}
        >
          Explore Our Plant Collection
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
