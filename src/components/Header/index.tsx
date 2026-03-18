import { useState } from "react";
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header__logo">
          <div className="header__logo-icon">
            <img src="src/assets/icons/Header/logo.svg" alt="Logo icon" />
          </div>
          <span className="header__logo-text">
            <img src="src/assets/icons/Header/logoText.svg" alt="Moon" />
          </span>
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--active" : ""}`}>
          <a href="/" className="header__link">Home</a>
          <a href="/shop" className="header__link">Shop</a>
          <a href="/about" className="header__link">About</a>
          <a href="/contact" className="header__link">Contact</a>
        </nav>

        <div className="header__actions">
          <button className="header__icon-btn" aria-label="Search">
            <img src="src/assets/icons/Header/Search.svg" alt="" />
          </button>

          <button className="header__icon-btn" aria-label="Profile">
            <img src="src/assets/icons/Header/Avatar.svg" alt="" />
          </button>

          <button className="header__icon-btn" aria-label="Wishlist">
            <img src="src/assets/icons/Header/Heart.svg" alt="" />
          </button>

          <button
            className="header__icon-btn header__icon-btn--cart"
            aria-label="Cart"
          >
            <img src="src/assets/icons/Header/Cart.svg" alt="" />
          </button>
        </div>

        <button
          className={`header__burger ${menuOpen ? "header__burger--active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;