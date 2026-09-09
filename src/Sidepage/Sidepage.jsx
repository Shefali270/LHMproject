import { useState } from "react";
import "./Sidepage.css";

import logo from "../Header/splashLogo.png";
import searchLogo from "../Header/seach logo.png";

function Sidepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE SEARCH + 3 LINE BUTTON ================= */}

      <div className="mobile-header-buttons">

        {/* SEARCH */}
        <button
          className="mobile-search-button"
          aria-label="Search"
        >
          <img
            src={searchLogo}
            alt="Search"
          />
        </button>


        {/* 3 LINE */}
        <button
          className="side-menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* ================= MOBILE SIDE MENU ================= */}

      {menuOpen && (
        <div className="sidepage-overlay">

          <div className="sidepage">

            {/* ================= LOGO + CLOSE ================= */}

            <div className="sidepage-header">

              <img
                src={logo}
                alt="Live Mentor Hub"
                className="sidepage-logo"
              />

              <button
                className="sidepage-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                ✕
              </button>

            </div>


            {/* ================= MENU ITEMS ================= */}

            <nav className="sidepage-nav">

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Explore Learning
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Mentors
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Institutions
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Resources
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

            </nav>


            {/* ================= LOGIN + SIGN ================= */}

            <div className="sidepage-buttons">

              <a
                href="/"
                className="sidepage-login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </a>

              <a
                href="/"
                className="sidepage-sign"
                onClick={() => setMenuOpen(false)}
              >
                Sign
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Sidepage;