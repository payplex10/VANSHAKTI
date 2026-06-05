import React, { useState, useEffect, useRef } from "react";

// ── LOCAL ASSET IMPORTS ──
import FarmersImg from "../assets/home1.png";
import ImpactImg from "../assets/home2.png";

// Custom hook to detect scroll into view
function useIntersectionObserver(threshold = 0.25) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible];
}

function CommunitySection() {
  const [row1Ref, row1Visible] = useIntersectionObserver();
  const [row2Ref, row2Visible] = useIntersectionObserver();

  return (
    <section className="community-section">
      <div className="community-container">

        {/* ROW 1 */}
        <div ref={row1Ref} className={`community-row ${row1Visible ? "animate-active" : ""}`}>
          <div className="community-img-wrap slide-from-left">
            <img src={FarmersImg} alt="Farmers Gathered in Field" className="community-img" />
          </div>
          <div className="community-text-col slide-from-right">
            <span className="community-badge">Our Presence</span>
            <h2 className="community-title">Expanding Across<br />Regions</h2>
            <p className="community-body">
              VanShakti is building a growing network across multiple regions, connecting farmers and markets through a structured and scalable ecosystem.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div ref={row2Ref} className={`community-row community-row-reverse ${row2Visible ? "animate-active" : ""}`}>
          <div className="community-img-wrap slide-from-right">
            <img src={ImpactImg} alt="Young green plants growing out of soil" className="community-img" />
          </div>
          <div className="community-text-col slide-from-left">
            <span className="community-badge">Impact</span>
            <h2 className="community-title">Delivering Outcomes<br />Across Agriculture</h2>
            <p className="community-body">
              VanShakti is driving meaningful improvements across the agricultural ecosystem-enhancing efficiency, strengthening reliability, and creating better value for all stakeholders.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .community-section { background-color: #ffffff; padding: 10px 0; overflow: hidden; }
        .community-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; flex-direction: column; gap: 60px; }
        .community-row { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 40px; align-items: center; }
        .community-row-reverse .community-img-wrap { order: 2; }
        .community-row-reverse .community-text-col { order: 1; }

        /* BASE ANIMATION */
        .slide-from-left, .slide-from-right { opacity: 0; transform: translateX(-35px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .slide-from-right { transform: translateX(35px); }

        .animate-active .slide-from-left, .animate-active .slide-from-right {
          opacity: 1;
          transform: translateX(0);
        }

        /* stagger text animation */
        .animate-active .community-text-col {
          transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;
        }

        /* hover effects on image */
        .community-img-wrap { border-radius: 17.5px; overflow: hidden; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.04); transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .community-img { width: 600px; height: 350px; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .community-img-wrap:hover { transform: translateY(-5px); box-shadow: 0 20px 35px rgba(28,90,62,0.1); }
        .community-img-wrap:hover .community-img { transform: scale(1.03); }

        .community-text-col { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
        .community-badge { display: inline-block; border: 1px solid #065532; border-radius: 16px; padding: 6px 18px; background-color: #F7F8F6; color: #000000; font-size: 16px; font-weight: 400; letter-spacing: 0; margin-bottom: 16px; }
        .community-title { font-size: 40px; font-weight: 400; color: #000000; line-height: 48px; margin: 0 0 16px 0; letter-spacing: 0; }
        .community-body { font-size: 24px; line-height: 32px; font-weight:400; color: #000000; margin: 0; max-width: 480px; }

        /* RESPONSIVE ANIMATION */
        @media (max-width: 768px) {
          .slide-from-left, .slide-from-right { transform: translateY(30px); }
          .animate-active .slide-from-left, .animate-active .slide-from-right { transform: translateY(0); }
        }
         @media (max-width: 768px) {
  .community-row {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .community-text-col {
    order: 1;
  }

  .community-img-wrap {
    order: 2;
  }

  .community-img {
    height: 250px;
  }
}
      `}</style>
    </section>
  );
}

export default CommunitySection;