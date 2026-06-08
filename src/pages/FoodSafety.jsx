import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HeroBg from "../assets/foodhero.png";
import QualityIcon from "../assets/Icon3.svg";
import HygienicIcon from "../assets/Icon.svg";
import PackagingIcon from "../assets/Icon (1).svg";
import ProcessIcon from "../assets/Icon (2).svg";
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

      {/* ── GLOBAL STYLES ─────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        /* ── Base ── */
        .fs-page-root {
          font-family: 'DM Sans', sans-serif;
          background-color: #ffffff;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          color: #1a1a1a;
        }

        /* ─────────────────────────────────────
           1. HERO
        ───────────────────────────────────── */
        .fs-hero {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 680px;
          display: flex;
          align-items: flex-end;
          padding: 80px clamp(24px, 7vw, 120px);
        }
        .fs-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.35) 50%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 1;
        }
        .fs-hero__content {
          position: relative;
          z-index: 2;
          color: #fff;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .fs-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.75);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: #fff;
          font-size: 0.875rem;
          font-style: italic;
          font-weight: 400;
          letter-spacing: 0.02em;
          padding: 6px 16px;
          border-radius: 20px;
          width: fit-content;
        }
        .fs-hero__title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 500;
          line-height: 1.13;
          margin: 0;
        }
        .fs-hero__sub {
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          font-weight: 400;
          opacity: 0.9;
          line-height: 1.65;
          margin: 0;
          max-width: 580px;
        }

        /* ─────────────────────────────────────
           2. COMMITMENT
        ───────────────────────────────────── */
        .fs-commit {
          background: #ffffff;
          padding: clamp(48px, 6vw, 80px) clamp(24px, 7vw, 100px);
        }
        .fs-commit__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: clamp(32px, 5vw, 80px);
        }
        .fs-commit__left {
          flex: 1 1 40%;
          min-width: 0;
        }
        .fs-commit__heading {
          font-size: clamp(1.6rem, 3.2vw, 2.4rem);
          font-weight: 400;
          color: #065532;
          line-height: 1.25;
          margin: 0;
        }
        .fs-commit__right {
          flex: 1 1 55%;
          min-width: 0;
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }
        .fs-commit__divider {
          width: 2px;
          min-height: 80px;
          align-self: stretch;
          background: #E8E8E0;
          flex-shrink: 0;
        }
        .fs-commit__body {
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          color: #576157;
          line-height: 1.75;
          font-weight: 400;
          margin: 0;
        }

        /* ─────────────────────────────────────
           3. STANDARDS CARDS
        ───────────────────────────────────── */
        .fs-cards-section {
          background: #F4F4F0;
          padding: clamp(36px, 5vw, 64px) clamp(24px, 7vw, 100px);
        }
        .fs-cards-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
        }
        .fs-card {
          background: #ffffff;
          border-radius: 12px;
          padding: clamp(24px, 3vw, 36px);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .fs-card__icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }
        .fs-card__icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .fs-card__title {
          font-size: clamp(1.2rem, 2.2vw, 1.85rem);
          font-weight: 400;
          color: #0d5c3a;
          line-height: 1.3;
          margin: 0;
        }
        .fs-card__desc {
          font-size: clamp(0.875rem, 1.4vw, 1rem);
          color: #576157;
          line-height: 1.65;
          font-weight: 400;
          margin: 0;
        }

        /* ─────────────────────────────────────
           4. OPERATIONAL STANDARDS
        ───────────────────────────────────── */
        .fs-ops {
          padding: clamp(48px, 6vw, 88px) clamp(24px, 7vw, 100px);
          background: #ffffff;
        }
        .fs-ops__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: clamp(36px, 6vw, 96px);
          align-items: flex-start;
        }
        .fs-ops__left {
          flex: 0 0 clamp(180px, 26%, 300px);
          position: sticky;
          top: 40px;
        }
        .fs-ops__heading {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 400;
          color: #0D5C46;
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .fs-ops__sub {
          color: #6c757d;
          font-size: clamp(0.875rem, 1.4vw, 1rem);
          margin: 0;
          line-height: 1.65;
        }
        .fs-ops__right {
          flex: 1;
          min-width: 0;
        }
        .fs-ops__item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: clamp(18px, 2.5vw, 26px) 0;
          border-bottom: 1px solid #EBEBEB;
        }
        .fs-ops__item:first-child { padding-top: 0; }
        .fs-ops__item:last-child { border-bottom: none; }
        .fs-ops__num {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0D5C46;
          min-width: 28px;
          flex-shrink: 0;
          line-height: 1.6;
          opacity: 0.7;
        }
        .fs-ops__item-title {
          font-size: clamp(1rem, 1.7vw, 1.15rem);
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 5px;
          line-height: 1.35;
        }
        .fs-ops__item-desc {
          font-size: clamp(0.83rem, 1.3vw, 0.93rem);
          color: #6c757d;
          line-height: 1.65;
          margin: 0;
        }

        /* ─────────────────────────────────────
           5. QUALITY BANNER
        ───────────────────────────────────── */
        .fs-banner-wrapper {
          padding: 0 clamp(24px, 7vw, 100px) clamp(48px, 6vw, 80px);
          max-width: 1400px;
          margin: 0 auto;
        }
        .fs-banner {
          position: relative;
          background-size: cover;
          background-position: center;
          width: 100%;
          aspect-ratio: 16 / 5;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 16px;
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
          font-size: clamp(1.2rem, 3.5vw, 2.25rem);
          font-weight: 500;
          line-height: 1.35;
          padding: 0 clamp(20px, 5vw, 60px);
        }

        /* ─────────────────────────────────────
           6. CERTIFICATIONS
        ───────────────────────────────────── */
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
          line-height: 1.25;
        }
        .fs-certs__sub {
          color: #6c757d;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          max-width: 560px;
          margin: 0 auto clamp(36px, 5vw, 56px);
          line-height: 1.7;
        }
        .fs-certs__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
        }
        .fs-cert-card {
          background: #fff;
          border: 1px solid #EFEFEF;
          border-radius: 14px;
          padding: clamp(28px, 3.5vw, 44px) clamp(16px, 2vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                      box-shadow 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .fs-cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.07);
        }
        .fs-cert-card__logo {
          width: 219.31 px;
          height: 108px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .fs-cert-card__logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .fs-cert-card__no-logo {
          font-size: 0.75rem;
          color: #ccc;
        }
        .fs-cert-card__title {
          font-size: 32px;
          font-weight: 500;
          color: #065532;
          margin: 0;
        }
        .fs-cert-card__sub {
          font-weight: 400;
          font-size: 16px ;
          color: #000000;
          line-height: 24px;
          text-align: center;
          margin: 0;
        }

        /* ─────────────────────────────────────
           ANIMATIONS
        ───────────────────────────────────── */
        .custom-reveal-container .custom-reveal-element {
          opacity: 0;
          transform: translateY(-28px);
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

        .hover-lift {
          transition:
            transform 0.35s cubic-bezier(0.25, 1, 0.5, 1),
            box-shadow 0.35s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.07) !important;
        }

        /* ─────────────────────────────────────
           RESPONSIVE — TABLET (≤ 1024px)
        ───────────────────────────────────── */
        @media (max-width: 1024px) {
          .fs-hero { min-height: 560px; }
          .fs-ops__left { position: static; flex: 0 0 100%; }
          .fs-ops__right { flex: 0 0 100%; }
          .fs-ops__inner { flex-wrap: wrap; }
        }

        /* ─────────────────────────────────────
           RESPONSIVE — MOBILE (≤ 768px)
        ───────────────────────────────────── */
        @media (max-width: 768px) {

          /* Hero */
          .fs-hero {
            min-height: 520px;
            padding: 56px 20px 48px;
            align-items: flex-end;
          }
          .fs-hero__title { line-height: 1.18; }
          .fs-hero__sub { font-size: 0.95rem; }

          /* Commitment */
          .fs-commit { padding: 44px 20px; }
          .fs-commit__inner {
            flex-direction: column;
            gap: 24px;
          }
          .fs-commit__left,
          .fs-commit__right {
            flex: none;
            width: 100%;
          }
          .fs-commit__divider { display: none; }
          .fs-commit__right { gap: 0; }

          /* Cards */
          .fs-cards-section { padding: 36px 20px; }
          .fs-cards-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .fs-card { padding: 22px 20px; }

          /* Ops */
          .fs-ops { padding: 44px 20px; }
          .fs-ops__inner {
            flex-direction: column;
            gap: 28px;
          }
          .fs-ops__left { flex: none; width: 100%; }

          /* Banner */
          .fs-banner-wrapper { padding: 0 20px 44px; }
          .fs-banner {
            aspect-ratio: 16 / 7;
            min-height: 180px;
            border-radius: 12px;
          }

          /* Certs */
          .fs-certs { padding: 44px 20px; }
          .fs-certs__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .fs-cert-card {
            padding: 24px 16px;
          }
        }

        /* ─────────────────────────────────────
           RESPONSIVE — SMALL MOBILE (≤ 480px)
        ───────────────────────────────────── */
        @media (max-width: 480px) {

          /* Hero */
          .fs-hero {
            min-height: 440px;
            padding: 48px 16px 40px;
          }

          /* Cards — single column already, just tighten */
          .fs-cards-section { padding: 28px 16px; }
          .fs-card { padding: 20px 16px; gap: 10px; }

          /* Ops */
          .fs-ops { padding: 36px 16px; }
          .fs-ops__item { gap: 14px; }

          /* Banner */
          .fs-banner-wrapper { padding: 0 16px 36px; }
          .fs-banner { aspect-ratio: 16 / 8; }

          /* Certs — go single column */
          .fs-certs { padding: 36px 16px; }
          .fs-certs__grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .fs-cert-card {
            flex-direction: row;
            text-align: left;
            align-items: center;
            gap: 16px;
            padding: 20px 16px;
          }
          .fs-cert-card__logo {
            width: 52px;
            height: 52px;
            flex-shrink: 0;
          }
          .fs-cert-card__sub { text-align: left; }
        }

        /* ─────────────────────────────────────
           RESPONSIVE — VERY SMALL (≤ 360px)
        ───────────────────────────────────── */
        @media (max-width: 360px) {
          .fs-commit,
          .fs-ops,
          .fs-certs,
          .fs-cards-section,
          .fs-banner-wrapper { padding-left: 14px; padding-right: 14px; }
          .fs-hero { padding-left: 14px; padding-right: 14px; }
        }
      `}</style>

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className={`fs-hero custom-reveal-container ${heroVisible ? "reveal-active" : ""}`}
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="fs-hero__overlay" />
        <div className="fs-hero__content">
          <div className="fs-badge custom-reveal-element delay-1">Food Safety &amp; Quality</div>
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
        className={`fs-cards-section custom-reveal-container ${cardsVisible ? "reveal-active" : ""}`}
      >
        <div className="fs-cards-grid">
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
      <div
        ref={bannerRef}
        className={`fs-banner-wrapper custom-reveal-container ${bannerVisible ? "reveal-active" : ""}`}
      >
        <div
          className="fs-banner custom-reveal-element delay-1"
          style={{ backgroundImage: `url(${QualityBanner})` }}
        >
          <div className="fs-banner__overlay" />
          <div className="fs-banner__text">
            Maintaining quality at every Stage
          </div>
        </div>
      </div>

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
              className="fs-cert-card custom-reveal-element"
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

    </div>
  );
}

export default FoodSafety;