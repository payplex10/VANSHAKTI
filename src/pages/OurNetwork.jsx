import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// ── Images ──
import HeroBg from "../assets/ournetworkhero.png";
import FarmerImg from "../assets/network1.jpg";
import FreshProduceImg from "../assets/network2.jpg";
import MushroomImg from "../assets/network3.jpg";
import NurseryImg from "../assets/network4.jpg";
import CtaBg from "../assets/network5.png";

// ── Network Icon images ──
import NetworkIconCultivation from "../assets/networkIcon.svg";
import NetworkIconCollection from "../assets/networkIcon1.svg";
import NetworkIconQuality from "../assets/networkIcon2.svg";
import NetworkIconPackaging from "../assets/networkIcon3.svg";
import NetworkIconLogistics from "../assets/networkIcon4.svg";
import NetworkIconMarket from "../assets/networkIcon5.svg";

// ── Partner logos ──
import Logo1 from "../assets/partnerblock.png";
import Logo2 from "../assets/partnerblock1.png";
import Logo3 from "../assets/partnerblock2.png";
import Logo4 from "../assets/partnerblock3.png";

// ── Ecosystem Icon images ──
import EcosystemIconCultivation from "../assets/ecosystemicon.svg";
import EcosystemIconCollection from "../assets/ecosystemicon1.svg";
import EcosystemIconQuality from "../assets/ecosystemicon2.svg";
import EcosystemIconPackaging from "../assets/ecosystemicon3.svg";
import EcosystemIconLogistics from "../assets/ecosystemicon4.svg";
import EcosystemIconMarket from "../assets/ecosystemicon5.svg";

function useScrollReveal(threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    document.title = "Our Agricultural Network | Farmers, Supply Chain & Market Access | VanShakti";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Explore VanShakti's agricultural network connecting farmers, cultivation hubs, quality handling systems, logistics infrastructure, and market access across regions for sustainable agricultural growth.");
    document.querySelector('meta[name="keywords"]')?.setAttribute("content", "agricultural network, farmer network India, agriculture supply chain, farm to market, cultivation network, agricultural logistics, farming ecosystem, market access for farmers, agri network, sustainable agriculture, VanShakti network");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Our Agricultural Network | VanShakti");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Discover how VanShakti connects farmers, cultivation systems, logistics infrastructure, and market opportunities through an integrated agricultural network.");
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

