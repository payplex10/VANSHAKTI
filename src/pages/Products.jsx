import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import ProductsBg from "../assets/product.jpg"; 
import HeroImage from "../assets/productimage.png";
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

// Cultivation Categories
import FreshFruits from "../assets/fresh-fruits.png";
import FreshVegetables from "../assets/fresh-vegetables.png";
import HerbalMedicinal from "../assets/herbal-medicinal.png";
import MushroomsFarming from "../assets/mushrooms-farming.png";
import NurseryPlants from "../assets/nursery-plants.png";
import ProcessedProducts from "../assets/processed-products.png";

// Featured Items
import KesarMango from "../assets/kesar-mango.png";
import Tomato from "../assets/Tomatoes.png";
import RamaTulsi from "../assets/Tulsi.png";
import Mushroom from "../assets/Oyster-Mushrooms.png";

// Quality Section
import QualityImg from "../assets/quality-stage.png"; 
import productIcon from "../assets/productIcon.svg"; 

// Step Icons
import CultivationIcon from "../assets/Icon (5).svg";
import HarvestingIcon from "../assets/Icon (4).svg";
import ProcessingIcon from "../assets/Icon (3).svg";
import PackagingIcon from "../assets/Icon (2).svg";
import DistributionIcon from "../assets/Icon (1).svg";



const categories = [
  { title: "Fresh Fruits", img: FreshFruits },
  { title: "Fresh Vegetables", img: FreshVegetables },
  { title: "Herbal & Medicinal", img: HerbalMedicinal },
  { title: "Mushrooms Farming", img: MushroomsFarming },
  { title: "Nursery Plants", img: NurseryPlants },
  { title: "Processed Products", img: ProcessedProducts },
];

const featuredItems = [
  { title: "Kesar Mango", category: "FRUIT CATEGORY", description: "Sourced from premium groves, maintaining perfect brix levels.", img: KesarMango },
  { title: "Tomato", category: "VEGETABLE CATEGORY", description: "Hydroponically balanced for rich color and firm texture.", img: Tomato },
  { title: "Rama Tulsi", category: "HERBAL CATEGORY", description: "Medicinal grade leaves processed under sterile conditions.", img: RamaTulsi },
  { title: "Mushroom", category: "MYCOLOGY CATEGORY", description: "Climate-controlled indoor farming for year-round consistency.", img: Mushroom },
];

const steps = [
  { title: "Cultivation", icon: CultivationIcon },
  { title: "Harvesting", icon: HarvestingIcon },
  { title: "Processing", icon: ProcessingIcon },
  { title: "Packaging", icon: PackagingIcon },
  { title: "Distribution", icon: DistributionIcon },
];

// Reusable Intersection Observer hook for handling on-scroll entry animations
function useScrollReveal(threshold = 0.05) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
  // SEO
  document.title =
    "Agricultural Products | Fresh Fruits, Vegetables & Farming Solutions | VanShakti";

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Explore VanShakti's premium agricultural products including fresh fruits, vegetables, medicinal plants, mushrooms, nursery plants, and processed agricultural products cultivated with quality and sustainability."
    );

  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "agricultural products, fresh fruits, fresh vegetables, medicinal plants, mushroom farming, nursery plants, organic produce, farming products, agriculture solutions, farm products India, sustainable agriculture, VanShakti products"
    );

  // Open Graph SEO
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute(
      "content",
      "Agricultural Products | VanShakti"
    );

  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute(
      "content",
      "Discover premium agricultural products, fresh produce, medicinal plants, mushroom farming, and sustainable cultivation solutions from VanShakti."
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
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [elementRef, isIntersecting];
}

