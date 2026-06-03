import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SustainableFarming1 from "../assets/sustainable-farming1.png";
import SustainableFarming2 from "../assets/sustainable-farming2.png";
import TechnologyInnovation from "../assets/technology-innovation.png";
import ClimateEnvironment1 from "../assets/climate-environment1.png";
import ClimateEnvironment2 from "../assets/climate-environment2..png";
import DataDriven from "../assets/data-driven.png";
import OrganicFarming from "../assets/organic-farming.png";
import { useNavigate } from "react-router-dom";

<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

export const blogCards = [
  {
    id: 1,
    title: "Agronomists in modern farming",
    category: "Sustainable Farming",
    description: "We spotlight how agronomists are key to crop health, resource use, and sustainability on farms of all sizes.",
    img: SustainableFarming2,
    content: `Agronomists are the backbone of modern sustainable agriculture...`,
  },
  {
    id: 2,
    title: "Building agricultural supply chains",
    category: "Sustainable Farming",
    description: "Explore how smart logistics and farm-to-market tools boost global market reach and reduce losses.",
    img: TechnologyInnovation,
    content: `A resilient agricultural supply chain is the difference...`,
  },
  {
    id: 3,
    title: "Sustainable irrigation techniques",
    category: "Technology & Innovation",
    description: "Discover cost-effective and eco-friendly irrigation systems that reduce waste while improving crop output.",
    img: ClimateEnvironment1,
    content: `Water scarcity is one of the defining agricultural challenges...`,
  },
  {
    id: 4,
    title: "The future-proof climate farming",
    category: "Climate & Environment",
    description: "Explore how climate-smart strategies are helping farmers thrive even as weather patterns shift.",
    img: ClimateEnvironment2,
    content: `Climate change is rewriting the rulebook for agriculture...`,
  },
  {
    id: 5,
    title: "Tap the power of organic farming",
    category: "Climate & Environment",
    description: "See how organic farming methods boost soil health, cut costs, and build lasting consumer trust.",
    img: DataDriven,
    content: `Organic farming is far more than a marketing label...`,
  },
  {
    id: 6,
    title: "Data-driven growth for every acre",
    category: "Technology & Innovation",
    description: "Discover how smart technologies like GPS, sensors, and drones are transforming traditional farming.",
    img: OrganicFarming,
    content: `Precision agriculture is putting powerful data tools...`,
  },
];

const Blog = () => {
  const navigate = useNavigate();

 useEffect(() => {
  // SEO
  document.title =
    "Agriculture Blog | Farming Insights, Sustainability & Innovation | VanShakti";

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Explore farming insights, sustainable agriculture practices, food safety, climate-smart farming, organic agriculture, supply chains, and agricultural innovation with VanShakti."
    );

  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "agriculture blog, farming blog, sustainable farming, organic farming, climate smart agriculture, irrigation techniques, agronomists, agricultural supply chain, precision farming, agricultural innovation, farmer education, VanShakti blog"
    );


  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute(
      "content",
      "Agriculture Blog | Farming Insights, Sustainability & Innovation | VanShakti"
    );

  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute(
      "content",
      "Read expert insights on farming, sustainability, agricultural innovation, food safety, climate-smart agriculture, and farmer success stories."
    );

  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
}, []);

  return (
    <section className="container my-5" style={{ maxWidth: "1200px" }}>
      {/* Header */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6" data-aos="fade-right">
          <span style={{ backgroundColor: "#edf4ef", padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontFamily: "'DM Sans", }}>
            Blog
          </span>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 500, marginTop: "10px" }} data-aos="fade-up" data-aos-delay="200">
            Insights from the <span style={{ color: "#1a3b2f" }}>Agricultural Ecosystem</span>
          </h2>
          <p style={{ marginTop: "15px", fontSize: "1rem", color: "#4a4a4a" }} data-aos="fade-up" data-aos-delay="400">
            Exploring agriculture through cultivation practices, sustainability, product handling, and evolving farm-to-market ecosystems.
          </p>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <img
            src={SustainableFarming1}
            alt="Blog Hero"
            className="img-fluid"
            style={{ borderRadius: "10px", width: "545px", objectFit: "cover", marginTop:"50px" }}
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="row g-4 mt-4">
        {blogCards.map((item, idx) => (
          <div key={item.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 150}>
            <div
              className="shadow-sm rounded hover-shadow"
              style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s" }}
              onClick={() => navigate(`/blog/${item.id}`)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h5 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "5px" }}>{item.title}</h5>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2c7a4b", marginBottom: "5px" }}>{item.category}</p>
                <p style={{ fontSize: "0.8rem", color: "#4a4a4a" }}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add some custom hover animation */}
      <style>
        {`
          .hover-shadow:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
          }
          @media (max-width: 768px) {
            h2 { font-size: 2rem !important; }
          }
        `}
      </style>
    </section>
  );
};

export default Blog;