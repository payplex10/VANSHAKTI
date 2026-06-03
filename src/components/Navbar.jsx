import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const hero = document.getElementById("hero");

    if (hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setIsScrolled(window.scrollY >= heroBottom - 120);
    }
  };

  if (isHome) {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }

  return () => window.removeEventListener("scroll", handleScroll);
}, [isHome]);

  const isTransparent = isHome && !isScrolled;

  return (
  <nav
  className="navbar navbar-expand-lg fixed-top"
  style={{
    backgroundColor: isTransparent ? "transparent" : "#ffffff",

    /* ✅ BLUR ONLY WHEN TRANSPARENT */
    backdropFilter: isTransparent ? "blur(14px)" : "none",
    WebkitBackdropFilter: isTransparent ? "blur(14px)" : "none",

    /* ✅ SIZE FROM DESIGN */
    width: "1200px",
    maxWidth: "1320px",
    height: "64px",

    /* ✅ CENTER POSITIONING */
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",

    /* spacing */
    padding: "8px 24px",

    /* BORDER */
    border: isTransparent
      ? "1px solid rgba(255,255,255,0.35)"
      : "1px solid #FFFFFF1A",

    borderRadius: "56px",

    /* SHADOW */
    boxShadow: isTransparent
      ? "none"
      : "0 4px 20px rgba(0,0,0,0.08)",

    zIndex: 1000,
    transition: "all 0.3s ease",

    /* IMPORTANT */
    position: "fixed",
  }}
>
      <div className="container-fluid px-4">
        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center m-0" to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "148px",
              height: "45px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: isTransparent ? "invert(1)" : "invert(0)",
            }}
          ></span>
        </button>

        {/* NAVBAR MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav mx-auto justify-content-center"
            style={{ gap: "28px" }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Productsss", path: "/products" },
              { name: "Food Safety", path: "/food-safety" },
              { name: "Sustainability", path: "/sustainability" },
            ].map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  className="nav-link"
                  to={item.path}
                  style={{
                    color: isTransparent ? "#ffffff" : "#1F1F1F",
                    fontWeight: 500,
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
              className="btn"
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