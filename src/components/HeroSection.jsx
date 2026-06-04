import React from "react";
import { useNavigate } from "react-router-dom";

<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

import HeroVideo from "../assets/Vanshakti video.mp4";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
  id="hero"
  style={{
    position: "relative",
    minHeight: "810px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",
  }}
>
      
      <video
  autoPlay
  muted
  loop
  playsInline
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  }}
  className="HeroVideo"
>
  <source src={HeroVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      
      <div
 style={{
  position: "absolute",
  inset: 0,
  zIndex: 2,
  background: `
    radial-gradient(
      120% 140% at 100% 60%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.73) 70%,
      rgba(0, 0, 0, 0.84) 100%
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.0) 40%,
      rgba(0, 0, 0, 0.52) 100%
    )
  `,
}}
/>
      
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          paddingBottom: "30px",
        }}
      >
        <div className="hero-container">
          <div className="hero-col">
            
            <div className="hero-badge">
              Integrated Agricultural Ecosystem
            </div>

          
            <h1 className="hero-heading"></h1>

          
            <p className="hero-desc">
              Connecting cultivation, products, and market networks through structured
              agricultural systems built for reliability, quality, and long-term growth.
            </p>

         
            <button
              className="hero-btn"
              onClick={() => navigate("/contact")}
            >
              Partner with us →
            </button>
          </div>
        </div>
      </div>

    
      <style>{`
        .hero-container {
          max-width: 1200px;
          margin: 200px auto;
          padding: 0 24px;
        }

        .hero-col {
          max-width: 820px;
        }

        .hero-badge {
          display: inline-block;
          font-family:DM Sans;
          border: 1px solid rgba(255,255,255,0.75);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 400;
          margin-bottom: 28px;
          // backdrop-filter: blur(8px);
          background: rgba(255,255,255,0.08);
          letter-spacing: 0.3px;
        }

        /* ── RESPONSIVE HEADLINES VIA CSS CONTENT ── */
        .hero-heading {
          color: #ffffff;
          font-size: 60px;
          font-weight: 500;
          line-height: 1.08;
          margin-bottom: 15px;
          letter-spacing: -1.5px;
        }
        
        /* Desktop Headline Setup */
        .hero-heading::before {
          content: "Building a Connected\\A Agricultural Ecosystem";
          white-space: pre-wrap;
        }

        .hero-desc {
          color: #e8e8e8;
          font-size: 18px;
          line-height: 1.75;
          max-width: 820px;
          margin-bottom: 15px;
        }

        .hero-btn {
          background: #d8f03d;
          color: #111111;
          border: none;
          border-radius: 50px;
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 600; 
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(216,240,61,0.35);
        }

        /* Tablet Viewports */
        @media (max-width: 992px) {
          .hero-heading { 
            font-size: 52px; 
            letter-spacing: -1px; 
          }
          /* Headline variation text for Tablet sizes */
          .hero-heading::before {
            content: "Building a Connected\\A Agricultural Ecosystem";
          }
          .hero-desc { font-size: 17px; }
        }

        /* Mobile Viewports */
        @media (max-width: 768px) {
          .hero-container { padding: 10px 20px; }
          .hero-col { text-align: center; }

          .hero-heading {
            font-size: 36px;
            letter-spacing: -0.5px;
            line-height: 1.2;
          }
          /* Simplified Headline variation text for Mobile sizes */
          .hero-heading::before {
            content: "Cultivating Growth Through Connected Agriculture ";
          }
          .hero-desc {
            font-size: 16px;
            line-height: 1.7;
            max-width: 100%;
          }
          .hero-btn { width: 100%; }
        }

        @media (max-width: 480px) {
          .hero-heading { font-size: 28px; }
          .hero-badge { font-size: 13px; padding: 8px 18px; }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;