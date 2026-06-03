import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

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

const About = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 }, // Starts from up, moves down
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

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
    { title: "Precision Sourcing", text: "We identify and partner with growers who share our commitment..." },
    { title: "Streamlined Co-ordination", text: "Communication is the heartbeat of our ecosystem..." },
    { title: "Quality Handling", text: "From post-harvest management to final delivery..." },
    { title: "Ecosystem Intelligence", text: "We continuously analyze network data to optimize routes..." },
  ];

  useEffect(() => {
  
  document.title =
    "About VanShakti | Sustainable Agriculture & Farmer Empowerment";

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Learn about VanShakti's mission to empower farmers through sustainable agriculture, food safety, innovation, agricultural networks, and long-term ecosystem growth across India."
    );

  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "About VanShakti, sustainable agriculture, farmer empowerment, agriculture India, farming ecosystem, food safety, agricultural network, agri innovation, farming solutions, farmers platform"
    );

  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      {/* Hero Section */}
     <section
  className="d-flex align-items-end text-white" // align-items-end pushes content to bottom
  style={{
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
   
    width: "100%",
    minHeight: "600px",
    minWidth: "1200px",
    marginInline: "auto",
    padding: "60px 40px", 
    position: "relative",
    overflow: "hidden",
  }}
>
  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)", zIndex: 1 }} />

  <div className="container-fluid position-relative" style={{ zIndex: 2 }}>
    {/* Badge row at top */}
    <div className="row mb-5">
      <div className="col-12">
        <span
          className="badge bg-transparent border border-light"
          data-aos="fade-down"
          style={{
  fontSize: "0.85rem",
  padding: "8px 20px",
  borderRadius: "30px",
  fontFamily: "'DM Sans', sans-serif"
}}
        >
          About VanShakti
        </span>
      </div>
    </div>

    {/* Bottom content row */}
    <div className="row align-items-end">
      {/* Left: Heading */}
      <div className="col-lg-7">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ fontSize: "3rem", lineHeight: "1", fontWeight: 400, fontFamily: "'DM Sans', sans-serif" }}
        >
          Rooted in Agriculture.<br />Built for the Future.
        </h1>
      </div>

      {/* Right: Paragraph */}
      <div className="col-lg-5">
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ fontSize: "1.25rem", fontWeight: 400, lineHeight: "1.5", margin: 0 }}
        >
          VanShakti was created with a vision to bring greater structure, reliability, and long-term growth to the agricultural ecosystem.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Why VanShakti Began */}
      <section style={{ margin: "64px 0", maxWidth: "1200px", marginInline: "auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 400px", minWidth: "300px" }} data-aos="fade-right">
            <h2 style={{ fontSize: "40px", lineHeight: "48px", fontWeight: 400, marginBottom: "20px" }}>Why VanShakti Began</h2>
            <p style={{ fontSize: "24px", lineHeight: "32px" }}>
              Agriculture remains one of the most important sectors, yet the ecosystem continues to face challenges around coordination, consistency, and long-term sustainability.
              <br /><br />
              VanShakti was started with the belief that stronger systems and better collaboration can create lasting value for farmers, businesses, and the industry as a whole.
            </p>
          </div>

          <div style={{ flex: "1 1 400px", minWidth: "300px" }} data-aos="fade-left">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <img src={farmImages[0]} alt="Farm 1" data-aos="zoom-in" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "14px" }} />
                <img src={farmImages[2]} alt="Farm 2" data-aos="zoom-in" data-aos-delay="200" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "14px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <img src={farmImages[1]} alt="Farm 3" data-aos="zoom-in" data-aos-delay="100" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "14px" }} />
                <img src={farmImages[3]} alt="Farm 4" data-aos="zoom-in" data-aos-delay="300" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "14px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="container my-5 py-3">
        <h2 style={{ fontSize:"2.0rem", marginBottom:"2rem" }} data-aos="fade-up">Core Beliefs</h2>
        <div className="row g-4">
          {beliefs.map((belief, idx) => (
            <div key={idx} className="col-md-4">
              <div
                data-aos="fade-up"
                data-aos-delay={idx * 200}
                style={{
                  border:"1px solid #e0e7e3",
                  borderRadius:"14px",
                  minHeight:"300px",
                  padding:"32px 24px",
                  backgroundColor:"#ffffff",
                  boxShadow:"0 4px 12px rgba(0,0,0,0.02)",
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"flex-start",
                  gap:"16px",
                  transition:"all 0.3s ease",
                }}
              >
                <img src={belief.icon} alt={`${belief.title} icon`} style={{ width:"40px", height:"40px" }} />
                <h5 style={{ fontSize:"1.35rem", fontWeight:600 }}>{belief.title}</h5>
                <p style={{ lineHeight:"1.5" }}>{belief.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connections Section */}
      <section style={{ position:"relative", width:"100%", height:"400px", margin:"10px 0" }}>
        <img src={ConnectionsBg} alt="Connections" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.4)" }} />
        <div
          style={{ position:"absolute", top:"50%", left:"50px", transform:"translateY(-50%)", color:"#FFFFFF", maxWidth:"600px" }}
          data-aos="fade-right"
        >
          <h2 style={{ fontSize:"3rem", fontWeight:400, lineHeight:1.4 }}>Building stronger connections across agriculture.</h2>
        </div>
      </section>

    {/* Agriculature section  */}


<section
  style={{
    background: "#F5F5F2",
    padding: "30px 0",
    overflow: "hidden", // Important to keep the slide-down clean
  }}
>
  {/* The Parent Wrapper handles the 'Up to Down' flow */}
  <motion.div
    className="container"
    initial={{ opacity: 0, y: -80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="row align-items-start g-5">
      
      {/* Left Image */}
      <div className="col-lg-6">
        <img
          src={IntegratedApproachImg1}
          alt="Agriculture Team"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Right Content */}
      <div className="col-lg-6">
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "400",
            lineHeight: "1.2",
            color: "#1F1F1F",
            marginBottom: "35px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          An Integrated Approach to
          <br />
          Agriculture
        </h2>

        {[
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
        ].map((item, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#1D5B46", fontSize: "24px", fontWeight: "600", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#555", margin: 0, maxWidth: "520px", fontFamily: "'Inter', sans-serif" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
</section>
      {/* Team Section */}
      <section className="container my-5 py-5 text-center" style={{ backgroundColor:"#F6F6F1" }}>
        <h2 style={{ fontSize:"2.5rem", fontWeight:500, marginBottom:"1rem" }} data-aos="fade-up">Powered by people across the Ecosystem</h2>
        <p style={{ fontSize:"1.1rem", lineHeight:"1.6", maxWidth:"500px", margin:"0 auto 3rem auto" }} data-aos="fade-up" data-aos-delay="200">
          VanShakti isn't just a platform, it's a community. We bring together farmers, agronomists, logistics experts, and distributors to build a shared future.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {teamImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Team ${idx}`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              style={{ width:"220px", height:"220px", objectFit:"cover", borderRadius:"15px", boxShadow:"0 4px 12px rgba(0,0,0,0.1)" }}
            />
          ))}
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="d-flex flex-column align-items-center py-5 bg-white">
        <img src={LogoImg} alt="VanShakti Logo" style={{ width:"400px", marginBottom:"40px" }} data-aos="fade-up" />
        <div style={{ width:"100%", maxWidth:"1000px", display:"flex", justifyContent:"center" }}>
          <img src={FlowImg} alt="Supply chain flow" style={{ width:"100%", height:"auto", objectFit:"contain" }} data-aos="fade-up" data-aos-delay="200"/>
        </div>
      </section>
    </div>
  );
};

export default About;