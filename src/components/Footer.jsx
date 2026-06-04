import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import CtaBg from "../assets/footerbackground.jpeg";

function useScrollReveal(threshold = 0.05) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [elementRef, isIntersecting];
}

function FooterSection({
  ctaTag = "Join us",
  ctaTitle = "Connecting Farms,\nProducts, and Markets",
  ctaButtonText = "Partner with us",
  ctaButtonPath = "/contact",
}) {
  const navigate = useNavigate();

  const [ctaRef, ctaVisible] = useScrollReveal(0.05);
  const [footerCardRef, footerCardVisible] = useScrollReveal(0.05);

  return (
    <div
      style={{
        backgroundImage: `url(${CtaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "10px",
      }}
    >
      {/* CTA */}
      <section
        ref={ctaRef}
        className={`ft-reveal-parent ${ctaVisible ? "ft-active" : ""}`}
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "8px 20px 150px",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" , color: "#0A2710" , fontSize:"20px" , fontWeight:400}}>
          <span>{ctaTag}</span>

          <h2>
            {ctaTitle.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" ,  color: "#0A2710" , fontSize:"56px" , fontWeight:400}}>
                {line}
              </span>
            ))}
          </h2>

          <button
            onClick={() => navigate(ctaButtonPath)}
            style={{
              backgroundColor: "#D0F44D",
              color: "#04303B",
              border: "none",
              borderRadius: "30px",
              padding: "12px 32px",
              cursor: "pointer",
            }}
          >
            {ctaButtonText} →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <section
        ref={footerCardRef}
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 15px",
        }}
      >
        <div
          style={{
            // maxWidth: "1200px",
            width: "calc(100% - 30px)",
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: "12px",
          }}
        >
          <div style={{ padding: "60px", boxSizing: "border-box" }}>

            <div style={{ display: "flex", flexWrap: "wrap" }}>

              {/* BRAND */}
              <div style={{ width: "32%" }}>
                <img src={Logo} alt="Logo" style={{ width: "145px", padding: "0 , 10px " }} />
                <p>VanShakti brings together farmers, infrastructure, and markets to create a structured and reliable farm-to-market ecosystem.</p>
                <p>info@vanshakti.com</p>
              </div>

              {/* LINKS */}
              <div style={{ width: "45%", display: "flex" }}>

                {/* QUICK LINKS */}
                <div style={{ flex: 1 }}>
                  <h6 className="footer-heading">Quick links</h6>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {[
                      { label: "Home", path: "/" },
                      { label: "About us", path: "/about" },
                      { label: "Products", path: "/products" },
                      { label: "Sustainability", path: "/sustainability" },
                    ].map((item) => (
                      <li key={item.label}>
                        <span
                          onClick={() => navigate(item.path)}
                          className="footer-link"
                        >
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NAVIGATION */}
                <div style={{ flex: 1 }}>
                  <h6 className="footer-heading"> Navigation</h6>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {[
                      { label: "Contact us", path: "/contact" },
                      { label: "Our Network", path: "/ournetwork" },
                      { label: "Blogs", path: "/blog" },
                      { label: "Terms", path: "#" },
                    ].map((item) => (
                      <li key={item.label}>
                        <span
                          onClick={() => navigate(item.path)}
                          className="footer-link"
                        >
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* SOCIAL */}
              <div style={{ width: "20%" }}>
                <h6 className="footer-heading" >Social Handle</h6>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    { name: "Facebook", url: "https://facebook.com" },
                    { name: "Instagram", url: "https://instagram.com" },
                    { name: "Youtube", url: "https://youtube.com" },
                    { name: "Twitter", url: "https://twitter.com" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <hr />

            <p style={{ textAlign: "center" }}>
              ©2026 Vanshakti. All Rights Reserved.
            </p>

          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
  /* ================= BASE LINKS ================= */
  .footer-link {
    color: #000;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s ease;
    text-decoration: none;
    margin-bottom: 8px;
  }

  .footer-link:hover {
    color: #1e6bff !important;
    transform: translateX(5px);
  }

  .social-link {
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    margin-bottom: 8px;
  }

  .social-link:hover {
    color: #1e6bff !important;
    transform: translateX(5px);
  }

  .footer-heading {
    font-size: 18px !important;
    color: #04303B !important;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 28.8px;
    letter-spacing: -0.36px;
    margin: 0 0 18px 0;
  }

  /* ================= MAIN LAYOUT FIX ================= */
  div[style*="display: flex"][style*="flex-wrap"] {
    display: flex !important;
    flex-wrap: wrap;
    gap: 30px;
  }

  /* LEFT + RIGHT BALANCED FIX */
  div[style*="width: 32%"],
  div[style*="width: 45%"],
  div[style*="width: 20%"] {
    box-sizing: border-box;
  }

  /* Make layout equal feeling (IMPORTANT FIX) */
  div[style*="width: 32%"] {
    flex: 1.2;
    min-width: 260px;
  }

  div[style*="width: 45%"] {
    flex: 2;
    min-width: 320px;
    display: flex;
    gap: 40px;
  }

  div[style*="width: 20%"] {
    flex: 1;
    min-width: 220px;
  }

  /* ================= TABLET ================= */
  @media (max-width: 992px) {
    div[style*="width: 45%"] {
      flex-direction: column;
      gap: 20px;
    }
  }

  /* ================= MOBILE ================= */
 @media (max-width: 768px) {
  div[style*="display: flex"][style*="flex-wrap"] {
    flex-direction: column;
  }

  div[style*="width: 32%"],
  div[style*="width: 20%"] {
    width: 100% !important;
    flex: 100%;
  }

  div[style*="width: 45%"] {
    width: 100% !important;
    flex: 100%;
    flex-direction: row !important;
    gap: 20px;
  }

    div[style*="padding: 60px"] {
      padding: 30px !important;
    }

    img {
      max-width: 140px;
    }

    .footer-heading {
      font-size: 16px !important;
    }

    .footer-link,
    .social-link {
      font-size: 14px;
    }
  }

  /* ================= SMALL MOBILE ================= */
  @media (max-width: 480px) {
    div[style*="padding: 60px"] {
      padding: 20px !important;
    }
  }
`}</style>
    </div>
  );
}

export default FooterSection;