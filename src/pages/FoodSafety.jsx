import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HeroBg from "../assets/foodhero.png"; 
import QualityIcon from "../assets/Icon3.png";
import HygienicIcon from "../assets/Icon.png";
import PackagingIcon from "../assets/Icon (1).png";
import ProcessIcon from "../assets/Icon (2).png";
import QualityBanner from "../assets/foodquality.jpg"; 

// Certification logos
import FSSAI from "../assets/logo1.png";
import APEDA from "../assets/logo2.png";
import FSSC from "../assets/logo3.png";
import GLOBALGAP from "../assets/logo4.png";
import BRGCS from "../assets/logo5.png";
import FAIRTRADE from "../assets/logo6.png";

<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

// Reusable Intersection Observer Hook
function useScrollReveal(threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);
 useEffect(() => {
  // SEO
  document.title =
    "Food Safety & Quality Standards | VanShakti Agriculture";

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "VanShakti follows strict food safety, quality inspection, hygienic handling, packaging standards, and operational monitoring to ensure safe, reliable, and high-quality agricultural products."
    );

  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "food safety, food quality, agricultural quality standards, FSSAI, food certification, hygienic handling, packaging standards, agricultural safety, food compliance, sustainable agriculture, VanShakti"
    );

  // Open Graph
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute(
      "content",
      "Food Safety & Quality Standards | VanShakti Agriculture"
    );

  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute(
      "content",
      "Learn how VanShakti maintains food safety, quality assurance, certification compliance, and trusted agricultural standards."
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

function FoodSafety() {
  // Setup view tracking for each separate layout section
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
<div
  style={{
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fafafa",
    overflowX: "hidden",
    width: "100%",
    maxWidth: "100vw",
  }}
>      
      {/* 1. HERO SECTION */}
      <section
  ref={heroRef}
  className={`text-start text-white d-flex flex-column justify-content-center custom-reveal-container ${
    heroVisible ? "reveal-active" : ""
  }`}
  style={{
    backgroundImage: `url(${HeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: " 700px",
padding: "20px",
// width: "100%",
maxWidth: "100%",
    marginInline: "auto",
    position: "relative",
  }}
>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.35)", zIndex: 1 }} />
        
        <div style={{ position: "relative", zIndex: 2 }} className="custom-reveal-element delay-1">
          <div
            className="badge bg-dark bg-opacity-50 mb-3"
            style={{
              fontSize: "1rem",
              padding: "6px 12px",
              borderRadius: "12px",
              display: "inline-block",
              fontFamily: "'DM Sans",
              border: "1px solid #3B3939",
            }}
          >
            Food Safety & Quality
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2 }} className="custom-reveal-element delay-2">
          <div className="fw-medium mb-3" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
            Built on Quality, Safety and Trust
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2 }} className="custom-reveal-element delay-3">
          <div style={{ maxWidth: "600px", fontSize: "1.2rem", opacity: 0.9 }}>
            VanShakti follows structured quality and food safety practices to ensure consistency, reliability, and confidence across the agricultural ecosystem.
          </div>
        </div>
      </section>

      {/* commitment setion  */}
      <section
  style={{
    backgroundColor: "#F5F5F2",
    padding: "40px 80px",
    width: "100%",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* Left Side */}
    <div
      style={{
        flex: "1",
        minWidth: "320px",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "400",
          lineHeight: "1.2",
          color: "#0D5C46",
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Our commitment to
        <br />
        Food Safety
      </h2>
    </div>

    {/* Right Side */}
    <div
      style={{
        flex: "1",
        minWidth: "320px",
        display: "flex",
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      {/* Vertical Line */}
      <div
        style={{
          width: "2px",
          height: "80px",
          backgroundColor: "#C9D0C8",
          marginTop: "5px",
        }}
      />

      {/* Content */}
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "#5A5A5A",
          margin: 0,
          fontWeight: "300",
          fontFamily: "'DM Sans', sans-serif",
          maxWidth: "450px",
        }}
      >
        At VanShakti, we understand that food quality and safety matter to
        every consumer. That’s why we follow structured and traceable
        practices to ensure fresh, reliable, and safe produce that meets
        trusted quality standards.
      </p>
    </div>
  </div>
</section>

      {/* . COMMITMENT SECTION */}
      <div
  ref={cardsRef}
  className={`custom-reveal-container ${cardsVisible ? "reveal-active" : ""}`}
  style={{
    maxWidth: "1200px",
    marginInline: "auto",
    backgroundColor: "#f4f4f0",
    padding: "40px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
    gridTemplateRows: "repeat(2, 1fr)",    // 2 rows
    gap: "24px",                           // spacing between cards
    justifyContent: "center",
  }}
>
  {standards.slice(0, 4).map((item, idx) => (
    <div
      key={idx}
      className="custom-reveal-element"
      style={{
        transitionDelay: `${idx * 120}ms`,
       width: "100%",
      maxWidth: "520px",
           aspectRatio: "16 / 7",
        margin: "0 auto",
      }}
    >
      <div
        className="h-100 bg-white hover-shadow-effect"
        style={{
          padding: "24px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
          textAlign: "left",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Icon */}
        <div
          className="mb-3 d-flex align-items-center justify-content-center"
          style={{ width: "32px", height: "32px" }}
        >
          <img
            src={item.icon}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "1.65rem",
            fontWeight: "500",
            color: "#0d5c3a",
            marginBottom: "14px",
          }}
        >
          {item.title}
        </div>

        {/* Description */}
        <div style={{ fontSize: "0.95rem", color: "#555555", lineHeight: "1.6", fontWeight: "400" }}>
          {item.desc}
        </div>
      </div>
    </div>
  ))}
</div>
      {/* 4. OPERATIONAL STANDARDS (FULLY REFACETORED WITH DIV AND TOP-DOWN CASCADE) */}
      <section 
        ref={opsRef} 
        className={`container my-5 custom-reveal-container ${opsVisible ? "reveal-active" : ""}`} 
        style={{
  maxWidth: "1200px",
  padding: "clamp(20px, 5vw, 60px)",
}}
      >
        <div className="row">
          {/* Left Summary Block */}
          <div className="col-lg-4 mb-4 custom-reveal-element delay-1">
           <div className="text-success" style={{ fontSize: "2rem", marginBottom: "12px" }}>
              Operational Standards
            </div>
            <div style={{ color: "#495057", fontSize: "1rem" }}>
              Our end-to-end framework for ensuring safety at scale.
            </div>
          </div>
          
          {/* Right Sequential Stream */}
          <div className="col-lg-8">
            {operationalPoints.map((item, idx) => (
              <div 
                key={item.num} 
                className="custom-reveal-element d-flex flex-column mb-4"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="d-flex align-items-start">
                  <div className="text-success fw-bold me-3" style={{ minWidth: "30px", fontSize: "1.15rem" }}>
                    {item.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="fw-bold mb-1" style={{ fontSize: "1.25rem", color: "#212529" }}>
                      {item.title}
                    </div>
                    <div className="mb-0 text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
                <div className="mt-3" style={{ borderTop: "1px solid #e0e0e0", width: "100%" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAINTAINING QUALITY BANNER */}
      <section
        ref={bannerRef}
        className={`custom-reveal-container ${bannerVisible ? "reveal-active" : ""}`}
        style={{
          backgroundImage: `url(${QualityBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          maxWidth: "1200px",
          marginInline: "auto",
          borderRadius: "12px",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)", zIndex: 1 }} />
        <div 
          className="custom-reveal-element delay-1" 
          style={{ position: "relative", zIndex: 2, fontWeight: 500, fontSize: "2.25rem", padding: "0 20px" }}
        >
          Maintaining quality at every Stage
        </div>
      </section>

      {/* 6. CERTIFICATIONS SECTION */}
    <div 
  ref={certsRef} 
  className={`container my-5 text-center custom-reveal-container ${certsVisible ? "reveal-active" : "reveal-active"}`} 
  style={{ 
    maxWidth: "1200px", 
    padding: "60px 20px",
    minHeight: "400px" 
  }}
>
  {/* Title Container Block */}
  <div className="custom-reveal-element delay-1">
    <div className="fw-sucess mb-3 text-success" style={{ fontSize: "2rem" }}>
      Certifications for food quality and safety
    </div>
  </div>
  
  {/* Subtitle Description Block */}
  <div className="custom-reveal-element delay-2">
    <div className="mb-5 text-muted mx-auto" style={{ maxWidth: "500px", fontSize: "1rem" }}>
      Our commitment to food quality is reflected through certifications and standards recognized by authorities in India and globally.
    </div>
  </div>

  {/* Certifications Dynamic 3x2 Grid */}
  <div className="row justify-content-center g-4">
    {certs && certs.length > 0 ? (
      certs.map((cert, idx) => (
        <div 
          key={idx} 
          className="col-12 col-md-6 col-lg-4 d-flex justify-content-center custom-reveal-element"
          style={{ transitionDelay: `${idx * 120}ms` }}
        >
          <div 
            className="bg-white rounded shadow-sm p-4 d-flex flex-column align-items-center justify-content-center hover-shadow-effect" 
            style={{ 
              width: "100%", 
              maxWidth: "340px", 
              height: "350px", 
              border: "1px solid #f0f0f0",
              margin: "0 auto"
            }}
          >
            {/* Logo Wrapper Container with Image Presence Check */}
            <div className="mb-3 d-flex align-items-center justify-content-center" style={{ width: "90px", height: "90px", borderRadius: "8px" }}>
              {cert.logo ? (
                <img 
                  src={cert.logo} 
                  alt={cert.title || "Certification Logo"} 
                  style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                />
              ) : (
                <div style={{ fontSize: "0.75rem", color: "#ccc" }}>No Logo</div>
              )}
            </div>
            
            {/* Certificate Headline Title Badge */}
            <div className="fw-bold text-success" style={{ fontSize: "1.1rem", margin: "6px 0" }}>
              {cert.title || "Standard Certification"}
            </div>
            
            {/* Subtitle Metadata Label Description */}
            <div className="text-muted text-center" style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
              {cert.subtitle || "Verified Compliance Framework"}
            </div>
          </div>
        </div>
      ))
    ) : (
      /* Fallback handling state to prevent code compilation error if certs array is empty */
      <div className="text-muted py-5">No certification parameters loaded.</div>
    )}
  </div>
</div>

      {/* GLOBAL HIGH-PERFORMANCE ANIMATION LAYER */}
      <style>{`
        /* Global Animation Setup - Safe Up-to-Down Flow Configuration */
        .custom-reveal-container .custom-reveal-element {
          opacity: 0;
          transform: translateY(-35px); /* Hidden offset state triggers downwards */
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Revealed Core State Handler */
        .custom-reveal-container.reveal-active .custom-reveal-element {
          opacity: 1;
          transform: translateY(0);
        }

        /* Delays for explicit layout block pieces */
        .delay-1 { transition-delay: 100ms !important; }
        .delay-2 { transition-delay: 250ms !important; }
        .delay-3 { transition-delay: 400ms !important; }

        /* Premium Micro-interactions */
        .hover-shadow-effect {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .hover-shadow-effect:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    </div>
  );
}

export default FoodSafety;