function OurNetwork() {
  const navigate = useNavigate();

  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [ecoRef, ecoVisible] = useScrollReveal(0.12);
  const [presenceRef, presenceVisible] = useScrollReveal(0.12);
  const [cultivationRef, cultivationVisible] = useScrollReveal(0.1);
  const [opsRef, opsVisible] = useScrollReveal(0.12);
  const [partnersRef, partnersVisible] = useScrollReveal(0.15);
  const [ctaRef, ctaVisible] = useScrollReveal(0.1);

  const ecosystemIcons = [
    { img: NetworkIconCultivation, label: "Cultivation", sub: "Expert Farming" },
    { img: NetworkIconCollection, label: "Collection", sub: "Regional Hubs" },
    { img: NetworkIconQuality, label: "Quality Handling", sub: "Strict Standards" },
    { img: NetworkIconPackaging, label: "Packaging", sub: "Eco-Friendly" },
    { img: NetworkIconLogistics, label: "Logistics", sub: "Rapid Transit" },
    { img: NetworkIconMarket, label: "Market Supply", sub: "Global Reach" },
  ];

  const operations = [
    { icon: EcosystemIconCultivation, title: "Strategic Sourcing", desc: "Centralized regional collection points that minimize travel time and preserve peak freshness." },
    { icon: EcosystemIconCollection, title: "Quality Handling", desc: "Automated grading and sorting systems combined with human oversight to meet global safety standards." },
    { icon: EcosystemIconQuality, title: "Packaging Systems", desc: "Optimized packing solutions designed for maximum protection and shelf-life during transit." },
    { icon: EcosystemIconPackaging, title: "Supply Tracking", desc: "Real-time inventory and logistics monitoring providing transparent data across the entire supply chain." },
    { icon: EcosystemIconLogistics, title: "Cold Chain", desc: "End-to-end temperature-controlled infrastructure for highly perishable produce and extracts." },
    { icon: EcosystemIconMarket, title: "Global Logistics", desc: "Integrated transport network connecting our hubs to domestic and international terminals." },
  ];

  const partners = [
    { logo: Logo1, sub: "Export Partner" },
    { logo: Logo2, sub: "Hospitality Partner" },
    { logo: Logo3, sub: "R&D Partner" },
    { logo: Logo4, sub: "Agri-Collective" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", overflowX: "hidden", backgroundColor: "#fafafa" }}>

      {/* ── 1. HERO — full bleed, NO border radius, text bottom-left ── */}
      <div
        ref={heroRef}
        className={`net-reveal-container ${heroVisible ? "net-active" : ""}`}
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 80px 80px",
          position: "relative",
          // marginTop: "50px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "560px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div className="net-reveal-element delay-1">
            <span style={{ display: "inline-block", background: "#3a8c5c", color: "#fff", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", padding: "5px 12px", borderRadius: "4px" }}>
              INTEGRATED ECOSYSTEM
            </span>
          </div>
          <div className="net-reveal-element delay-2">
            <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
              Connecting Agriculture<br />Across Regions
            </h1>
          </div>
          <div className="net-reveal-element delay-3">
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.93rem", lineHeight: 1.65, margin: 0 }}>
              VanShakti brings together farmers, cultivation networks, infrastructure, and market systems into one connected agricultural ecosystem.
            </p>
          </div>
          <div className="net-reveal-element delay-4">
            <button
              onClick={() => navigate("/contact")}
              style={{ backgroundColor: "#b8f04a", borderRadius: "24px", padding: "11px 26px", fontWeight: 600, cursor: "pointer", color: "#1a3b2f", border: "none", fontSize: "0.88rem" }}
            >
              Partner With Us →
            </button>
          </div>
        </div>
      </div>

      {/* ── 2. SEAMLESS ECOSYSTEM ── */}
      <div
        ref={ecoRef}
        className={`net-reveal-container ${ecoVisible ? "net-active" : ""}`}
        style={{ padding: "80px 20px 68px", textAlign: "center", backgroundColor: "#fff" }}
      >
        <div className="net-reveal-element delay-1">
          <h2 style={{ fontWeight: 500, color: "#1c5a3e", marginBottom: "14px", fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}>Our Seamless Ecosystem</h2>
        </div>
        <div className="net-reveal-element delay-2">
          <p style={{ color: "#666", fontSize: "0.9rem", maxWidth: "500px", margin: "0 auto 56px", lineHeight: 1.7 }}>
            A unified value chain that connects the soil to the global marketplace through precision and care.
          </p>
        </div>
        <div className="net-reveal-element delay-3" style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", maxWidth: "960px", margin: "0 auto", padding: "0 10px" }}>
          <div style={{ position: "absolute", top: "28px", left: "55px", right: "55px", height: "1px", backgroundColor: "#d5e5dd", zIndex: 0 }} />
          {ecosystemIcons.map((item, idx) => (
            <div key={idx} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#fff", border: "1px solid #cce0d6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <img src={item.img} alt={item.label} style={{ width: "22px", height: "22px", objectFit: "contain" }} />
              </div>
              <p style={{ fontWeight: 600, fontSize: "0.82rem", color: "#111", margin: "0 0 4px 0" }}>{item.label}</p>
              <p style={{ fontSize: "0.75rem", color: "#888", margin: 0, whiteSpace: "nowrap" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. ORGANIZED PRESENCE ── */}
      <div
        ref={presenceRef}
        className={`net-reveal-container ${presenceVisible ? "net-active" : ""}`}
        style={{ padding: "80px 20px", backgroundColor: "#f7f7f5" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", gap: "60px" }} className="presence-inner">
          <div className="net-reveal-element delay-1 presence-img-col">
            <img src={FarmerImg} alt="Farmers" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px", display: "block" }} />
          </div>
          <div className="net-reveal-element delay-2 presence-text-col">
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", fontWeight: 800, marginBottom: "16px", color: "#111" }}>
              Organized & Reliable Presence
            </h2>
            <p style={{ fontSize: "0.93rem", color: "#555", lineHeight: 1.8, marginBottom: "32px" }}>
              VanShakti's network isn't just about size; it's about the precision of coordination. We operate across diverse agro-climatic zones, ensuring a steady supply of premium products year-round.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { number: "1000+", label: "INDEPENDENT FARMERS" },
                { number: "12+", label: "ACTIVE REGIONS" },
                { number: "24/7", label: "COORDINATED MOVEMENT" },
                { number: "100%", label: "INTEGRATED HANDLING" },
              ].map((item, i) => (
                <div key={i} className="net-stat-box" style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "22px 20px", display: "flex", flexDirection: "column", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 800, color: "#1c5a3e", lineHeight: 1, marginBottom: "6px" }}>{item.number}</span>
                  <span style={{ fontSize: "0.7rem", color: "#666", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. SPECIALIZED CULTIVATION ── */}
      <div
        ref={cultivationRef}
        className={`net-reveal-container ${cultivationVisible ? "net-active" : ""}`}
        style={{ padding: "80px 0", backgroundColor: "#fff" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <h2 className="net-reveal-element delay-1" style={{ textAlign: "center", fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 500, color: "#1c5a3e", marginBottom: "8px" }}>
            Specialized Cultivation
          </h2>
          <div className="net-reveal-element delay-1" style={{ width: "44px", height: "3px", background: "#1c5a3e", borderRadius: "2px", margin: "0 auto 56px" }} />

          {/* Row 1: image left, text right */}
          <div className="net-reveal-element delay-2 cult-row" style={{ display: "flex", alignItems: "center", gap: "48px", marginBottom: "56px" }}>
            <div className="cult-img-wrap">
              <img src={FreshProduceImg} alt="Fresh Produce" style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "14px" }} />
            </div>
            <div className="cult-text-wrap">
              <span style={{ display: "block", fontSize: "16px", fontWeight: 600, color: "#008742", letterSpacing: "0", marginBottom: "8px" }}>SUSTAINABLE GROWTH</span>
              <h3 style={{ fontSize: "32px", fontWeight: 400, color: "#1A1C19", marginBottom: "12px" }}>Fresh Produce & Grains</h3>
              <p style={{ fontSize: "016px", color: "##576157", fontWeight: 400, lineHeight: 1.7, marginBottom: "16px" }}>Our network specializes in the cultivation of seasonal produce and high-yield grains, utilizing precision farming techniques to maximize nutrient density and minimize environmental impact.</p>
              <span style={{ fontSize: "0.85rem", color: "#1c5a3e", fontWeight: 600, cursor: "pointer" }}>View Product Range →</span>
            </div>
          </div>

          {/* Row 2: text left, image right */}
          <div className="net-reveal-element delay-2 cult-row cult-row-reverse" style={{ display: "flex", alignItems: "center", gap: "48px", marginBottom: "56px" }}>
            <div className="cult-text-wrap">
              <span style={{ display: "block", fontSize: "16px", fontWeight: 600, color: "#008742", letterSpacing: "0", marginBottom: "8px" }}>PRECISION CONTROL</span>
              <h3 style={{ fontSize: "32px", fontWeight: 400, color: "#1A1C19", marginBottom: "12px" }}>Mushroom & Medicinal Plants</h3>
              <p style={{ fontSize: "16px", color: "#576157",fontWeight: 400, lineHeight: 1.7, marginBottom: "16px" }}>Dedicated indoor facilities provide the perfect micro-climate for exotic mushrooms and potent medicinal flora. Our infrastructure ensures stability for these sensitive crops year-round.</p>
              <span style={{ fontSize: "0.85rem", color: "#1c5a3e", fontWeight: 600, cursor: "pointer" }}>Learn About Extraction →</span>
            </div>
            <div className="cult-img-wrap">
              <img src={MushroomImg} alt="Mushrooms" style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "14px" }} />
            </div>
          </div>

          {/* Row 3: image left, text right */}
          <div className="net-reveal-element delay-3 cult-row" style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            <div className="cult-img-wrap">
              <img src={NurseryImg} alt="Nursery" style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "14px" }} />
            </div>
            <div className="cult-text-wrap">
              <span style={{ display: "block", fontSize: "16px", fontWeight: 600, color: "##008742", letterSpacing: "0", marginBottom: "8px" }}>THE BEGINNING OF VALUE</span>
              <h3 style={{ fontSize: "32px", fontWeight: 400, color: "#1A1C19", marginBottom: "12px" }}>Nursery & Sapling Development</h3>
              <p style={{ fontSize: "16px", color: "#576157", fontWeight: 400, lineHeight: 1.7, marginBottom: "16px" }}>Quality begins at the seed. Our nursery network develops resilient saplings and high-grade seeds, supplying both our internal network and external agricultural partners with the foundations of success.</p>
              <span style={{ fontSize: "0.85rem", color: "#1c5a3e", fontWeight: 600, cursor: "pointer" }}>Explore Varieties →</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. ENTERPRISE OPERATIONS — dark bg, NO card borders, just icon+title+text in 3-col grid ── */}
      <div
        ref={opsRef}
        className={`net-reveal-container ${opsVisible ? "net-active" : ""}`}
        style={{ backgroundColor: "#065532", padding: "80px 24px" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", marginBottom: "56px", flexWrap: "wrap" }}>
            <div className="net-reveal-element delay-1">
              <h2 style={{ fontSize: "40px", fontWeight: 400, color: "#FAFAF4", marginBottom: "10px", margin: "0 0 10px 0" }}>
                Enterprise-Grade Operations
              </h2>
              <p style={{ fontSize: "0.91rem", color: "rgba(255,255,255,0.65)", maxWidth: "500px", lineHeight: 1.7, margin: 0 }}>
                Our infrastructure is designed for high-volume efficiency without sacrificing the artisanal quality of our products.
              </p>
            </div>
            <div className="net-reveal-element delay-2">
              <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", padding: "10px 22px", borderRadius: "8px", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", letterSpacing: "0.07em", whiteSpace: "nowrap", fontFamily: "inherit" }}>
                OPERATIONS PDF
              </button>
            </div>
          </div>

          {/* 3-col grid — NO card box, NO border, just spacing + subtle top border separator between rows */}
          <div className="ops-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {operations.map((op, idx) => {
              const isTopRow = idx < 3;
              const isLeftCol = idx % 3 === 0;
              return (
                <div
                  key={idx}
                  className="net-reveal-element net-op-item"
                  style={{
                    padding: "32px 28px 32px",
                    transitionDelay: `${idx * 80}ms`,
                    borderTop: isTopRow ? "none" : "1px solid rgba(255,255,255,0.1)",
                    borderLeft: isLeftCol ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <img src={op.icon} alt={op.title} style={{ width: "36px", height: "36px", marginBottom: "16px", objectFit: "contain" }} />
                  <h4 style={{ fontSize: "24px", fontWeight: 400, color: "#D9D9D9", marginBottom: "10px" }}>{op.title}</h4>
                  <p style={{ fontSize: "16px", color: "#D9D9D9", lineHeight: "24px", margin: 0 }}>{op.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 6. NETWORK PARTNERS — NO extra padding, flush layout ── */}
      <div
        ref={partnersRef}
        className={`net-reveal-container ${partnersVisible ? "net-active" : ""}`}
        style={{ padding: "80px 24px", backgroundColor: "#fbfbfa" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="net-reveal-element delay-1" style={{ fontSize: "16px", fontWeight: 500, color: "#006B33", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "10px" }}>
              TRUST ECOSYSTEM
            </p>
            <h2 className="net-reveal-element delay-2" style={{ fontSize: "40px", fontWeight: 400, color: "#1A1C19", margin: 0 }}>
              Our Network Partners
            </h2>
          </div>

          {/* 4-col partner grid — logo box full width, no extra wrapper padding */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="partners-grid">
            {partners.map((p, i) => (
              <div
                key={i}
                className="net-reveal-element"
                style={{ transitionDelay: `${i * 100}ms`, display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <div style={{
                  width: "100%",
                  // aspectRatio: "1.6 / 1",
                  backgroundColor: "#eeeeec",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  // padding: "16px",
                  marginBottom: "14px",
                  boxSizing: "border-box",
                }}>
                  <img src={p.logo} alt={p.sub} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </div>
                <p style={{ fontSize: "18px", color: "#576157", margin: 0, textAlign: "center" }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 7. CTA — rounded card with bg image ── */}
      <div
        ref={ctaRef}
        className={`net-reveal-container ${ctaVisible ? "net-active" : ""}`}
        style={{
          backgroundImage: `url(${CtaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          padding: "110px 80px",
          margin: "40px 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "560px", color: "#fff", display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2 className="net-reveal-element delay-1" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2, margin: 0 }}>
            Growing Stronger Through<br />Connected Agriculture
          </h2>
          <p className="net-reveal-element delay-2" style={{ fontSize: "0.97rem", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", margin: 0 }}>
            Creating stronger agricultural ecosystems through integrated cultivation, movement, and market connectivity.
          </p>
          <div className="net-reveal-element delay-3">
            <button
              onClick={() => navigate("/contact")}
              style={{ backgroundColor: "#fff", color: "#1a3b2f", padding: "12px 32px", borderRadius: "24px", fontWeight: 500, fontSize: "0.95rem", border: "none", cursor: "pointer" }}
            >
              Partner With Us →
            </button>
          </div>
        </div>
      </div>

      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        /* Scroll reveal */
        .net-reveal-container .net-reveal-element {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .net-reveal-container.net-active .net-reveal-element {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 100ms !important; }
        .delay-2 { transition-delay: 240ms !important; }
        .delay-3 { transition-delay: 380ms !important; }
        .delay-4 { transition-delay: 500ms !important; }

        /* Stat box hover */
        .net-stat-box {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .net-stat-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.1) !important;
        }

        /* Ops item hover */
        .net-op-item {
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1),
                      transform 0.75s cubic-bezier(0.16,1,0.3,1),
                      background 0.25s ease !important;
        }
        .net-op-item:hover {
          background: rgba(255,255,255,0.04);
        }

        /* cultivation cols */
        .cult-img-wrap { flex: 0 0 44%; }
        .cult-text-wrap { flex: 1; }

        /* ── TABLET ≤ 992px ── */
        @media (max-width: 992px) {
          .ops-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* ── MOBILE ≤ 768px ── */
        @media (max-width: 768px) {
          /* Hero */
          div[style*="marginTop: 50px"] {
            min-height: 460px !important;
            padding: 0 20px 56px !important;
            align-items: flex-end !important;
          }

          /* Ecosystem wrap */
          div[style*="justifyContent: space-between"][style*="maxWidth: 960px"] {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 24px 0 !important;
          }
          div[style*="justifyContent: space-between"][style*="maxWidth: 960px"] > div {
            flex: 0 0 33% !important;
          }
          div[style*="top: 28px"][style*="left: 55px"] {
            display: none !important;
          }

          /* Presence inner */
          .presence-inner {
            flex-direction: column !important;
            gap: 28px !important;
          }
          .presence-img-col {
            width: 100% !important;
            flex: none !important;
          }
          .presence-img-col img {
            height: 260px !important;
          }
          .presence-text-col {
            width: 100% !important;
            flex: none !important;
          }

          /* Cultivation rows stack */
          .cult-row,
          .cult-row-reverse {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .cult-img-wrap {
            flex: none !important;
            width: 100% !important;
          }
          .cult-img-wrap img {
            height: 220px !important;
          }
          .cult-text-wrap {
            flex: none !important;
            width: 100% !important;
          }

          /* Ops grid single col */
          .ops-grid {
            grid-template-columns: 1fr !important;
          }
          .net-op-item {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.1) !important;
            padding: 24px 16px !important;
          }
          .net-op-item:first-child {
            border-top: none !important;
          }

          /* Partners 2 col */
          .partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          /* CTA */
          div[style*="borderRadius: 16px"][style*="margin: 40px 24px"] {
            padding: 64px 28px !important;
            margin: 24px 12px !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="justifyContent: space-between"][style*="maxWidth: 960px"] > div {
            flex: 0 0 50% !important;
          }
          .ops-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default OurNetwork;