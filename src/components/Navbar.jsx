import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoLight from "../assets/Vanshaktilogo_video.svg";
import LogoDark from "../assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/global.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setIsScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const isTransparent = isHome && !isScrolled;

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top custom-navbar"
      style={{
        backgroundColor: isTransparent
          ? "rgba(255,255,255,0.08)"
          : "#ffffff",

        backdropFilter: isTransparent ? "blur(20px)" : "none",
        WebkitBackdropFilter: isTransparent ? "blur(20px)" : "none",

        // width: "calc(100% - 32px)",
        maxWidth: "1200px",
        minHeight: "64px",

        top: "49px",
        left: "50%",
        borderRadius: "56px",
        transform: "translateX(-50%)",

        padding: "8px 8px",
        // margin : "2px 4px",
       

        border: isTransparent
          ? "1px solid rgba(255,255,255,0.25)"
          : "1px solid rgba(0,0,0,0.08)",

        borderRadius: "56px",

        boxShadow: isTransparent
          ? "0 8px 32px rgba(0,0,0,0.08)"
          : "0 4px 20px rgba(0,0,0,0.08)",

        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
    >
      <div className="container-fluid px-0">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center m-0"
          to="/"
        >
          <img
            src={isTransparent ? LogoLight : LogoDark}
            alt="Logo"
            style={{
              width: "clamp(120px, 12vw, 148px)",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: isTransparent ? "invert(1)" : "invert(0)",
            }}
          ></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul
            className="navbar-nav mx-auto justify-content-center"
            style={{ gap: "23px" }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Food Safety", path: "/food-safety" },
              { name: "Sustainability", path: "/sustainability" },
            ].map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  className="nav-link"
                  to={item.path}
                  style={{
                    color: isTransparent ? "#ffffff" : "#04303B",
                    fontWeight: 400,
                    fontSize: "16px",
                    transition: "0.3s ease",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-end">
            <Link
              to="/contact"
              className="btn partner-btn"
              style={{
                backgroundColor: "#D0F24C",
                color: "#101010",
                borderRadius: "50px",
                padding: "12px 28px",
                fontWeight: 500,
                border: "none",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              Partner With Us
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;