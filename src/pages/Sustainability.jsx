import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SustainabilityBg from "../assets/sustaibilityhero.png";
import SustainabilityMobileBg from "../assets/SustainabilityMobile.png";
import FutureGenerationImg from "../assets/future-generation.png";

import soilImg from "../assets/soil-health.png";
import waterImg from "../assets/water.jpg";
import responsibleImg from "../assets/responsible.png";
import ecosystemImg from "../assets/long-term-ecosystem.jpg";

import SustainabilityQuoteImg from "../assets/sustainability-quote.png";

import SoilImg from "../assets/soil-management.png";
import ResourceImg from "../assets/resource-efficiency.png";
import EcosystemImg from "../assets/ecosystem-awareness.png";

function useScrollReveal(threshold = 0.15) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    document.title =
      "Sustainable Agriculture & Environmental Responsibility | VanShakti";

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Discover VanShakti's commitment to sustainable agriculture through soil health management, water conservation, ecosystem protection, responsible farming practices, and long-term agricultural resilience."
      );

    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "sustainable agriculture, soil health, water conservation, ecosystem protection, responsible farming, regenerative agriculture, environmental sustainability, climate smart farming, agricultural sustainability, eco friendly farming, VanShakti sustainability"
      );

    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute(
        "content",
        "Sustainable Agriculture & Environmental Responsibility | VanShakti"
      );

    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        "Learn how VanShakti promotes sustainable farming through soil management, resource efficiency, ecosystem awareness, and long-term agricultural growth."
      );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold }
    );

    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [elementRef, isIntersecting];
}

