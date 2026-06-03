import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { src: "/fssai.png", alt: "FSSAI" },
  { src: "/apida.png", alt: "APEDA" },
  { src: "/bros.png", alt: "BRCS Food Safety" },
  { src: "/fssc.png", alt: "FSSC 22000" },
  { src: "/global.png", alt: "Global G.A.P" },
  { src: "/tesco.png", alt: "TESCO" },
  { src: "/reinforest.png", alt: "Certified" },
  { src: "/k.png", alt: "K Certified" },
  { src: "/fssai.png", alt: "FSSAI" },
  { src: "/apida.png", alt: "APEDA" },
  { src: "/bros.png", alt: "BRCS Food Safety" },
  { src: "/fssc.png", alt: "FSSC 22000" },
  { src: "/global.png", alt: "Global G.A.P" },
  { src: "/tesco.png", alt: "TESCO" },
  { src: "/reinforest.png", alt: "Certified" },
  { src: "/k.png", alt: "K Certified" },
  { src: "/fssai.png", alt: "FSSAI" },
  { src: "/apida.png", alt: "APEDA" },
  { src: "/bros.png", alt: "BRCS Food Safety" },
  { src: "/fssc.png", alt: "FSSC 22000" },
  { src: "/global.png", alt: "Global G.A.P" },
  { src: "/tesco.png", alt: "TESCO" },
  { src: "/reinforest.png", alt: "Certified" },
  { src: "/k.png", alt: "K Certified" },
 
];  

export default function CertificationSection() {
  return (
    <section style={{
      background: "#ffffff",
      padding: "72px 0 56px",
      fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

        {/* Badge */}
        <div style={{
          display: "inline-block",
          border: "1.5px solid #0a7a46",
          borderRadius: "40px",
          padding: "6px 20px",
          background: "#ffffff",
          color: "#111",
          fontSize: "0.82rem",
          fontStyle: "italic",
          marginBottom: "24px",
        }}>
          Quality &amp; Certifications
        </div>

        {/* Heading */}
        <h2 style={{
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          fontWeight: 600,
          color: "#111111",
          lineHeight: 1.2,
          marginBottom: "16px",
          maxWidth: "700px",
        }}>
          Committed to Quality and Industry Standards
        </h2>

        {/* Subtext */}
        <p style={{
          fontSize: "0.97rem",
          lineHeight: 1.7,
          color: "#444444",
          maxWidth: "640px",
          marginBottom: "48px",
        }}>
          VanShakti follows standardized processes and quality benchmarks to
          ensure consistency, safety, and reliability across the agricultural
          supply chain.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop={true}
          slidesPerView="auto"
          spaceBetween={32}
          allowTouchMove={true}
          style={{ cursor: "grab" }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i} style={{ width: "130px" }}>
              <div style={{
                width: "130px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable="false"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    userSelect: "none",
                    filter: "grayscale(20%)",
                    transition: "filter 0.2s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0%)"}
                  onMouseLeave={e => e.currentTarget.style.filter = "grayscale(20%)"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}