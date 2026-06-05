import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";

// Import images
import HeroImg from "../assets/abouthero.jpg";
import IntegratedApproachImg1 from "../assets/framermotion.png";
import Farm1 from "../assets/farm-1.jpg";
import Farm2 from "../assets/farm-4.jpg";
import Farm3 from "../assets/farm-2.png";
import Farm4 from "../assets/farm-3.png";
import StructureIcon from "../assets/icon-structure1.png";
import StabilityIcon from "../assets/icon-structure2.png";
import CoordinationIcon from "../assets/icon-structure3.png";
import ConnectionsBg from "../assets/abouthandplant.png";
import IntegratedApproachImg from "../assets/aboutconnection.png";
import Team1 from "../assets/team-1.jpg";
import Team2 from "../assets/team-2.png";
import Team3 from "../assets/team-3.jpg";
import Team4 from "../assets/team-4.jpg";
import LogoImg from "../assets/logo.png";
import FlowImg from "../assets/Vanshakti--Img.png";
import "../styles/global.css";

/* ─── Scroll-reveal wrapper ─────────────────────────────────── */
const Reveal = ({ children, delay = 0, direction = "up", className = "", style = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const yMap = { up: 50, down: -50, left: -60, right: 60 };
  const xMap = { left: -60, right: 60, up: 0, down: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: yMap[direction] ?? 0, x: xMap[direction] ?? 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── One-by-one stagger list ────────────────────────────────── */
const StaggerList = ({ items, renderItem }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderItem(item, i)}
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Component ─────────────────────────────────────────────── */
const About = () => {
  const navigate = useNavigate();
const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const isScrolling = useRef(false);
const resumeTimeout = useRef(null);
const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
  if (isHovered) {
    clearInterval(intervalRef.current);
    clearTimeout(resumeTimeout.current);
  } else {
    startAutoSlide();
  }
}, [isHovered]);

  const farmImages = [Farm1, Farm2, Farm3, Farm4];
  const teamImages = [Team1, Team2, Team3, Team4];

  const beliefs = [
    {
      title: "Agriculture Needs Structure",
      desc: "Strong systems create consistency and long-term growth. We replace fragmentation with coordinated intelligence.",
      icon: StructureIcon,
    },
    {
      title: "Farmers Deserve Stability",
      desc: "Sustainable ecosystems are built through reliable support. We empower growers with the tools to thrive predictably.",
      icon: StabilityIcon,
    },
    {
      title: "Scale Requires Coordination",
      desc: "Efficient operations depend on connected networks. We integrate every node of the supply chain for maximum impact.",
      icon: CoordinationIcon,
    },
  ];

  const approaches = [
    {
      title: "Precision Sourcing",
      text: "We identify and partner with growers who share our commitment to quality and sustainability. By setting rigorous standards at the source, we ensure the integrity of the entire network.",
    },
    {
      title: "Streamlined Co-ordination",
      text: "Communication is the heartbeat of our ecosystem. Our logistics framework connects farmers directly to global opportunities, removing the layers of friction that traditionally hinder growth.",
    },
    {
      title: "Quality Handling",
      text: "From post-harvest management to final delivery, every step is governed by data-driven protocols. This ensures that the value created in the field is preserved all the way to the end user.",
    },
    {
      title: "Ecosystem Intelligence",
      text: "We continuously analyze network data to optimize routes, predict demand, and mitigate risks. This intelligent layer allows us to adapt to changing conditions in real-time.",
    },
  ];

  
   useEffect(() => {
  startAutoSlide();

  return () => {
    clearInterval(intervalRef.current);
    clearTimeout(resumeTimeout.current);
  };
}, []);

const startAutoSlide = () => {
  clearInterval(intervalRef.current);

  intervalRef.current = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % approaches.length);
  }, 3000);
};

  // Handle manual scroll via wheel
