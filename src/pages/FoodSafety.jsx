import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HeroBg from "../assets/foodhero.png";
import QualityIcon from "../assets/Icon3.png";
import HygienicIcon from "../assets/Icon.png";
import PackagingIcon from "../assets/Icon (1).png";
import ProcessIcon from "../assets/Icon (2).png";
import QualityBanner from "../assets/foodquality.jpg";

import FSSAI from "../assets/logo1.png";
import APEDA from "../assets/logo2.png";
import FSSC from "../assets/logo3.png";
import GLOBALGAP from "../assets/logo4.png";
import BRGCS from "../assets/logo5.png";
import FAIRTRADE from "../assets/logo6.png";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal(threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    document.title = "Food Safety & Quality Standards | VanShakti Agriculture";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "VanShakti follows strict food safety, quality inspection, hygienic handling, packaging standards, and operational monitoring to ensure safe, reliable, and high-quality agricultural products.");
    document.querySelector('meta[name="keywords"]')?.setAttribute("content", "food safety, food quality, agricultural quality standards, FSSAI, food certification, hygienic handling, packaging standards, agricultural safety, food compliance, sustainable agriculture, VanShakti");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Food Safety & Quality Standards | VanShakti Agriculture");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Learn how VanShakti maintains food safety, quality assurance, certification compliance, and trusted agricultural standards.");
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
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [threshold]);

  return [elementRef, isIntersecting];
}

