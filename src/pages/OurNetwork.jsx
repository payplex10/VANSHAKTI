import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

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

// Reusable Intersection Observer Hook for dynamic scrolling triggers
function useScrollReveal(threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
  // SEO
  document.title =
    "Our Agricultural Network | Farmers, Supply Chain & Market Access | VanShakti";

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Explore VanShakti's agricultural network connecting farmers, cultivation hubs, quality handling systems, logistics infrastructure, and market access across regions for sustainable agricultural growth."
    );

  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "agricultural network, farmer network India, agriculture supply chain, farm to market, cultivation network, agricultural logistics, farming ecosystem, market access for farmers, agri network, sustainable agriculture, VanShakti network"
    );

  // Open Graph SEO
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute(
      "content",
      "Our Agricultural Network | VanShakti"
    );

  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute(
      "content",
      "Discover how VanShakti connects farmers, cultivation systems, logistics infrastructure, and market opportunities through an integrated agricultural network."
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

function OurNetwork() {
  const navigate = useNavigate();

  // Scroll visibility hooks for each structural section block
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
    { logo: Logo1, label: "Global Exports Co.", sub: "Export Partner" },
    { logo: Logo2, label: "GreenResort Group", sub: "Hospitality Partner" },
    { logo: Logo3, label: "BioPharma Labs", sub: "R&D Partner" },
    { logo: Logo4, label: "FarmTech Union", sub: "Agri-Collective" },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", overflowX: "hidden", backgroundColor: "#fafafa" }}>
      
      {/* ── 1. HERO SECTION ── */}
      <div
        ref={heroRef}
        className={`net-reveal-container ${heroVisible ? "net-active" : ""}`}
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "520px",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 80px 80px",
          position: "relative",
          marginTop: "50px"
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2), transparent)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}>
          <div className="net-reveal-element delay-1">
            <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: 800 }}>Connecting Agriculture Across Regions</h1>
          </div>
          <div className="net-reveal-element delay-2">
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", margin: "20px 0" }}>
              VanShakti brings together farmers, cultivation networks, infrastructure, and market systems into one connected agricultural ecosystem.
            </p>
          </div>
          <div className="net-reveal-element delay-3">
            <button 
              onClick={() => navigate("/contact")}
              style={{ backgroundColor: "#b8f04a", borderRadius: "24px", padding: "11px 28px", fontWeight: 500, cursor: "pointer", color: "#1a3b2f", border: "none" }}
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
        style={{ padding: "82px 20px 64px", textAlign: "center", backgroundColor: "#fff" }}
      >
        <div className="net-reveal-element delay-1">
          <h2 style={{ fontWeight: 500, color: "#1c5a3e", marginBottom: "20px" }}>Our Seamless Ecosystem</h2>
        </div>
        <div className="net-reveal-element delay-2">
          <p style={{ color: "#555", fontSize: "0.92rem", maxWidth: "600px", margin: "0 auto 60px" }}>
            A unified value chain that connects the soil to the global marketplace through precision and care.
          </p>
        </div>

        <div className="net-reveal-element delay-3" style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ position: "absolute", top: "30px", left: "50px", right: "50px", height: "1px", backgroundColor: "#d5e5dd", zIndex: 1 }} />

          {ecosystemIcons.map((item, idx) => (
            <div key={idx} style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#fff", border: "1px solid #cce0d6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <img src={item.img} alt={item.label} style={{ width: "24px", height: "24px", objectFit: "contain" }} />
              </div>
              <p style={{ fontWeight: 500, fontSize: "0.85rem", color: "#111", margin: "0 0 6px 0" }}>{item.label}</p>
              <p style={{ fontSize: "0.78rem", color: "#777", margin: 0, whiteSpace: "nowrap" }}>{item.sub}</p>
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
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-6 net-reveal-element delay-1">
              <img src={FarmerImg} alt="Farmers" className="img-fluid" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px" }} />
            </div>

            <div className="col-12 col-md-6 net-reveal-element delay-2">
              <h2 style={{ fontSize: "2.1rem", fontWeight: 800, marginBottom: "16px", color: "#111" }}>
                Organized & Reliable Presence
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.8, marginBottom: "32px" }}>
                VanShakti’s network isn’t just about size; it's about the precision of coordination. 
                We operate across diverse agro-climatic zones, ensuring a steady supply of premium products year-round.
              </p>

              <div className="row g-3">
                {[
                  { number: "1000+", label: "Independent Farmers" },
                  { number: "12+", label: "Active Regions" },
                  { number: "24/7", label: "Coordinated Movement" },
                  { number: "100%", label: "Integrated Handling" },
                ].map((item, i) => (
                  <div key={i} className="col-6">
                    <div className="net-stat-box" style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "22px 20px", display: "flex", flexDirection: "column", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                      <p style={{ fontSize: "2rem", fontWeight: 800, color: "#1c5a3e", margin: "0 0 4px" }}>{item.number}</p>
                      <p style={{ fontSize: "0.75rem", color: "#666", margin: 0, textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.5px" }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. SPECIALIZED CULTIVATION ── */}
      <div 
        ref={cultivationRef}
        className={`container my-5 net-reveal-container ${cultivationVisible ? "net-active" : ""}`}
        style={{ padding: "60px 0" }}
      >
        <div className="d-flex flex-column gap-5">
          {/* Item 1 */}
          <div className="row align-items-center g-4 net-reveal-element delay-1">
            <div className="col-12 col-md-6">
              <img src={FreshProduceImg} alt="Fresh Produce" className="img-fluid" style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "14px" }} />
            </div>
            <div className="col-12 col-md-6" style={{ paddingLeft: "40px" }}>
              <h3 style={{ color: "#1c5a3e", fontWeight: "500", fontSize: "1.75rem", marginBottom: "12px" }}>Fresh Produce & Grains</h3>
              <p style={{ color: "#4a4a4a", lineHeight: "1.65" }}>Our network specializes in seasonal produce and high-yield grains using precision farming techniques.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="row align-items-center g-4 flex-column-reverse flex-md-row net-reveal-element delay-2">
            <div className="col-12 col-md-6" style={{ paddingRight: "40px" }}>
              <h3 style={{ color: "#1c5a3e", fontWeight: "500", fontSize: "1.75rem", marginBottom: "12px" }}>Mushroom & Medicinal Plants</h3>
              <p style={{ color: "#4a4a4a", lineHeight: "1.65" }}>Indoor facilities provide perfect micro-climate for exotic mushrooms and medicinal flora year-round.</p>
            </div>
            <div className="col-12 col-md-6">
              <img src={MushroomImg} alt="Mushrooms" className="img-fluid" style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "14px" }} />
            </div>
          </div>

          {/* Item 3 */}
          <div className="row align-items-center g-4 net-reveal-element delay-3">
            <div className="col-12 col-md-6">
              <img src={NurseryImg} alt="Nursery" className="img-fluid" style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "14px" }} />
            </div>
            <div className="col-12 col-md-6" style={{ paddingLeft: "40px" }}>
              <h3 style={{ color: "#1c5a3e", fontWeight: "500", fontSize: "1.75rem", marginBottom: "12px" }}>Nursery & Sapling Development</h3>
              <p style={{ color: "#4a4a4a", lineHeight: "1.65" }}>Our nursery develops resilient saplings and high-grade seeds for internal and external partners.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. ENTERPRISE OPERATIONS GRID ── */}
      <div 
        ref={opsRef}
        className={`net-reveal-container ${opsVisible ? "net-active" : ""}`}
        style={{ backgroundColor: "#1a3b2f", padding: "80px 20px" }}
      >
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 mb-5">
            <div className="net-reveal-element delay-1">
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
                Enterprise-Grade Operations
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", maxWidth: "520px", lineHeight: 1.7, margin: 0 }}>
                Our infrastructure is designed for high-volume efficiency without sacrificing the artisanal quality of our products.
              </p>
            </div>
            <div className="net-reveal-element delay-2">
              <button style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", padding: "10px 22px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                OPERATIONS PDF
              </button>
            </div>
          </div>

          <div className="row g-4">
            {operations.map((op, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4 net-reveal-element" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="net-op-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "32px 26px", borderRadius: "14px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <img src={op.icon} alt={op.title} style={{ width: "40px", height: "40px", marginBottom: "16px" }} />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#fff", marginBottom: "10px" }}>{op.title}</h4>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>{op.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. NETWORK PARTNERS ── */}
      <div 
        ref={partnersRef}
        className={`net-reveal-container ${partnersVisible ? "net-active" : ""}`}
        style={{ padding: "90px 20px", backgroundColor: "#fbfbfa" }}
      >
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <div className="net-reveal-element delay-1">
              <p style={{ fontSize: "0.78rem", fontWeight: 500, color: "#1c5a3e", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
                Trust Ecosystem
              </p>
            </div>
            <div className="net-reveal-element delay-2">
              <h2 style={{ fontSize: "2.3rem", fontWeight: 500, color: "#111", margin: 0 }}>
                Our Network Partners
              </h2>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {partners.map((p, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 net-reveal-element" style={{ transitionDelay: `${i * 120}ms` }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: "100%", height: "145px", borderRadius: "8px", backgroundColor: "#eeeeec", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.5px", boxSizing: "border-box", marginBottom: "16px" }}>
                    <img src={p.logo} alt={p.label} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "#555", margin: 0, textAlign: "center", fontWeight: 400 }}>
                    {p.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 7. CTA SECTION ── */}
      <div
        ref={ctaRef}
        className={`net-reveal-container ${ctaVisible ? "net-active" : ""}`}
        style={{
          backgroundImage: `url(${CtaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          padding: "120px 80px",
          margin: "40px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.38)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "600px", color: "#fff", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="net-reveal-element delay-1">
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, lineHeight: 1.2 }}>
              Growing Stronger Through Connected Agriculture
            </h2>
          </div>
          <div className="net-reveal-element delay-2">
            <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.9)" }}>
              Creating stronger agricultural ecosystems through integrated cultivation, movement, and market connectivity.
            </p>
          </div>
          <div className="net-reveal-element delay-3">
            <button
              onClick={() => navigate("/contact")}
              style={{ backgroundColor: "#fff", color: "#1a3b2f", padding: "12px 32px", borderRadius: "24px", fontWeight: 500, fontSize: "0.95rem", border: "none", cursor: "pointer", width: "fit-content" }}
            >
              Partner With Us →
            </button>
          </div>
        </div>
      </div>

      {/* ── SEAMLESS SCROLL ANIMATIONS STYLESHEET ── */}
      <style>{`
        /* Setup top-to-bottom sliding opacity transformations */
        .net-reveal-container .net-reveal-element {
          opacity: 0;
          transform: translateY(-30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Trigger active entrance state when section becomes visible */
        .net-reveal-container.net-active .net-reveal-element {
          opacity: 1;
          transform: translateY(0);
        }

        /* Sequential delay metrics */
        .delay-1 { transition-delay: 100ms !important; }
        .delay-2 { transition-delay: 240ms !important; }
        .delay-3 { transition-delay: 380ms !important; }

        /* Smooth interactive layout boxes scales */
        .net-stat-box, .net-op-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .net-stat-box:hover, .net-op-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
        }
      `}</style>

    </div>
  );
}

export default OurNetwork;