# e-plantShopping

**Paradise Nursery Shopping Application** is an elegant, modern React & Redux Toolkit e-commerce shopping web application built for the **Coursera IBM Full Stack Software Developer Final Project**. Paradise Nursery is a botanical online sanctuary where plant lovers and urban dwellers can discover, explore, and purchase carefully curated houseplants.

---

## 🌿 Project Overview

Paradise Nursery (`e-plantShopping`) offers a seamless shopping experience for houseplant enthusiasts, providing:
- **Landing Page**: Immersive botanical hero backdrop (`.background-image`), "Welcome to Paradise Nursery" heading, introduction to the nursery, and a prominent "Get Started" call-to-action button to enter the shop.
- **About Us**: Comprehensive background introducing Paradise Nursery's purpose, eco-conscious mission, curated botanical products, and customer benefits.
- **Plant Catalog (ProductList)**: 18 unique houseplants categorized across 3 distinct botanical groups (Air Purifying, Aromatic & Fragrant, and Low Maintenance). Includes real-time Redux cart state integration, persistent navigation bar, live cart count badge, and instant button disabling upon addition.
- **Dynamic Cart (CartItem)**: Live updates for individual quantities, line subtotals, overall cart balance, intuitive increment/decrement (`updateQuantity`), `cart-item-delete` button, and checkout flow.

---

## ✨ Features

- **Redux Toolkit State Management**: Centralized store handling cart state, item additions (`addItem`), item removals (`removeItem`), and responsive quantity adjustments (`updateQuantity`).
- **Category Grouping**:
  1. *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera)
  2. *Aromatic & Fragrant Plants* (English Lavender, Rosemary Bush, Sweet Jasmine, Lemon Balm, Spearmint, Eucalyptus)
  3. *Low Maintenance & Resilient* (ZZ Plant, Golden Pothos, Cast Iron Plant, Jade Plant, Chinese Evergreen, Haworthia Zebra)
- **Responsive & Accessible Design**: Optimized for mobile, tablet, and desktop viewports with accessible ARIA labels.
- **Instant Cart Synchronization**: Total items count badge displayed across navigation bars in all views.

---

## 🛠️ Technologies Used

- **React 19** – Functional components and hooks (`useState`, `useEffect`)
- **Redux Toolkit (`@reduxjs/toolkit`) & React Redux** – Global store and slice state management
- **Vite** – Next-generation high-speed build tool and dev server
- **Lucide React** – Clean, modern SVG iconography
- **CSS3 / Vanilla CSS** – Custom responsive layouts, CSS Grid, Flexbox, glassmorphism, and botanical aesthetics
- **Google Fonts** – *Playfair Display* & *Outfit* typography

---

## 🚀 Installation and Run Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/Diksha2506/e-plantShopping.git
cd e-plantShopping
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed in the terminal (typically `http://localhost:5173`).

### 4. Build for production
```bash
npm run build
```

---

## 📁 Submission File Structure

| Required File | Path | Description |
|:---|:---|:---|
| **README.md** | `README.md` | Exact `e-plantShopping` project description, features, tech stack, and setup guides |
| **AboutUs.jsx** | `src/AboutUs.jsx` | Company story, mission, products, and customer benefits |
| **App.css** | `src/App.css` | `.background-image` class with botanical background image, styling, and typography |
| **App.jsx** | `src/App.jsx` | "Welcome to Paradise Nursery" heading and "Get Started" navigation |
| **CartSlice.jsx** | `src/CartSlice.jsx` | Redux slice with `addItem`, `removeItem`, and `updateQuantity` reducers |
| **ProductList.jsx** | `src/ProductList.jsx` | 3 categories, 18 plants, Cart counter, and `disabled={addedToCart[plant.name]}` Add to Cart controls |
| **CartItem.jsx** | `src/CartItem.jsx` | Line totals, quantity management, `cart-item-delete`, and checkout flows |

---

## 📜 License
This project was developed for the **IBM Full Stack Software Developer Specialization** on Coursera.