const Sustainability = () => {
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [generationRef, generationVisible] = useScrollReveal(0.15);
  const [areasRef, areasVisible] = useScrollReveal(0.12);
  const [quoteRef, quoteVisible] = useScrollReveal(0.15);
  const [practicesRef, practicesVisible] = useScrollReveal(0.1);

  const cards = [
    { title: "Soil Health", desc: "Supporting healthier and more productive agricultural land.", img: soilImg },
    { title: "Water Conservation", desc: "Encouraging responsible and efficient water usage.", img: waterImg },
    { title: "Responsible Practices", desc: "Promoting sustainable and balanced agricultural methods.", img: responsibleImg },
    { title: "Long-Term Ecosystems", desc: "Building systems designed for future agricultural resilience.", img: ecosystemImg },
  ];

  const practices = [
    { title: "Soil Management", subtitle: "PRACTICE 01", desc: "We implement regenerative techniques that focus on biological soil health, ensuring that the land remains productive for decades rather than seasons.", img: SoilImg, reverse: false },
    { title: "Resource Efficiency", subtitle: "PRACTICE 02", desc: "Through precision data and advanced monitoring, we reduce unnecessary waste in water, nutrients, and energy, maximizing the utility of every precious input.", img: ResourceImg, reverse: true },
    { title: "Ecosystem Awareness", subtitle: "PRACTICE 03", desc: "Our approach respects the local flora and fauna, creating a symbiotic relationship between agricultural production and the surrounding natural habitats.", img: EcosystemImg, reverse: false },
  ];

  return (
    <div className="sus-page-wrapper">

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        .sus-page-wrapper {
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          background-color: #fafafa;
        }

        /* ── HERO ── */
        .sus-hero {
          background-image: url('${SustainabilityBg}');
          background-size: cover;
          background-position: center top;
          color: white;
          position: relative;
          min-height: 700px;
          display: flex;
          align-items: center;
          padding: 120px 80px;
        }
        .sus-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .sus-hero-content {
          max-width: 580px;
          position: relative;
          z-index: 2;
        }
        .sus-badge {
          display: inline-block;
          border: 1px solid rgba(247, 248, 246, 0.8);
          border-radius: 16px;
          padding: 7px 16px;
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          margin-bottom: 18px;
          backdrop-filter: blur(4px);
          background: rgba(255,255,255,0.08);
        }
        .sus-hero-title {
          font-weight: 500;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .sus-hero-desc {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.65;
          font-weight: 400;
          opacity: 0.95;
          max-width: 520px;
        }

        /* ── FUTURE GENERATIONS ── */
        .sus-generation-section {
          padding: 80px 0 60px;
        }
        .sus-generation-title {
          font-size: 40px;
          font-weight: 400;
          color: #065532;
          line-height: 1.25;
          margin-bottom: 20px;
        }
        .sus-generation-title-underline {
          width: 150px;
          height: 2px;
          background: #065532;
          margin-bottom: 20px;
          border-radius: 2px;
        }
        .sus-generation-desc {
          line-height: 1.75;
          color: #4a4a4a;
          font-size: 20px;
        }
        .sus-generation-img {
          border-radius: 18px;
          width: 100%;
          max-width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          box-shadow: 0 8px 32px rgba(6,85,50,0.10);
        }

        /* ── FOUR KEY AREAS ── */
        .sus-areas-wrapper {
          background-color: #F4F4EE;
          border-radius: 20px;
          margin: 60px auto;
          padding: 70px 40px;
          max-width: 1200px;
        }
        .sus-card {
          background-size: cover;
          background-position: center;
          border-radius: 16px;
          width: 100%;
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: flex-end;
          padding: 28px;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .sus-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.28);
        }
        .sus-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 60%, transparent 100%);
          z-index: 1;
        }
        .sus-card-content {
          position: relative;
          z-index: 2;
        }
        .sus-card-title {
          font-weight: 700;
          font-size: 1.35rem;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }
        .sus-card-desc {
          font-size: 0.92rem;
          line-height: 1.45;
          opacity: 0.92;
          font-weight: 400;
        }

        /* ── QUOTE ── */
        .sus-quote-section {
          position: relative;
          text-align: center;
          color: white;
          width: 100%;
          margin: 60px 0;
          overflow: hidden;
          aspect-ratio: 16 / 6;
          min-height: 220px;
        }
        .sus-quote-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .sus-quote-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.32);
          z-index: 1;
        }
        .sus-quote-text-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          width: 90%;
          max-width: 760px;
          padding: 0 20px;
        }
        .sus-quote-text {
          font-weight: 500;
          font-size: clamp(1.6rem, 4vw, 2.6rem);
          line-height: 1.35;
          letter-spacing: 0.01em;
          text-shadow: 0px 3px 16px rgba(0,0,0,0.5);
        }

        /* ── PRACTICES ── */
        .sus-practices-section {
          padding: 40px 0 80px;
        }
        .sus-practice-row {
          margin-bottom: 72px;
        }
        .sus-practice-row:last-child {
          margin-bottom: 0;
        }
        .sus-practice-img {
          width: 100%;
          max-width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          box-shadow: 0 6px 24px rgba(0,0,0,0.10);
        }
        .sus-practice-subtitle {
          color:#006B33;
          font-weight: 600;
          letter-spacing: 0;
          font-size: 16pxs;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .sus-practice-title {
          font-weight: 400;
          font-size: 40px;
          color: #191C1A;
          margin-bottom: 16px;
          line-height: 48px;
        }
        .sus-practice-desc {
          line-height: 1.75;
          color: #000000;
          font-size: 24px;
        }

        /* ── SCROLL REVEAL ── */
        .sus-reveal-container .sus-reveal-element {
          opacity: 0;
          transform: translateY(-30px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .sus-reveal-container.sus-active .sus-reveal-element {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 100ms !important; }
        .delay-2 { transition-delay: 240ms !important; }
        .delay-3 { transition-delay: 380ms !important; }

        /* ── TABLET (max 991px) ── */
        @media (max-width: 991.98px) {
          .sus-hero {
            padding: 100px 40px;
            min-height: 580px;
          }
          .sus-areas-wrapper {
            padding: 50px 24px;
            margin: 40px 16px;
            border-radius: 16px;
          }
          .sus-generation-section { padding: 60px 0 40px; }
          .sus-quote-section { margin: 40px 0; }
        }

        /* ── MOBILE (max 767px) ── */
        @media (max-width: 767.98px) {
          .sus-hero {
            background-image: url('${SustainabilityMobileBg}');
            background-position: center center;
            padding: 80px 20px 60px;
            min-height: 480px;
            text-align: left;
            align-items: flex-end;
          }
          .sus-hero-content {
            max-width: 100%;
          }
          .sus-hero-title {
            font-size: 2rem;
            line-height: 1.15;
          }
          .sus-hero-desc {
            font-size: 0.97rem;
            max-width: 100%;
          }
          .sus-badge {
            font-size: 13px;
            padding: 6px 13px;
          }

          .sus-generation-section {
            padding: 40px 0 30px;
          }
          .sus-generation-title {
            font-size: 1.65rem;
            margin-top: 24px;
          }
          .sus-generation-img {
            border-radius: 14px;
          }

          .sus-areas-wrapper {
            padding: 36px 16px;
            margin: 30px 12px;
            border-radius: 14px;
          }
          .sus-card {
            padding: 16px;
          }
          .sus-card-title { font-size: 1.2rem; }

          .sus-quote-section {
            margin: 30px 0;
            aspect-ratio: 16 / 7;
          }
          .sus-quote-text {
            font-size: 1.4rem;
          }

          .sus-practice-img {
            border-radius: 14px;
          }
          .sus-practice-row {
            margin-bottom: 48px;
          }
          .sus-practices-section { padding: 20px 0 60px; }
        }

        /* ── SMALL MOBILE (max 480px) ── */
        @media (max-width: 480px) {
          .sus-hero {
            padding: 70px 16px 50px;
            min-height: 420px;
          }
          .sus-hero-title { font-size: 1.75rem; }
          .sus-hero-desc { font-size: 0.93rem; }

          .sus-areas-wrapper {
            padding: 28px 12px;
            margin: 24px 8px;
          }
          .sus-card-title { font-size: 1.1rem; }
          .sus-card-desc { font-size: 0.85rem; }

          .sus-quote-section {
            aspect-ratio: 16 / 9;
            margin: 24px 0;
          }
          .sus-quote-text { font-size: 1.15rem; }
          .sus-practice-title { font-size: 1.4rem; }
        }
      `}</style>

      {/* ── 1. HERO SECTION ── */}
      <div
        ref={heroRef}
        className={`sus-hero sus-reveal-container ${heroVisible ? "sus-active" : ""}`}
      >
        <div className="sus-hero-content">
          <div className="sus-reveal-element delay-1">
            <div className="sus-badge">Sustainability</div>
          </div>
          <div className="sus-reveal-element delay-2">
            <div className="sus-hero-title">Growing with Responsibility</div>
          </div>
          <div className="sus-reveal-element delay-3">
            <div className="sus-hero-desc">
              VanShakti believes sustainable agriculture aligns with responsible practices that protect resources, strengthen ecosystems, and support long-term agricultural growth.
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. FUTURE GENERATIONS SECTION ── */}
      <div
        ref={generationRef}
        className={`container sus-generation-section sus-reveal-container ${generationVisible ? "sus-active" : ""}`}
      >
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-md-6 order-md-1 order-2 sus-reveal-element delay-1">
            
            <div className="sus-generation-title">Building for Future Generations</div>
            <div className="sus-generation-title-underline" />
            <div className="sus-generation-desc">
              Sustainability is not just about production—it is about creating systems that support healthier soil, efficient resource use, and long-term environmental balance. At VanShakti, we integrate ecological wisdom with precision technology to ensure our footprint is as gentle as it is effective.
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 sus-reveal-element delay-2">
            <img
              src={FutureGenerationImg}
              alt="future-generation"
              className="sus-generation-img"
            />
          </div>
        </div>
      </div>

      {/* ── 3. FOUR KEY AREAS ── */}
      <div className="container-fluid px-3 px-md-4">
        <div
          ref={areasRef}
          className={`sus-areas-wrapper sus-reveal-container ${areasVisible ? "sus-active" : ""}`}
        >
          <div className="row g-3 g-md-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 sus-reveal-element"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className="sus-card"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="sus-card-overlay" />
                  <div className="sus-card-content">
                    <div className="sus-card-title">{card.title}</div>
                    <div className="sus-card-desc">{card.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. SUSTAINABILITY QUOTE ── */}
      <div 
              ref={quoteRef}
              className={`sus-reveal-container ${quoteVisible ? "sus-active" : ""}`}
              style={{ position: "relative", textAlign: "center", color: "white", height: "400px", width: "100%", margin: "60px 0", overflow: "hidden" }}
            >
              <img 
                src={SustainabilityQuoteImg} 
                alt="sustainability quote" 
                style={{ width: "100%", maxWidth: "1440px", height: "100%", objectFit: "cover", borderRadius: "5px", marginInline: "auto", display: "block" }} 
              />
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.25)", maxWidth: "1440px", marginInline: "auto", borderRadius: "5px" }} />
              <div 
                className="sus-reveal-element delay-1"
                style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2, padding: "0 0px", width: "100%" }}
              >
                <div style={{ fontWeight: "500", fontSize: "2.5rem", lineHeight: "1.3", letterSpacing: "0.5px", textShadow: "0px 3px 12px rgba(0,0,0,0.5)" }}>
                  "Sustainability begins at the source."
                </div>
              </div>
            </div>

      {/* ── 5. PRACTICES SECTION ── */}
      <div
        ref={practicesRef}
        className={`container sus-practices-section sus-reveal-container ${practicesVisible ? "sus-active" : ""}`}
      >
        {practices.map((practice, index) => (
          <div
            key={index}
            className={`row g-4 g-lg-5 align-items-center sus-practice-row ${practice.reverse ? "flex-md-row-reverse" : ""}`}
          >
            <div className="col-md-6 sus-reveal-element delay-1">
              <img
                src={practice.img}
                alt={practice.title.toLowerCase().replace(" ", "-")}
                className="sus-practice-img"
              />
            </div>
            <div className="col-md-6 sus-reveal-element delay-2">
              <div className="sus-practice-subtitle">{practice.subtitle}</div>
              <div className="sus-practice-title">{practice.title}</div>
              <div className="sus-practice-desc">{practice.desc}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Sustainability;