export default function Products() {
  const navigate = useNavigate(); 

  // Individual segment visibility tracking references
  const [heroRef, heroVisible] = useScrollReveal(0.02);
  const [catRef, catVisible] = useScrollReveal(0.05);
  const [featRef, featVisible] = useScrollReveal(0.05);
  const [qualityRef, qualityVisible] = useScrollReveal(0.05);
  const [ctaRef, ctaVisible] = useScrollReveal(0.05);

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#fff", overflowX: "hidden" }}>
      
      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef}
        className={`prod-reveal-parent ${heroVisible ? "prod-active" : ""}`}
        style={{
          position: "relative",
          backgroundImage: `url(${ProductsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "140px 20px 120px",
          color: "#1c1c1c",
          borderRadius: "0px 0px 24px 24px",
          minHeight: "650px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0,  zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "850px", margin: "0 ", width: "100%", padding: "0 10px" }}>
          <div className="prod-reveal-item delay-1">
            <span style={{
  display: "inline-block",
  // backgroundColor: "rgba(255, 255, 255, 0.27)",
  color: "#090a0a",
  padding: "6px 10px",
  borderRadius: "20px",
  fontSize: "0.85rem",
  fontWeight: 600,
  border:"1px solid #3B3939",
  letterSpacing: "0.5px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  fontFamily: "'DM Sans",
}}>
              Our Products
            </span>
          </div>
          
          <div className="prod-reveal-item delay-2">
            <h1 style={{ fontSize: "3.5rem", fontWeight: 400, marginTop: "24px", marginBottom: "20px", lineHeight: "1.15", color: "#111", letterSpacing: "-0.5px" }}>
              Fresh Produce and <br />Specialized Agriculture
            </h1>
          </div>

          <div className="prod-reveal-item delay-3">
            <p style={{ fontSize: "1.25rem", lineHeight: "1.65", color: "#222", maxWidth: "500px", margin: 0 }}>
              VanShakti supports a diverse agricultural ecosystem including fruits, vegetables, medicinal plants, mushroom farming, nursery development, and value-added agricultural products.
            </p>
          </div>
        </div>
      </section>

      {/* ── CULTIVATION CATEGORIES SECTION ── */}
      <section 
        ref={catRef}
        className={`container my-5 py-4 prod-reveal-parent ${catVisible ? "prod-active" : ""}`}
      >
        <div style={{ padding: "25px 0", marginBottom: "40px" }}>
          <div className="row align-items-center">
            <div className="col-md-5 mb-3 mb-md-0 prod-reveal-item delay-1">
              <h3 style={{ color: "#065532", fontWeight: 500, fontSize: "2.2rem", margin: 0, letterSpacing: "-0.5px" }}>
                Cultivation Categories
              </h3>
            </div>
            <div className="col-md-7 prod-reveal-item delay-2">
              <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.6", margin: 0, borderLeft: "3px solid #6fcf4a", paddingLeft: "20px" }}>
                Intelligent cultivation across six specialized verticals, maintaining optimized, strict parameters to maximize pure quality output and consistency.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {categories.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 prod-reveal-item delay-3">
              <div 
                className="prod-zoom-card"
                style={{ 
                  position: "relative", 
                  borderRadius: "16px", 
                  overflow: "hidden", 
                  width: "100%", 
                  height: "440px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.04)"
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="zoom-target"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" 
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)",
                  zIndex: 1
                }} />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  padding: "24px",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1.3rem",
                  letterSpacing: "-0.3px",
                  zIndex: 2
                }}>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED SELECTIONS SECTION ── */}
      <section 
        ref={featRef}
        className={`container my-5 py-5 prod-reveal-parent ${featVisible ? "prod-active" : ""}`}
      >
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          <div className="prod-reveal-item delay-1">
            <h3 style={{ color: "#1a3b2f", fontWeight: 500, fontSize: "2.2rem", margin: "0 0 8px 0" }}>
              Featured Selections
            </h3>
            <p style={{ color: "#666", fontSize: "1rem", margin: 0 }}>
              The absolute pinnacle of our production and seasonal output
            </p>
          </div>
          <div className="d-flex gap-2 prod-reveal-item delay-2">
            <button className="btn btn-light rounded-circle shadow-sm" style={{ width: "45px", height: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>&#8592;</button>
            <button className="btn btn-light rounded-circle shadow-sm" style={{ width: "45px", height: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>&#8594;</button>
          </div>
        </div>

        <div className="row g-4">
          {featuredItems.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 prod-reveal-item" style={{ transitionDelay: `${idx * 100 + 150}ms` }}>
              <div
                className="shadow-sm rounded prod-hover-card"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #eaeaea",
                  overflow: "hidden",
                  padding: "24px",
                  minHeight: "480px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "16px",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                <div style={{ overflow: "hidden", borderRadius: "12px", width: "100%", height: "240px", marginBottom: "20px" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-zoom-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                </div>
                <h5 style={{ fontWeight: 500, fontSize: "1.15rem", marginBottom: "6px", color: "#111", textAlign: "center" }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: "0.78rem", fontWeight: 500, color: "#2c7a4b", marginBottom: "12px", textAlign: "center", letterSpacing: "1px" }}>
                  {item.category}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#555", textAlign: "center", lineHeight: "1.5", margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUALITY INFRASTRUCTURE SECTION ── */}
      <section 
        ref={qualityRef}
        className={`container my-5 py-4 prod-reveal-parent ${qualityVisible ? "prod-active" : ""}`}
      >
        <div className="row align-items-center g-5">
          <div className="col-lg-6 prod-reveal-item delay-1">
            <h3 style={{ color: "#1a3b2f", fontWeight: 500, fontSize: "2.2rem", marginBottom: "20px", lineHeight: "1.25" }}>
              Quality Maintained <br />Across Every Single Stage
            </h3>
            <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "30px" }}>
              Structured sourcing, precision batch handling, and strict operation control practices safeguard optimal freshness, premium product consistency, and distribution chain reliability.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div style={{ backgroundColor: "#eaf7e6", padding: "10px", borderRadius: "12px", display: "flex", shrink: 0 }}>
                  <img src={productIcon} alt="Icon" style={{ width: "22px", height: "22px" }} />
                </div>
                <div>
                  <h6 style={{ fontWeight: 500, color: "#111", margin: "0 0 4px 0", fontSize: "1.05rem" }}>Temperature Control Logistics</h6>
                  <p style={{ color: "#666", margin: 0, fontSize: "0.92rem" }}>Unbroken end-to-end cold-chain logistics preservation from immediate field harvest lines to target deliveries.</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div style={{ backgroundColor: "#eaf7e6", padding: "10px", borderRadius: "12px", display: "flex", shrink: 0 }}>
                  <img src={productIcon} alt="Icon" style={{ width: "22px", height: "22px" }} />
                </div>
                <div>
                  <h6 style={{ fontWeight: 500, color: "#111", margin: "0 0 4px 0", fontSize: "1.05rem" }}>Scientific Lab Diagnostics</h6>
                  <p style={{ color: "#666", margin: 0, fontSize: "0.92rem" }}>Continuous analytical soil nutrient mapping profiles and crop diagnostic testing runs inside certified laboratories.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 prod-reveal-item delay-2" style={{ perspective: "1000px" }}>
            <img
              src={QualityImg}
              alt="Quality Infrastructure"
              className="img-fluid rounded shadow-lg image-tilt-effect"
              style={{ borderRadius: "20px", transition: "transform 0.4s ease", width: "100%" }}
            />
          </div>
        </div>

        {/* Dynamic Connected Process Pipeline Steps */}
        <div className="d-flex justify-content-between align-items-center mt-5 pt-4 flex-wrap position-relative prod-reveal-item delay-3">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="d-flex flex-column align-items-center mb-4 pipeline-step-node" style={{ minWidth: "120px", zIndex: 2 }}>
                <div
                  className="step-icon-container"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#eaf7e6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "12px",
                    // transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 127)",
                    boxShadow: "0 4px 10px rgba(44,122,75,0.06)"
                  }}
                >
                  <img src={step.icon} alt={step.title} style={{ width: "32px", height: "32px" }} />
                </div>
                <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#1a3b2f", textAlign: "center" }}>
                  {step.title}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className="pipeline-flow-line"
                  style={{
                    flex: 1,
                    height: "2px",
                    background: "linear-gradient(to right, #eaf7e6 0%, rgba(234,247,230,0.1) 100%)",
                    margin: "0 10px",
                    alignSelf: "center",
                    transformOrigin: "left center",
                    zIndex: 1,
                    marginTop: "-24px"
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── CTA / BOTTOM HERO PARTNERSHIP SECTION ── */}
      <section
        ref={ctaRef}
        className={`prod-reveal-parent ${ctaVisible ? "prod-active" : ""}`}
        style={{ maxWidth: "1240px", margin: "80px auto 40px", padding: "0 20px" }}
      >
        <div
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "14px",
            padding: "120px 60px",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)"
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.09)" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: "750px" }}>
            <h2 className="prod-reveal-item delay-1" style={{ fontSize: "3rem", fontWeight: 500, lineHeight: 1.25, marginBottom: "20px", letterSpacing: "-0.5px" }}>
              Looking for Highly Reliable Agricultural Products?
            </h2>
            <p className="prod-reveal-item delay-2" style={{ fontSize: "1.2rem", marginBottom: "36px", color: "#f5f5f5", fontWeight: 400, lineHeight: "1.6" }}>
              Connect directly with our operations team to explore commercial partnership opportunities, supply infrastructure setups, and volume export channels.
            </p>

            <div className="prod-reveal-item delay-3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-premium-cta"
                style={{
                  backgroundColor: "#1c5a3e",
                  color: "#fff",
                  border: "none",
                  padding: "14px 36px",
                  borderRadius: "30px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 15px rgba(28,90,62,0.3)"
                }}
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRAPHIC ENGINEERING ANIMATION ENGINE ── */}
      <style>{`
        /* Staged Reveal Base Properties */
        .prod-reveal-parent .prod-reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Revealed State Trigger */
        .prod-reveal-parent.prod-active .prod-reveal-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* Interactive Stagger Delays */
        .delay-1 { transition-delay: 60ms !important; }
        .delay-2 { transition-delay: 180ms !important; }
        .delay-3 { transition-delay: 300ms !important; }

        /* Cultivation Category Zoom Effect */
        .prod-zoom-card:hover .zoom-target {
          transform: scale(1.06);
        }

        /* Featured Selection Interactive Scale Transition */
        .prod-hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important;
          border-color: #2c7a4b !important;
        }
        .prod-hover-card:hover .card-zoom-img {
          transform: scale(1.04);
        }

        /* Quality Section Image Hover Effect */
        .image-tilt-effect:hover {
          transform: scale(1.02) rotateX(1deg) rotateY(1deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }

        /* Process Steps Interactive Node Pops */
        .pipeline-step-node:hover .step-icon-container {
          transform: scale(1.15);
          background-color: #2c7a4b !important;
        }
        .pipeline-step-node:hover .step-icon-container img {
          filter: brightness(0) invert(1);
        }

        /* Call To Action Interactive Button Feedback */
        .btn-premium-cta:hover {
          background-color: #15442e !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(28,90,62,0.4) !important;
        }
        .btn-premium-cta:active {
          transform: translateY(0);
        }

        /* Responsive Pipeline Formatting Adjustments */
        @media(max-width: 991px) {
          .pipeline-flow-line { display: none !important; }
          .pipeline-step-node { min-width: 45% !important; margin-bottom: 24px; }
        }
      `}</style>

    </div> 
  );
}