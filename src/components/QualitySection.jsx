import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import images properly
import farm1 from "../assets/homeend.jpg";
import farm2 from "../assets/homeend1.png";
import farm3 from  "../assets/homeend2.png";
import farm4 from  "../assets/homeend3.png";

// Reusable Scroll Hook
function useScrollReveal() {
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
      { threshold: 0.15 }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return [elementRef, isIntersecting];
}

function QualitySection() {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`cta-section ${isVisible ? "scroll-triggered" : ""}`}
    >
      <div className="container">

        {/* HEADER */}
        <div className="cta-header">
          <div>
            <div className="cta-badge">Get Started</div>
            <h2 className="cta-title">Partner with VanShakti</h2>
          </div>

          <button className="cta-btn" onClick={() => navigate("/contact")}>
            Get started →
          </button>
        </div>

        {/* BODY */}
        <div className="cta-body">

          {/* IMAGE MOSAIC */}
          <div className="image-mosaic">

            <div className="mosaic-column">
              <div className="img-box img-main-left">
                <img src={farm1} alt="Farm 1" />
              </div>
              <div className="img-box img-right-top">
                <img src={farm2} alt="Farm 2" />
              </div>
            </div>

            <div className="mosaic-column">
              <div className="img-box img-bottom-left">
                <img src={farm3} alt="Farm 3" />
              </div>
              <div className="img-box img-bottom-right">
                <img src={farm4} alt="Farm 4" />
              </div>
            </div>

          </div>

          {/* STEPS */}
          <div className="steps-list">
            {[
              {
                n: 1,
                title: "Share What You Need",
                text: "Tell us your product requirements, volumes, and locations.",
              },
              {
                n: 2,
                title: "We Take It Forward",
                text: "Our team handles sourcing, planning, and coordination across the network.",
              },
              {
                n: 3,
                title: "Everything in Sync",
                text: "Quality checks, logistics, and movement are managed seamlessly.",
              },
              {
                n: 4,
                title: "Supply You Can Rely On",
                text: "Get consistent, predictable supply without the usual complexity.",
                last: true,
              },
            ].map((step, index) => (
              <div
                key={step.n}
                className={`step-box${step.last ? " step-box--last" : ""}`}
                style={{ "--step-index": index }}
              >
                <div className="step-number">{step.n}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CSS (unchanged) */}
      <style>{`
       .cta-section {
  background: #f5f5f2;
  padding: 100px 0 110px;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
  overflow: hidden;
  text-align: left;
}

/* HEADER */
.cta-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 56px;
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.9s ease;
}

/* TITLE */
.cta-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 500;
  color: #000000;
}

/* BADGE */
.cta-badge {
  display: inline-block;
  padding: 6px 14px;
  border: 1px solid #0a7a3d;
  border-radius: 20px;
  font-size: 14px;
  color: #000000;
  margin-bottom: 10px;
}

/* BUTTON */
.cta-btn {
  background: #d7f03d;
  border: none;
  border-radius: 50px;
  padding: 14px 32px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* MAIN LAYOUT */
.cta-body {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
}

/* IMAGE MOSAIC */
.image-mosaic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  opacity: 0;
  transform: translateY(25px);
  transition: all 1s ease;
}

.mosaic-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.img-box {
  overflow: hidden;
  border-radius: 14px;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.img-box:hover img {
  transform: scale(1.05);
}

.img-main-left { height: 260px; }
.img-right-top { height: 150px; }
.img-bottom-left { height: 150px; }
.img-bottom-right { height: 260px; }

/* STEPS LIST */
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-left: 10px;
}

/* STEP BOX */
.step-box {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.9s ease;
}

.step-box:hover {
  background: rgba(208, 244, 77, 0.08);
  transform: translateX(5px);
}

/* NUMBER CIRCLE */
.step-number {
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 50%;
  background-color: #D0F44D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: #000;
  flex-shrink: 0;
  margin-top: 2px;
  box-shadow: 0 6px 15px rgba(208, 244, 77, 0.35);
}


/* Horizontal line after text */
.step-box:not(.step-box--last) .step-content::after {
  content: "";
  position: absolute;
  top: 115%;
  right: 20px;
  width: 450px;
  height: 1px;
  background: #71afaa7a;
  z-index: 999;
}

/* TEXT */
.step-content {
  display: flex;
  flex-direction: column;
}

.step-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #191C1A;
}

.step-text {
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #191C1A;
}

/* SCROLL ANIMATION ACTIVE STATE */
.scroll-triggered .cta-header,
.scroll-triggered .image-mosaic,
.scroll-triggered .step-box {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .cta-body {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cta-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
      `}</style>
    </section>
  );
}

export default QualitySection;