const handleWheel = (e) => {
  if (!isHovered) return;

  e.preventDefault();

  if (isScrolling.current) return;

  if (Math.abs(e.deltaY) < 10) return; // 🔥 prevents accidental scroll

  isScrolling.current = true;

  clearInterval(intervalRef.current);
  clearTimeout(resumeTimeout.current);

  setCurrentIndex((prev) => {
    if (e.deltaY > 0) {
      return Math.min(prev + 1, approaches.length - 1);
    } else {
      return Math.max(prev - 1, 0);
    }
  });

  setTimeout(() => {
    isScrolling.current = false;
  }, 500);

  resumeTimeout.current = setTimeout(() => {
    startAutoSlide();
  }, 2000);
};


  useEffect(() => {
    document.title = "About VanShakti | Sustainable Agriculture & Farmer Empowerment";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Learn about VanShakti's mission to empower farmers through sustainable agriculture, food safety, innovation, agricultural networks, and long-term ecosystem growth across India."
    );
    document.querySelector('meta[name="keywords"]')?.setAttribute(
      "content",
      "About VanShakti, sustainable agriculture, farmer empowerment, agriculture India, farming ecosystem, food safety, agricultural network, agri innovation, farming solutions, farmers platform"
    );
  }, []);

  return (
    <>
      {/* ── Global responsive styles ── */}
      <style>{`
        /* ── Reset & base ── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Hero ── */
        .vs-hero {
          position: relative;
          width: 100%;
          min-height: clamp(400px, 60vw, 640px);
          display: flex;
          align-items: flex-end;
          padding: clamp(32px, 5vw, 72px) clamp(20px, 5vw, 64px);
          overflow: hidden;
          background-image: var(--hero-bg);
          background-size: cover;
          background-position: center;
        }
        .vs-hero__overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 1;
        }
        .vs-hero__inner {
          position: relative; z-index: 2;
          width: 100%; max-width: 1280px; margin: 0 auto;
        }
        .vs-hero__badge {
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.7);
          color: #ffffff;
          font-size: clamp(0.7rem, 1.5vw, 0.85rem);
          padding: 6px 20px;
          border-radius: 30px;
          font-family: 'DM Sans', sans-serif;
          margin-bottom: clamp(24px, 4vw, 56px);
        }
        .vs-hero__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          gap: clamp(16px, 3vw, 40px);
        }
        .vs-hero__h1 {
          font-size: clamp(1.75rem, 4.5vw, 3.25rem);
          font-weight: 400;
          line-height: 1.1;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          margin: 0;
        }
        .vs-hero__p {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          font-weight: 400;
          line-height: 1.5;
          color: #fff;
          margin: 0;
        }

        @media (max-width: 768px) {
          .vs-hero__grid { grid-template-columns: 1fr; gap: 20px; }
        }

        /* ── Why Section ── */
        .vs-why {
          max-width: 1200px;
          margin: clamp(40px, 6vw, 80px) auto;
          padding: 0 clamp(20px, 5vw, 40px);
        }
        .vs-why__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 4vw, 56px);
          align-items: start;
        }
        .vs-why__h2 {
          font-size: 40px ;
          font-weight: 400;
          line-height: 48px;
          margin-bottom: 20px;
          font-family: 'DM Sans', sans-serif;
          color: #191C1A;

        }
        .vs-why__p {
        fontfamily : DM Sans;
          font-size: 24px;
          line-height: 32px;
          color: #191C1A;
        }
        .vs-img-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .vs-img-col { display: flex; flex-direction: column; gap: 16px;  }
        .vs-img-tall { width: 250px; height:250px; aspect-ratio: 3/4.2; object-fit: cover; border-radius: 16px; }
        .vs-img-short { width: 250px; height:120px;  aspect-ratio: 3/2; object-fit: cover; border-radius: 16px; }

        @media (max-width: 768px) {
          .vs-why__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .vs-img-tall { aspect-ratio: 4/3; }
          .vs-img-short { aspect-ratio: 16/9; }
        }

        /* ── Beliefs ── */
        .vs-beliefs {
          max-width: 1200px;
          margin: clamp(32px, 5vw, 64px) auto;
          padding: 0 clamp(20px, 5vw, 40px);
        }
        .vs-beliefs__h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 400;
          margin-bottom: clamp(20px, 3vw, 36px);
          font-family: 'DM Sans', sans-serif;
        }
        .vs-beliefs__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2.5vw, 24px);
        }
        .vs-belief-card {
          border: 1px solid #e0e7e3;
          border-radius: 14px;
          min-height: 280px;
          padding: clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px);
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .vs-belief-card:hover {
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        .vs-belief-card img { width: 40px; height: 40px; }
        .vs-belief-card h5 {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-weight: 600;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }
        .vs-belief-card p { font-size: 0.95rem; line-height: 1.55; margin: 0; color: #444; }

        @media (max-width: 768px) {
          .vs-beliefs__grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .vs-beliefs__grid { grid-template-columns: 1fr 1fr; }
        }

        /* ── Connections banner ── */
.vs-connections {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ✅ Image responsiveness */
.vs-connections img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Dark overlay for readability */
.vs-connections__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

/* Text container */
.vs-connections__text {
  position: absolute;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
  max-width: 900px;
}

/* ✅ Responsive text (VERY IMPORTANT) */
.vs-connections__text h2 {
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(22px, 4vw, 56px);
  line-height: 1.2;
  margin: 0;
}


       .vs-connections {
  position: relative;
  width: 100%;
  height: clamp(260px, 35vw, 440px);
  margin: clamp(16px, 3vw, 24px) 0;
  overflow: hidden;
}

/* Image */
.vs-connections img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Overlay */
.vs-connections__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
}

/* TEXT - MEDIA RATIO BASED POSITIONING */
.vs-connections__text {
  position: absolute;

  /* default: desktop (16:9 style feel) */
  top: 50%;
  left: clamp(40px, 6vw, 80px);

  transform: translateY(-50%);

  max-width: clamp(300px, 45vw, 640px);

  color: #fff;
}

/* HEADING */
.vs-connections__text h2 {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.35;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
}

/* ================= TABLET (4:3 RATIO FEEL) ================= */
@media (max-width: 1024px) {
  .vs-connections__text {
    left: clamp(24px, 5vw, 60px);
    max-width: 60%;
  }

  .vs-connections__text h2 {
    font-size: clamp(1.3rem, 3.2vw, 2.2rem);
  }
}

/* ================= MOBILE (PORTRAIT RATIO FEEL) ================= */
@media (max-width: 768px) {
  .vs-connections {
    height: 300px;
    justify-content: flex-end; /* pushes content slightly right */
  }

  .vs-connections img {
    object-position: right center; /* ✅ shows right side of image */
  }

  .vs-connections__text {
    text-align: center;
    padding: 0 16px;
  }

  .vs-connections__text h2 {
    font-size: clamp(20px, 6vw, 32px);
  }
}

/* SMALL MOBILE */
@media (max-width: 480px) {
  .vs-connections__text h2 {
    font-size: 1.2rem;
    line-height: 1.3;
  }
}

        /* ── Agriculture section ── */
        .vs-agri {
          background: #ffffff;
          padding: clamp(32px, 5vw, 30px) clamp(20px, 5vw, 10px);
        
        }
        .vs-agri {
  width: 100%;
  // padding: clamp(60px, 8vw, 120px) 0;
  overflow: hidden;
}

.vs-agri__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 5vw, 64px);

  align-items: start;
}

/* IMAGE */
.vs-agri__img { width: 100%; max-width: 500px; border-radius: 12px; object-fit: cover; display: block; }

/* HEADING */
.vs-agri__h2 {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 400;
  line-height: 1.2;

  color: #1F1F1F;
  margin-bottom: clamp(20px, 3.5vw, 36px);

  font-family: 'DM Sans', sans-serif;
}

/* ITEMS */
.vs-agri-item {
  margin-bottom: clamp(18px, 3vw, 30px);
}

.vs-agri-item h3 {
  color: #1D5B46;
  font-size: clamp(1.05rem, 2vw, 1.5rem);
  font-weight: 600;

  margin-bottom: 8px;
  font-family: 'DM Sans', sans-serif;
}

.vs-agri-item p {
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.7;
  color: #555;
  margin: 0;

  max-width: 520px;
}

/* ================= RESPONSIVE BREAKPOINTS ================= */

/* TABLET */
@media (max-width: 992px) {
  .vs-agri__inner {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .vs-agri__img {
    max-width: 100%;
    margin-bottom: 30px;
  }
}

/* MOBILE */
@media (max-width: 576px) {
  .vs-agri__inner {
    padding: 0 16px;
    gap: 24px;
  }

  .vs-agri__h2 {
    font-size: 1.5rem;
  }

  .vs-agri-item p {
    font-size: 0.9rem;
  }
}

        @media (max-width: 768px) {
          .vs-agri__inner { grid-template-columns: 1fr; }
          .vs-agri__img { max-width: 100%; }
        }

        /* ── Team ── */
        .vs-team {
          background: #ffffff;
          padding:  10px auto;
          text-align: center;
        }
        .vs-team__h2 {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 500;
          margin-bottom: 16px;
          font-family: 'DM Sans', sans-serif;
        }
        .vs-team__p {
          font-size: clamp(0.9rem, 1.6vw, 1.1rem);
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto clamp(24px, 4vw, 48px);
          color: #444;
        }
        .vs-team__imgs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(10px, 2vw, 16px);
        }
        .vs-team__imgs img {
          width: clamp(140px, 20vw, 220px);
          height: clamp(140px, 20vw, 220px);
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* ── Supply chain ── */
        .vs-supply {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 40px);
          background: #ffffff;
        }
        .vs-supply__logo {
          width: clamp(180px, 35vw, 400px);
          margin-bottom: clamp(24px, 4vw, 48px);
        }
        .vs-supply__flow {
          width: 100%;
          max-width: 1000px;
          height: auto;
          object-fit: contain;
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="vs-hero"
          style={{ "--hero-bg": `url(${HeroImg})` }}
          aria-label="About VanShakti Hero"
        >
          <div className="vs-hero__overlay" aria-hidden="true" />
          <div className="vs-hero__inner">
            <Reveal direction="down">
              <span className="vs-hero__badge">About VanShakti</span>
            </Reveal>
            <div className="vs-hero__grid">
              <Reveal direction="up" delay={0.15}>
                <h1 className="vs-hero__h1">
                  Rooted in Agriculture.<br />Built for the Future.
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <p className="vs-hero__p">
                  VanShakti was created with a vision to bring greater structure, reliability, and long-term growth to the agricultural ecosystem.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── WHY VANSHAKTI BEGAN ──────────────────────────────── */}
        <section className="vs-why" aria-label="Why VanShakti Began">
          <div className="vs-why__grid">
            <Reveal direction="right">
              <h2 className="vs-why__h2">Why VanShakti Began</h2>
              <p className="vs-why__p">
                Agriculture remains one of the most important sectors, yet the ecosystem continues to face challenges around coordination, consistency, and long-term sustainability.
                <br /><br />
                VanShakti was started with the belief that stronger systems and better collaboration can create lasting value for farmers, businesses, and the industry as a whole.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="vs-img-grid">
                <div className="vs-img-col">
                  <motion.img
                    src={farmImages[0]} alt="Farm field"
                    className="vs-img-tall"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src={farmImages[2]} alt="Farm harvest"
                    className="vs-img-short"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="vs-img-col">
                  <motion.img
                    src={farmImages[1]} alt="Farmland"
                    className="vs-img-short"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src={farmImages[3]} alt="Farm produce"
                    className="vs-img-tall"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CORE BELIEFS ─────────────────────────────────────── */}
        <section className="vs-beliefs" aria-label="Core Beliefs">
          <Reveal direction="up">
            <h2 className="vs-beliefs__h2">Core Beliefs</h2>
          </Reveal>
          <div className="vs-beliefs__grid">
            {beliefs.map((belief, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.15}>
                <div className="vs-belief-card">
                  <img src={belief.icon} alt={`${belief.title} icon`} />
                  <h5>{belief.title}</h5>
                  <p>{belief.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CONNECTIONS BANNER ───────────────────────────────── */}
      <section className="vs-connections" aria-label="Building connections">
  <img src={ConnectionsBg} alt="Agricultural connections" />

  <div className="vs-connections__overlay" aria-hidden="true" />

  <div className="vs-connections__text">
    <h2>Building stronger connections across agriculture.</h2>
  </div>
</section>

        {/* ── INTEGRATED APPROACH (Agriculture) ───────────────── */}
        <section className="vs-agri" aria-label="Integrated Approach to Agriculture">
  <div className="vs-agri__inner">

    {/* LEFT IMAGE - FIRST */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img
        src={IntegratedApproachImg1}
        alt="Agriculture Team"
        className="vs-agri__img"
      />
    </motion.div>

    {/* RIGHT CONTENT */}
    <div>
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="vs-agri__h2"
      >
        An Integrated Approach to<br />Agriculture
      </motion.h2>

 <div
  onWheel={(e) => {
    e.preventDefault();
    handleWheel(e);
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    height: "300px",
    position: "relative",
    overflow: "hidden",

    cursor: isHovered ? "grab" : "default",
    userSelect: "none",
  }}
>
      {/* SLIDER */}
      <div
        style={{
  height: "300px",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  cursor: isHovered ? "grab" : "default",
}}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              duration: 0.45,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div
              style={{
                padding: "40px",
                background: "#ffffff",
                borderRadius: "20px",
                // border: "1px solid #e8e8e8",
                // boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#065532",
                  marginBottom: "16px",
                  fontSize: "28px",
                  fontWeight: 600,
                }}
              >
                {approaches[currentIndex].title}
              </h3>

              <p
                style={{
                  color: "#444",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                {approaches[currentIndex].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div
        style={{
          position: "absolute",
          right: "10px", // FIXED (was negative)
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 10,
        }}
      >
        {approaches.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: currentIndex === index ? "10px" : "8px",
              height: currentIndex === index ? "28px" : "8px",
              borderRadius: "20px",
              border: "none",
              background:
                currentIndex === index ? "#065532" : "#cfcfcf",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    
   
</div>
 </div>
  </div>
</section>
        {/* ── TEAM ─────────────────────────────────────────────── */}
        <section className="vs-team" aria-label="Team">
          <Reveal direction="up">
            <h2 className="vs-team__h2">Powered by people across the Ecosystem</h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="vs-team__p">
              VanShakti isn't just a platform, it's a community. We bring together farmers, agronomists, logistics experts, and distributors to build a shared future.
            </p>
          </Reveal>
          <div className="vs-team__imgs">
            {teamImages.map((img, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.12}>
                <img src={img} alt={`Team member ${idx + 1}`} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── SUPPLY CHAIN ─────────────────────────────────────── */}
        <section className="vs-supply" aria-label="Supply chain">
          <Reveal direction="up">
            <img src={LogoImg} alt="VanShakti Logo" className="vs-supply__logo" />
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <img src={FlowImg} alt="Supply chain flow diagram" className="vs-supply__flow" />
          </Reveal>
        </section>

      </div>
    </>
  );
};

export default About;