// ─── Component ────────────────────────────────────────────────────────────────
function FoodSafety() {
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [commitRef, commitVisible] = useScrollReveal(0.15);
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);
  const [opsRef, opsVisible] = useScrollReveal(0.12);
  const [bannerRef, bannerVisible] = useScrollReveal(0.15);
  const [certsRef, certsVisible] = useScrollReveal(0.1);

  const standards = [
    { title: "Quality Inspection", desc: "Standardized checks across every batch to ensure morphological and nutritional integrity meets international standards.", icon: QualityIcon },
    { title: "Hygienic Handling", desc: "Clean processes maintained by automated systems and strictly audited human protocols to prevent cross-contamination.", icon: HygienicIcon },
    { title: "Packaging Standards", desc: "Product integrity preserved through advanced breathable materials and robust sealing technologies for long-haul transport.", icon: PackagingIcon },
    { title: "Process Monitoring", desc: "Structured systems that track climate, moisture, and handling variables in real-time throughout the fulfillment chain.", icon: ProcessIcon },
  ];

  const operationalPoints = [
    { num: "01", title: "Standardized Practices", desc: "Universal protocols applied across all sourcing and processing units to remove variance." },
    { num: "02", title: "Controlled Handling", desc: "Optimized touchpoint reduction to minimize potential risks during transit and sorting." },
    { num: "03", title: "Operational Monitoring", desc: "Constant surveillance of supply chain health through data-driven reporting systems." },
    { num: "04", title: "Reliable Storage", desc: "Cold-chain and ambient storage facilities audited weekly for peak performance." },
    { num: "05", title: "Consistent Management", desc: "A feedback loop of continuous improvement ensuring our standards evolve with global regulations." },
  ];

  const certs = [
    { title: "FSSAI", subtitle: "Food Safety and Standards Authority of India", logo: FSSAI },
    { title: "APEDA", subtitle: "Agriculture & Processed Food Products Export Development Authority", logo: APEDA },
    { title: "FSSC 22000", subtitle: "Food Safety System Certification", logo: FSSC },
    { title: "Global G.A.P.", subtitle: "Global Good Agricultural Practices", logo: GLOBALGAP },
    { title: "BRGCS", subtitle: "Brand Reputation through Compliance Global Standard", logo: BRGCS },
    { title: "Fair Trade", subtitle: "Fair trade is all about better prices", logo: FAIRTRADE },
  ];

  return (
    <div className="fs-page-root">

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className={`fs-hero custom-reveal-container ${heroVisible ? "reveal-active" : ""}`}
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="fs-hero__overlay" />
        <div className="fs-hero__content">
          <div className="fs-badge custom-reveal-element delay-1">Food Safety & Quality</div>
          <h1 className="fs-hero__title custom-reveal-element delay-2">
            Built on Quality,<br />Safety and Trust
          </h1>
          <p className="fs-hero__sub custom-reveal-element delay-3">
            VanShakti follows structured quality and food safety practices to ensure consistency,
            reliability, and confidence across the agricultural ecosystem.
          </p>
        </div>
      </section>

      {/* ── 2. COMMITMENT INTRO ───────────────────────────────────────────── */}
      <section
        ref={commitRef}
        className={`fs-commit custom-reveal-container ${commitVisible ? "reveal-active" : ""}`}
      >
        <div className="fs-commit__inner">
          <div className="fs-commit__left custom-reveal-element delay-1">
            <h2 className="fs-commit__heading">
              Our commitment to<br />Food Safety
            </h2>
          </div>
          <div className="fs-commit__right custom-reveal-element delay-2">
            <div className="fs-commit__divider" />
            <p className="fs-commit__body">
              At VanShakti, we understand that food quality and safety matter to every consumer.
              That's why we follow structured and traceable practices to ensure fresh, reliable,
              and safe produce that meets trusted quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. STANDARDS CARDS ────────────────────────────────────────────── */}
      <div
        ref={cardsRef}
        className={`fs-cards custom-reveal-container ${cardsVisible ? "reveal-active" : ""}`}
      >
        {standards.map((item, idx) => (
          <div
            key={idx}
            className="fs-card custom-reveal-element hover-lift"
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            <div className="fs-card__icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="fs-card__title">{item.title}</div>
            <p className="fs-card__desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ── 4. OPERATIONAL STANDARDS ──────────────────────────────────────── */}
      <section
        ref={opsRef}
        className={`fs-ops custom-reveal-container ${opsVisible ? "reveal-active" : ""}`}
      >
        <div className="fs-ops__inner">
          <div className="fs-ops__left custom-reveal-element delay-1">
            <h2 className="fs-ops__heading">Operational Standards</h2>
            <p className="fs-ops__sub">Our end-to-end framework for ensuring safety at scale.</p>
          </div>
          <div className="fs-ops__right">
            {operationalPoints.map((item, idx) => (
              <div
                key={item.num}
                className="fs-ops__item custom-reveal-element"
                style={{ transitionDelay: `${(idx + 1) * 120}ms` }}
              >
                <span className="fs-ops__num">{item.num}</span>
                <div className="fs-ops__text">
                  <div className="fs-ops__item-title">{item.title}</div>
                  <div className="fs-ops__item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. QUALITY BANNER ─────────────────────────────────────────────── */}
      <section
        ref={bannerRef}
        className={`fs-banner custom-reveal-container ${bannerVisible ? "reveal-active" : ""}`}
        style={{ backgroundImage: `url(${QualityBanner})` }}
      >
        <div className="fs-banner__overlay" />
        <div className="fs-banner__text custom-reveal-element delay-1">
          Maintaining quality at every Stage
        </div>
      </section>

      {/* ── 6. CERTIFICATIONS ─────────────────────────────────────────────── */}
      <section
        ref={certsRef}
        className={`fs-certs custom-reveal-container ${certsVisible ? "reveal-active" : ""}`}
      >
        <h2 className="fs-certs__heading custom-reveal-element delay-1">
          Certifications for food quality and safety
        </h2>
        <p className="fs-certs__sub custom-reveal-element delay-2">
          Our commitment to food quality is reflected through certifications and standards
          recognized by authorities in India and globally.
        </p>
        <div className="fs-certs__grid">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="fs-cert-card custom-reveal-element hover-lift"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="fs-cert-card__logo">
                {cert.logo
                  ? <img src={cert.logo} alt={cert.title} />
                  : <span className="fs-cert-card__no-logo">No Logo</span>
                }
              </div>
              <div className="fs-cert-card__title">{cert.title}</div>
              <div className="fs-cert-card__sub">{cert.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GLOBAL STYLES ─────────────────────────────────────────────────── */}
      <style>{`
        /* ── Base reset ── */
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        .fs-page-root {
          font-family: 'DM Sans', sans-serif;
          background-color: #fafafa;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          color: #1a1a1a;
        }

        /* ── 1. HERO ── */
        .fs-hero {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 700px;
          display: flex;
          align-items: flex-end;
          padding: 80px clamp(24px, 6vw, 120px) 80px;
        }
        .fs-hero__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.42);
          z-index: 1;
        }
        .fs-hero__content {
          position: relative;
          z-index: 2;
          color: #fff;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fs-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 20px;
          width: fit-content;
        }
        .fs-hero__title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 400;
          line-height: 1.18;
          margin: 0;
        }
        .fs-hero__sub {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          opacity: 0.88;
          line-height: 1.65;
          margin: 0;
          max-width: 520px;
        }

        /* ── 2. COMMITMENT INTRO ── */
        .fs-commit {
          background: #F5F5F2;
          padding: clamp(40px, 6vw, 72px) clamp(24px, 6vw, 100px);
        }
        .fs-commit__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: clamp(32px, 5vw, 80px);
          flex-wrap: wrap;
        }
        .fs-commit__left {
          flex: 1;
          min-width: 260px;
        }
        .fs-commit__heading {
          font-size: clamp(1.75rem, 3.5vw, 3rem);
          font-weight: 400;
          color: #0D5C46;
          line-height: 1.22;
          margin: 0;
        }
        .fs-commit__right {
          flex: 1;
          min-width: 260px;
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }
        .fs-commit__divider {
          width: 2px;
          min-height: 80px;
          background: #C9D0C8;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .fs-commit__body {
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          color: #5A5A5A;
          line-height: 1.7;
          font-weight: 300;
          margin: 0;
          max-width: 480px;
        }

        /* ── 3. STANDARDS CARDS ── */
        .fs-cards {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(32px, 5vw, 60px) clamp(24px, 5vw, 60px);
          background: #F4F4F0;
          display: grid;
          /* 2-col on desktop, 1-col on mobile */
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
        }
        .fs-card {
          background: #fff;
          border-radius: 10px;
          padding: clamp(20px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          gap: 14px;
          /* Keep a natural aspect ratio — no fixed aspect-ratio forcing collapse on mobile */
          min-height: 200px;
        }
        .fs-card__icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }
        .fs-card__icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .fs-card__title {
          font-size: clamp(1.1rem, 2vw, 1.55rem);
          font-weight: 500;
          color: #0d5c3a;
          line-height: 1.25;
        }
        .fs-card__desc {
          font-size: clamp(0.85rem, 1.4vw, 0.95rem);
          color: #555;
          line-height: 1.65;
          font-weight: 400;
          margin: 0;
        }

        /* ── 4. OPERATIONAL STANDARDS ── */
        .fs-ops {
          padding: clamp(40px, 6vw, 80px) clamp(24px, 6vw, 100px);
          background: #fafafa;
        }
        .fs-ops__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: clamp(32px, 5vw, 80px);
          flex-wrap: wrap;
          align-items: flex-start;
        }
        .fs-ops__left {
          flex: 0 0 clamp(200px, 28%, 340px);
          position: sticky;
          top: 40px;
        }
        .fs-ops__heading {
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          font-weight: 400;
          color: #0D5C46;
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .fs-ops__sub {
          color: #6c757d;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          margin: 0;
          line-height: 1.6;
        }
        .fs-ops__right {
          flex: 1;
          min-width: 260px;
        }
        .fs-ops__item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: clamp(16px, 2.5vw, 24px) 0;
          border-bottom: 1px solid #e8e8e8;
        }
        .fs-ops__item:first-child { padding-top: 0; }
        .fs-ops__num {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0D5C46;
          min-width: 32px;
          flex-shrink: 0;
          line-height: 1.4;
        }
        .fs-ops__item-title {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .fs-ops__item-desc {
          font-size: clamp(0.85rem, 1.4vw, 0.95rem);
          color: #6c757d;
          line-height: 1.6;
        }

        /* ── 5. QUALITY BANNER ── */
        .fs-banner {
          position: relative;
          background-size: cover;
          background-position: center;
          /* aspect ratio approach: 16/5 on desktop, taller on mobile */
          aspect-ratio: 16 / 5;
          min-height: 240px;
          max-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto clamp(40px, 6vw, 80px);
          border-radius: 14px;
          overflow: hidden;
        }
        .fs-banner__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 1;
        }
        .fs-banner__text {
          position: relative;
          z-index: 2;
          color: #fff;
          font-size: clamp(1.25rem, 3.5vw, 2.25rem);
          font-weight: 500;
          line-height: 1.3;
          padding: 0 clamp(20px, 5vw, 60px);
        }

        /* ── 6. CERTIFICATIONS ── */
        .fs-certs {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(40px, 6vw, 80px) clamp(24px, 5vw, 60px);
          text-align: center;
        }
        .fs-certs__heading {
          font-size: clamp(1.4rem, 2.8vw, 2rem);
          font-weight: 400;
          color: #0D5C46;
          margin: 0 0 16px;
        }
        .fs-certs__sub {
          color: #6c757d;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          max-width: 520px;
          margin: 0 auto clamp(32px, 5vw, 56px);
          line-height: 1.65;
        }
        .fs-certs__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
        }
        .fs-cert-card {
          background: #fff;
          border: 1px solid #efefef;
          border-radius: 12px;
          padding: clamp(24px, 3vw, 40px) clamp(16px, 2vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          /* Use aspect-ratio to keep cards consistently proportioned */
          aspect-ratio: 3 / 4;
          justify-content: center;
        }
        .fs-cert-card__logo {
          width: clamp(60px, 10vw, 90px);
          height: clamp(60px, 10vw, 90px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fs-cert-card__logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .fs-cert-card__no-logo {
          font-size: 0.75rem;
          color: #ccc;
        }
        .fs-cert-card__title {
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          font-weight: 700;
          color: #0D5C46;
        }
        .fs-cert-card__sub {
          font-size: clamp(0.75rem, 1.2vw, 0.82rem);
          color: #6c757d;
          line-height: 1.5;
          text-align: center;
        }

        /* ── ANIMATIONS ── */
        .custom-reveal-container .custom-reveal-element {
          opacity: 0;
          transform: translateY(-30px);
          transition:
            opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .custom-reveal-container.reveal-active .custom-reveal-element {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 100ms !important; }
        .delay-2 { transition-delay: 250ms !important; }
        .delay-3 { transition-delay: 400ms !important; }

        /* ── HOVER LIFT ── */
        .hover-lift {
          transition:
            transform 0.35s cubic-bezier(0.25, 1, 0.5, 1),
            box-shadow 0.35s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.08) !important;
        }

        /* ── MEDIA QUERIES ── */

        /* Tablet: ≤ 1024px */
        @media (max-width: 1024px) {
          .fs-hero {
            min-height: 560px;
            padding: 60px 40px 60px;
          }
          .fs-commit__inner {
            gap: 40px;
          }
          .fs-ops__left {
            position: static; /* un-sticky on smaller screens */
            flex: 0 0 100%;
          }
          .fs-ops__right {
            flex: 0 0 100%;
          }
          .fs-certs__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Large Mobile / Small Tablet: ≤ 768px */
        @media (max-width: 768px) {
          .fs-hero {
            min-height: 480px;
            padding: 48px 24px 48px;
            align-items: flex-end;
          }
          .fs-hero__title {
            font-size: clamp(1.6rem, 7vw, 2.4rem);
          }
          .fs-commit {
            padding: 40px 24px;
          }
          .fs-commit__inner {
            flex-direction: column;
            gap: 28px;
          }
          .fs-commit__left,
          .fs-commit__right {
            min-width: 0;
            flex: none;
            width: 100%;
          }
          .fs-commit__divider {
            /* on mobile change to a top border instead of left border */
            display: none;
          }
          .fs-cards {
            grid-template-columns: 1fr;
            padding: 28px 20px;
            gap: 16px;
          }
          .fs-card {
            min-height: auto;
          }
          .fs-ops {
            padding: 40px 24px;
          }
          .fs-ops__inner {
            flex-direction: column;
            gap: 28px;
          }
          .fs-banner {
            aspect-ratio: 16 / 7;
            min-height: 180px;
            border-radius: 10px;
            margin-bottom: 40px;
          }
          .fs-banner__text {
            font-size: clamp(1.1rem, 5vw, 1.6rem);
          }
          .fs-certs {
            padding: 40px 20px;
          }
          .fs-certs__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .fs-cert-card {
            aspect-ratio: auto;
            padding: 24px 16px;
            min-height: 200px;
          }
        }

        /* Mobile: ≤ 480px */
        @media (max-width: 480px) {
          .fs-hero {
            min-height: 380px;
            padding: 36px 20px 36px;
          }
          .fs-hero__title {
            font-size: clamp(1.4rem, 8vw, 2rem);
          }
          .fs-hero__sub {
            font-size: 0.9rem;
          }
          .fs-commit__heading {
            font-size: 1.6rem;
          }
          .fs-cards {
            grid-template-columns: 1fr;
            padding: 20px 16px;
          }
          .fs-card__title {
            font-size: 1.1rem;
          }
          .fs-ops__heading {
            font-size: 1.4rem;
          }
          .fs-certs__grid {
            grid-template-columns: 1fr;
          }
          .fs-cert-card {
            aspect-ratio: auto;
            min-height: 160px;
            padding: 20px;
          }
          .fs-banner {
            aspect-ratio: 16 / 9;
          }
        }

        /* Very small: ≤ 360px */
        @media (max-width: 360px) {
          .fs-hero {
            min-height: 320px;
            padding: 28px 16px;
          }
          .fs-commit,
          .fs-ops,
          .fs-certs {
            padding-left: 16px;
            padding-right: 16px;
          }
          .fs-cards {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default FoodSafety;