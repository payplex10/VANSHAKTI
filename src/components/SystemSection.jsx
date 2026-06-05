import React, { useEffect, useRef, useState } from "react";

// Import images
import FarmersImg from "../assets/farmer.png"; // main bottom image
import PlantImg from "../assets/nature.png";     // small image card
import SoilImg from "../assets/soil.png";       // small image card

// Background image
import BackgroundImg from "../assets/leaf.svg";

function SystemSection() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger the animation once the user scrolls 10% into the section
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Unobserve after it triggers so the animation doesn't repeat when scrolling up/down
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Shared cubic-bezier easing for a snappy, high-end feel
  const transitionTiming = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";

  return (
    <section 
      ref={sectionRef}
      style={{ 
        backgroundColor: "#fffffff", 
        padding: "80px 20px",
        overflow: "hidden" 
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", }}>

        {/* Badge */}
        <span
          style={{
            display: "inline-block",
            border: "1px solid #065532",
          backgroundColor:"#F7F8F6",
            fontWeight:"400",
            fontSize:"16px",
            borderRadius: "20px",
            fontStyle: "italic",
            padding: "4px 12px",
            color: "#000000",
            marginBottom: "16px",
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? "translateY(0)" : "translateY(15px)",
            transition: transitionTiming,
          }}
        >
          Integrated Agriculture Network
        </span>

        {/* Heading and Description */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            alignItems: "flex-start",
            marginBottom: "40px",
          }}
        >
          {/* Headline Container */}
          <div 
            style={{ 
              flex: "1 1 500px", 
              Width: "491px",
              height:"174px",
              lineHeight:"58px",
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
              transition: transitionTiming,
              transitionDelay: "0.1s"
            }}
          >
            <h2 style={{ fontSize: "48px", fontWeight: 400, marginBottom: "20px", color:"#000000"}}>
              Building a smarter Farm-to-Market Ecosystem
            </h2>
          </div>

          {/* Description Container */}
          <div 
            style={{ 
              flex: "1 1 500px", 
              minWidth: "625px",
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
              transition: transitionTiming,
              transitionDelay: "0.2s"
            }}
          >
            <p style={{ fontSize: "24px", lineHeight: "32px", color: "#191C1A", fontWeight:"400", fontStyle:"DM Sans" }}>
              We are transforming agriculture by connecting farmers, infrastructure, and markets into one seamless system. 
              Through better coordination, transparent processes, and efficient supply chains, we enable farmers to grow stronger and businesses to operate with confidence.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          
          {/* Card 1 - Image */}
          <div 
            style={{ 
              flex: "1 1 220px", 
              borderRadius: "15px", 
              overflow: "hidden",
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? "translateY(0)" : "translateY(30px)",
              transition: transitionTiming,
              transitionDelay: "0.3s"
            }}
          >
            <img src={SoilImg} alt="Farmers" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
          </div>

          {/* Card 2 - Stats */}
          <div 
            style={{ 
              flex: "1 1 220px", 
              backgroundColor: "#F8F8F8", 
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? "translateY(0)" : "translateY(30px)",
              transition: transitionTiming,
              transitionDelay: "0.4s"
            }}
          >
            <h3 style={{ fontSize: "36px", fontWeight: "500", color: "#000000", marginBottom: "8px" }}>1000+</h3>
            <h5 style={{ fontSize: "22px", fontWeight: "500", marginBottom: "12px" }}>Farmers Connected</h5>
            <p style={{ fontSize: "16px",fontWeight:"400", lineHeight: "1.5", color: "#3E4A3F" }}>
              Building a growing network of farmers supported by a structured and reliable supply chain.
            </p>
          </div>

          {/* Card 3 - Image */}
          <div 
            style={{ 
              flex: "1 1 220px", 
              borderRadius: "15px", 
              overflow: "hidden",
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? "translateY(0)" : "translateY(30px)",
              transition: transitionTiming,
              transitionDelay: "0.5s"
            }}
          >
            <img src={PlantImg} alt="Plant" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
          </div>

          {/* Card 4 - Stats */}
          <div 
            style={{ 
              flex: "1 1 220px", 
              backgroundColor: "#D0F24C", 
              borderRadius: "15px", 
              padding: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? "translateY(0)" : "translateY(30px)",
              transition: transitionTiming,
              transitionDelay: "0.6s"
            }}
          >
            <h3 style={{ fontSize: "36px", fontWeight: "500", marginBottom: "8px" }}>End-to-End</h3>
            <h5 style={{ fontSize: "22px", fontWeight: "500", marginBottom: "12px" }}>Supply Chain Management</h5>
            <p style={{ fontSize: "16px", fontWeight:"400", lineHeight: "1.5", color: "#3E4A3F" }}>
              From farm operations to delivery, ensuring efficiency, quality, and transparency at every stage.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SystemSection;