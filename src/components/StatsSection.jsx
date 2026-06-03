import React, { useEffect, useRef, useState } from "react";

// Custom hook to cleanly handle scroll triggers via IntersectionObserver
function useIntersectionReveal(threshold = 0.1) {
  const [hasRevealed, setHasRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
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

  return [elementRef, hasRevealed];
}

// Sub-component to manage individual counting ticks
function AnimatedStatCounter({ targetString, triggerStart }) {
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (!triggerStart) {
      // Show empty or zero state before scroll triggers execution
      setDisplayValue(targetString.replace(/\d+/g, "0"));
      return;
    }

    // Extract raw numerical values (e.g., "1000" from "1000+", "100" from "100 Acres")
    const numericMatch = targetString.match(/\d+/);
    
    // If no numbers exist (e.g., "Multiple Regions"), skip counter and render string immediately
    if (!numericMatch) {
      setDisplayValue(targetString);
      return;
    }

    const targetNumber = parseInt(numericMatch[0], 10);
    const textPrefix = targetString.substring(0, numericMatch.index);
    const textSuffix = targetString.substring(numericMatch.index + numericMatch[0].length);

    let startTimestamp = null;
    const totalDuration = 1400; // Counter runtime duration in milliseconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / totalDuration, 1);
      
      // Easing function (easeOutQuad) for natural decelleration friction near target
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * targetNumber);

      setDisplayValue(`${textPrefix}${currentCount}${textSuffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetString, triggerStart]);

  return <>{displayValue}</>;
}

function StatsSection() {
  const [sectionRef, isVisible] = useIntersectionReveal(0.15);

  const stats = [
    { number: "1000+", label: "Farmers Onboarded" },
    { number: "100 Acres", label: "Under Cultivation" },
    { number: "Multiple Regions", label: "Across India" },
    { number: "Consistent Supply", label: "Across Seasons" },
  ];

  // Global curve adjustment configuration for text translations
  const smoothBezier = "all 0.85s cubic-bezier(0.215, 0.610, 0.355, 1.000)";

  return (
    <section 
      ref={sectionRef} 
      style={{ backgroundColor: "#ffffff", padding: "50px 20px", overflow: "hidden" }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* Badge */}
        <span
          style={{
            display: "inline-block",
            border: "1.5px solid #0d7a43",
            borderRadius: "40px",
            padding: "3px 15px",
            fontSize: "14px",
            fontWeight: 500,
            fontStyle: "italic",
            color: "#111111",
            marginBottom: "24px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(15px)",
            transition: smoothBezier,
          }}
        >
          Our Network
        </span>

        {/* Heading */}
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 500,
            color: "#111111",
            marginBottom: "18px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: smoothBezier,
            transitionDelay: "0.1s",
          }}
        >
          A Growing Community of Farmers
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.2,
            color: "#555555",
            maxWidth: "760px",
            margin: "0 0 64px 0",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: smoothBezier,
            transitionDelay: "0.2s",
          }}
        >
          Thousands of farmers are part of the VanShakti network, working together
          within a structured ecosystem that ensures consistency, reliability,
          and long-term growth.
        </p>

        {/* Stats Row Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px 20px",
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 220px",
                minWidth: "160px",
                textAlign: "left", // Changed to left-aligned for a cleaner modern profile
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: smoothBezier,
                // Cascades step arrivals horizontally
                transitionDelay: `${0.3 + idx * 0.1}s`,
              }}
            >
              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: 500,
                  color: "#065532",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                <AnimatedStatCounter targetString={item.number} triggerStart={isVisible} />
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#333333",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Global Breakpoint Refactoring */}
      <style>{`
        @media(max-width: 992px) {
          h2 { font-size: 36px !important; }
          p { font-size: 16px !important; }
          h3 { font-size: 32px !important; }
        }
        @media(max-width: 768px) {
          h2 { font-size: 30px !important; }
          h3 { font-size: 28px !important; }
        }
        @media(max-width: 480px) {
          h2 { font-size: 26px !important; }
          p { font-size: 15px !important; margin-bottom: 40px !important; }
        }
      `}</style>
    </section>
  );
}

export default StatsSection;