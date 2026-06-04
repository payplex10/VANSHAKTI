import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ── Swap these with your actual imports ──────────────────────────────────────
// import bgImage       from "./assets/leaf.svg";
// import farmerPhoto   from "./assets/farmer.png";
// import iconFarm      from "./assets/centralized.png";
// import iconQuality   from "./assets/Group 3.png";
// import iconLogistics from "./assets/logistics.png";
// import iconMarket    from "./assets/market.png";
//
// Then replace the string values below with the imported variables, e.g.:
// { iconSrc: iconFarm, ... }

import bgImage        from "../assets/leaf.svg";
import farmerPhoto    from "../assets/farmer.png";
import iconFarm       from "../assets/centralized.png";
import iconQuality    from "../assets/Group 3.png";
import iconLogistics  from "../assets/logistics.png";
import iconMarket     from "../assets/market.png";

const cards = [
  {
    iconSrc: iconFarm,
    title: "Centralized Farm Operations",
    desc: "Manage crop planning, harvesting, and field-level coordination through a structured and scalable system.",
    highlight: true,
  },
  {
    iconSrc: iconQuality,
    title: "Quality & Grading",
    desc: "Standardized quality checks and grading processes to ensure consistent and reliable produce.",
    highlight: false,
  },
  {
    iconSrc: iconLogistics,
    title: "Logistics Coordination",
    desc: "Efficient movement of produce from farms to buyers through optimized transport and handling.",
    highlight: false,
  },
  {
    iconSrc: iconMarket,
    title: "Market Linkage",
    desc: "Connecting production with verified buyers to ensure smooth distribution and reduced dependency on intermediaries.",
    highlight: false,
  },
];


export default function CorePart() {
  return (
    <>
      <style>{`
        :root {
          --green-dark:  #0A2710;
          --green-mid:   #2d5a35;
          --green-lime:  #c8f03a;
          --text-white:  #ffffff;
          --text-muted:  rgba(255,255,255,0.75);
          --card-bg:     rgba(255,255,255,0.06);
          --card-border: rgba(255,255,255,0.12);
          --radius-lg:   16px;
        }

        /* ── Outer page wrapper ─────────────────────────── */
        .hws-page {
          background: #ffffff;
          padding: 5px 20px;
          font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── The green rounded box ──────────────────────── */
        .hws-section {
          position: relative;
          overflow: hidden;
          background-color: var(--green-dark);
          border-radius: 22px;
          padding: 52px 48px 56px;
          width: 100%;
          max-width: 1200px;
        }

        /* bg image — centered watermark style */
        .hws-section::before {
          display: none;
        }

        /* Leaf bg image — top left */
        .hws-leaf-bg {
          position: absolute;
          left: 250px;
          top: -45px;
          width: 300px;
          height: 520px;
          object-fit: contain;
          opacity: 1;
          z-index: 0;
          pointer-events: none;
          transform: rotate(5deg);
          user-select: none;
        }

        .hws-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Badge ──────────────────────────────────────── */
        .hws-badge {
          display: inline-block;
          border: 1.5px solid rgba(255,255,255,0.40);
          color: var(--text-white);
          font-size: 0.73rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 5px 15px;
          border-radius: 999px;
          margin-bottom: 26px;
        }

        /* ── Heading ────────────────────────────────────── */
        .hws-headline {
          color: var(--text-white);
          font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0;
        }

        .hws-subtext {
          color: var(--text-muted);
          font-size: 0.93rem;
          line-height: 1.7;
          max-width: 400px;
          margin: 0;
        }

        /* ── Grid ───────────────────────────────────────── */
        .hws-grid {
          display: grid;
          grid-template-columns: 350px 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 14px;
          align-items: stretch;
        }

        /* Photo — spans both rows */
        .hws-photo-cell {
          grid-row: 1 / 3;
          grid-column: 1 / 2;
          border-radius: var(--radius-lg);
          overflow: hidden;
          min-height: 290px;
        }

        .hws-photo-cell img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Cards ──────────────────────────────────────── */
        .hws-card {
          border-radius: var(--radius-lg);
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hws-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.28);
        }

        /* Highlighted (lime) */
        .hws-card--highlight {
          background-color: var(--green-lime);
        }
        .hws-card--highlight .hws-card-title { color: #1a3a1f; }
        .hws-card--highlight .hws-card-desc  { color: #2e5836; }
        .hws-card--highlight .hws-icon-wrap  { background: rgba(0,0,0,0.13); }

        /* Normal dark glass */
        .hws-card--normal {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          backdrop-filter: blur(6px);
        }
        .hws-card--normal .hws-card-title { color: var(--text-white); }
        .hws-card--normal .hws-card-desc  { color: var(--text-muted); }
        .hws-card--normal .hws-icon-wrap  { background: rgba(181,224,74,0.16); }

        /* Icon box */
        .hws-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hws-icon-wrap img {
          width: 26px;
          height: 26px;
          object-fit: contain;
          display: block;
        }

        .hws-card-title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }

        .hws-card-desc {
          font-size: 0.82rem;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Tablet ≤992px ──────────────────────────────── */
        @media (max-width: 992px) {
          .hws-section { padding: 40px 30px 44px; }
          .hws-grid { grid-template-columns: 240px 1fr 1fr; }
          .hws-subtext { max-width: 100%; }
        }

        /* ── Small tablet ≤768px ────────────────────────── */
        @media (max-width: 768px) {
          .hws-section { padding: 36px 22px 40px; border-radius: 16px; }
          .hws-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
          }
          .hws-photo-cell {
            grid-row: 1 / 2;
            grid-column: 1 / 3;
            min-height: 220px;
          }
        }

        /* ── Mobile ≤480px ──────────────────────────────── */
        @media (max-width: 480px) {
          .hws-page { padding: 28px 12px; }
          .hws-section { padding: 28px 16px 32px; border-radius: 14px; }
          .hws-headline { font-size: 1.7rem; }
          .hws-grid { grid-template-columns: 1fr; }
          .hws-photo-cell { grid-column: 1 / 2; min-height: 200px; }
        }
      `}</style>

      <div className="hws-page">
        <section className="hws-section">
          {/* Leaf background image */}
          <img src={bgImage} alt="" className="hws-leaf-bg" aria-hidden="true" />
          <div className="hws-inner">

            {/* Badge */}
            <div className="hws-badge">Core Platform</div>

            {/* Heading row */}
            <div className="row align-items-start mb-4">
              <div className="col-lg-5 col-md-6 mb-3 mb-md-0">
                <h2 className="hws-headline">
                  How the<br />System Works
                </h2>
              </div>
              <div className="col-lg-5 col-md-6 offset-lg-1">
                <p className="hws-subtext">
                  VanShakti operates through a structured system that manages farm
                  operations, quality, logistics, and market distribution ensuring
                  smooth execution at every stage of the supply chain.
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="hws-grid">

              {/* Farmer photo */}
              <div className="hws-photo-cell">
                <img src={farmerPhoto} alt="Farmer in the field" />
              </div>

              {/* 4 Cards */}
              {cards.map((card) => (
                <div
                  key={card.title}
                  className={`hws-card ${card.highlight ? "hws-card--highlight" : "hws-card--normal"}`}
                >
                  <div className="hws-icon-wrap">
                    <img src={card.iconSrc} alt={card.title} />
                  </div>
                  <p className="hws-card-title">{card.title}</p>
                  <p className="hws-card-desc">{card.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>
      </div>
    </>
  );
}