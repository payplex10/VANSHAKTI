import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

import SustainabilityBg from "../assets/sustaibilityhero.png"; 
import SustainabilityMobileBg from "../assets/SustainabilityMobile.png";
import FutureGenerationImg from "../assets/future-generation.png"; 

// Four Key Areas images
import soilImg from "../assets/soil-health.png";
import waterImg from "../assets/water.jpg";
import responsibleImg from "../assets/responsible.png";
import ecosystemImg from "../assets/long-term-ecosystem.jpg";

// Sustainability Quote image
import SustainabilityQuoteImg from "../assets/sustainability-quote.png";

// Practices images
import SoilImg from "../assets/soil-management.png";
import ResourceImg from "../assets/resource-efficiency.png";
import EcosystemImg from "../assets/ecosystem-awareness.png";

// Reusable Intersection Observer Hook for Top-to-Bottom reveals
function useScrollReveal(threshold = 0.15) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
  // SEO
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

  // Open Graph SEO
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
  // Hook instances for tracking viewport entries per block container
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [generationRef, generationVisible] = useScrollReveal(0.15);
  const [areasRef, areasVisible] = useScrollReveal(0.12);
  const [quoteRef, quoteVisible] = useScrollReveal(0.15);
  const [practicesRef, practicesVisible] = useScrollReveal(0.1);

  // Four Key Areas Layout Array
  const cards = [
    { title: "Soil Health", desc: "Supporting healthier and more productive agricultural land.", img: soilImg },
    { title: "Water Conservation", desc: "Encouraging responsible and efficient water usage.", img: waterImg },
    { title: "Responsible Practices", desc: "Promoting sustainable and balanced agricultural methods.", img: responsibleImg },
    { title: "Long-Term Ecosystems", desc: "Building systems designed for future agricultural resilience.", img: ecosystemImg },
  ];

  // Practices Section Layout Array
  const practices = [
    { title: "Soil Management", subtitle: "PRACTICE 01", desc: "We implement regenerative techniques that focus on biological soil health, ensuring that the land remains productive for decades rather than seasons.", img: SoilImg, reverse: false },
    { title: "Resource Efficiency", subtitle: "PRACTICE 02", desc: "Through precision data and advanced monitoring, we reduce unnecessary waste in water, nutrients, and energy, maximizing the utility of every precious input.", img: ResourceImg, reverse: true },
    { title: "Ecosystem Awareness", subtitle: "PRACTICE 03", desc: "Our approach respects the local flora and fauna, creating a symbiotic relationship between agricultural production and the surrounding natural habitats.", img: EcosystemImg, reverse: false },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", overflowX: "hidden", backgroundColor: "#fafafa" }}>
      
      {/* ── 1. HERO SECTION ── */}
      <div
        ref={heroRef}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          // marginTop: "50px",
          position: "relative",
          transition: "background-image 0.3s ease",
          "--bg-desktop": `url(${SustainabilityBg})`,
          "--bg-mobile": `url(${SustainabilityMobileBg})`,
        }}
        className={`sustainability-section sus-reveal-container ${heroVisible ? "sus-active" : ""}`}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .sustainability-section {
            background-image: var(--bg-desktop);
            padding: 120px 20px;
            text-align: left;
            min-height: 500px;
            display: flex;
            align-items: center;
          }
          .sustainability-section::before {
            content: '';
            position: absolute;
            inset: 0;
            // background-color: rgba(0,0,0,0.3);
            z-index: 1;
          }
          .sustainability-section .content-box { margin: 0; position: relative; zIndex: 2; }
          .sustainability-section h1 { font-size: 3rem; }
          .sustainability-section p { font-size: 1.2rem; }

          @media (max-width: 68px) {
            .sustainability-section {
              background-image: var(--bg-mobile);
              padding: 80px 16px;
              text-align: center;
              min-height: 500px;
            }
            .sustainability-section .content-box { margin: 0 auto; }
            .sustainability-section h1 { font-size: 2rem; }
            .sustainability-section p { font-size: 1rem; }
          }
        `}} />

        <div className="content-box" style={{ maxWidth: "600px", position: "relative", zIndex: 2 }}>
          <div className="sus-reveal-element delay-1">
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.18)",
                padding: "5px 12px",
                borderRadius: "15px",
                fontSize: "1 rem",
                display: "inline-block",
                marginBottom: "10px",
                fontFamily: "'DM Sans",
                border: "1px solid #3B3939"
              }}
            >
              Sustainability
            </div>
          </div>
          <div className="sus-reveal-element delay-2">
            <div style={{ fontWeight: 500, fontSize: "3rem", marginTop: "20px", lineHeight: "1.2" }}>
              Growing with Responsibility
            </div>
          </div>
          <div className="sus-reveal-element delay-3">
            <div style={{ marginTop: "20px", lineHeight: "1.5", opacity: 0.95 }}>
              VanShakti believes sustainable agriculture aligns with responsible practices that protect resources, strengthen ecosystems, and support long-term agricultural growth.
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. FUTURE GENERATIONS SECTION ── */}
      <div 
        ref={generationRef} 
        className={`container my-5 sus-reveal-container ${generationVisible ? "sus-active" : ""}`}
        style={{ padding: "40px 0" }}
      >
        <div className="row align-items-center g-4">
          <div className="col-md-6 order-md-1 order-2 sus-reveal-element delay-1">
            <div className="fw-bold text-success mb-3" style={{ fontSize: "2.25rem", lineHeight: "1.2", fontWeight: 300 }}>
              Building for Future Generations
            </div>
            <div style={{ lineHeight: "1.65", color: "#4a4a4a", fontSize: "1.05rem" }}>
              Sustainability is not just about production—it is about creating systems that support healthier soil, efficient resource use, and long-term environmental balance. At VanShakti, we integrate ecological wisdom with precision technology to ensure our footprint is as gentle as it is effective.
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 sus-reveal-element delay-2">
            <img 
              src={FutureGenerationImg} 
              alt="future-generation" 
              className="img-fluid rounded shadow-sm" 
              style={{ borderRadius: "20px", width: "100%", maxHeight: "400px", objectFit: "cover" }} 
            />
          </div>
        </div>
      </div>

      {/* ── 3. FOUR KEY AREAS (PARENT CREAM DIV) ── */}
      <div 
        ref={areasRef}
        className={`sus-reveal-container ${areasVisible ? "sus-active" : ""}`}
        style={{ backgroundColor: "#F4F4EE", padding: "80px 20px", borderRadius: "15px", margin: "60px auto", maxWidth: "1200px" }}
      >
        <div className="container">
          <div className="row g-4">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="col-12 col-md-6 sus-reveal-element"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div 
                  className="sus-hover-card"
                  style={{ 
                    backgroundImage: `url(${card.img})`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    borderRadius: "15px",
                    minWidth:"58px", 
                    height: "400px", 
                    display: "flex", 
                    alignItems: "flex-end", 
                    padding: "30px", 
                    color: "white", 
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }} />
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div className="fw-bold" style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{card.title}</div>
                    <div style={{ fontSize: "0.95rem", lineHeight: "1.4", opacity: 0.9 }}>{card.desc}</div>
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
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.25)", maxWidth: "1440px", marginInline: "auto", borderRadius: "15px" }} />
        <div 
          className="sus-reveal-element delay-1"
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2, padding: "0 20px", width: "100%" }}
        >
          <div style={{ fontWeight: "500", fontSize: "2.5rem", lineHeight: "1.3", letterSpacing: "0.5px", textShadow: "0px 3px 12px rgba(0,0,0,0.5)" }}>
            "Sustainability begins at the source."
          </div>
        </div>
      </div>

      {/* ── 5. PRACTICES SECTION ── */}
      <div 
        ref={practicesRef}
        className={`container my-5 sus-reveal-container ${practicesVisible ? "sus-active" : ""}`}
      >
        {practices.map((practice, index) => (
          <div 
            key={index} 
            className={`row g-5 align-items-center mb-5 ${practice.reverse ? "flex-md-row-reverse" : ""}`}
          >
            {/* Practice Image Box Container */}
            <div className="col-md-6 sus-reveal-element delay-1">
              <img 
                src={practice.img} 
                alt={practice.title.toLowerCase().replace(" ", "-")} 
                className="img-fluid rounded shadow-sm" 
                style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "15px" }} 
              />
            </div>
            
            {/* Practice Text Content Box */}
            <div className="col-md-6 sus-reveal-element delay-2">
              <div className="text-success fw-bold mb-1" style={{ letterSpacing: "1.5px", fontSize: "0.9rem" }}>
                {practice.subtitle}
              </div>
              <div className="fw-bold mb-3" style={{ fontSize: "1.75rem", color: "#212529" }}>
                {practice.title}
              </div>
              <div style={{ lineHeight: "1.65", color: "#4a4a4a", fontSize: "1.02rem" }}>
                {practice.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── GLOBAL CASCADE INTERSECTION STYLES ── */}
      <style>{`
        /* Core Hidden State configuration setting elements to reveal downwards */
        .sus-reveal-container .sus-reveal-element {
          opacity: 0;
          transform: translateY(-35px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Active Transition State handler triggered by Observer */
        .sus-reveal-container.sus-active .sus-reveal-element {
          opacity: 1;
          transform: translateY(0);
        }

        /* Sequence utility metrics for stacked structures */
        .delay-1 { transition-delay: 100ms !important; }
        .delay-2 { transition-delay: 240ms !important; }
        .delay-3 { transition-delay: 380ms !important; }

        /* Smooth interactive effects for card matrices */
        .sus-hover-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15) !important;
        }
        .sus-hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 30px rgba(0,0,0,0.25) !important;
        }
      `}</style>

    </div>
  );
};

export default Sustainability;