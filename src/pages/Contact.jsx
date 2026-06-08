import React, { useRef, useEffect , useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPhone, FiMail } from "react-icons/fi";

import PartnershipBg from "../assets/partnership-bg.png";
import FarmersImg from "../assets/farmer1.png";
import BuyersImg from "../assets/farmer2.png";
import AgriBusinessImg from "../assets/farmer3.png";

import InquiryIcon from "../assets/contactIcon (1).svg";
import DiscussionIcon from "../assets/contactIcon (2).svg";
import CoordinationIcon from "../assets/contactIcon (3).svg";
import OperationsIcon from "../assets/contactIcon (4).svg";
import PartnershipIcon from "../assets/contactIcon (5).svg";

import StructuredIcon from "../assets/contactIcon (10).svg";
import ReliableIcon from "../assets/contactIcon (11).svg";
import GlobalNetworkIcon from "../assets/contactIcon (12).svg";
import QualityFocusedIcon from "../assets/contactIcon (13).svg";

<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

const ContactPage = () => {
  const form = useRef(null);
  const [activeStep, setActiveStep] = useState(null);
  

 useEffect(() => {
  // SEO
  document.title =
    "Contact VanShakti | Farmer Support, Partnerships & Agricultural Solutions";

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Contact VanShakti for agricultural partnerships, farmer support, sustainable farming solutions, supply chain collaboration, food safety guidance, and business opportunities."
    );

  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute(
      "content",
      "contact VanShakti, farmer support, agriculture partnerships, agricultural solutions, farming consultation, food safety support, agriculture business, farmer network, agri collaboration, sustainable farming India"
    );

  // Open Graph SEO
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute(
      "content",
      "Contact VanShakti | Farmer Support & Partnerships"
    );

  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute(
      "content",
      "Get in touch with VanShakti for agricultural partnerships, farming support, business collaboration, and sustainable agriculture solutions."
    );

  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.status === 200 || data.success) {
        toast.success("Message sent successfully! 🚀", {
          position: "top-right",
          autoClose: 4000,
          theme: "colored",
        });
        form.current.reset();
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 4000,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Network error. Please check your connection.", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };

  const opportunities = [
    { title: "Farmers", desc: "Join a structured ecosystem focused on cultivation, coordination, and long-term growth.", img: FarmersImg },
    { title: "Buyers & Distributors", desc: "Access reliable agricultural produce through organized sourcing & supply systems.", img: BuyersImg },
    { title: "Agricultural Business", desc: "Collaborate across process, market linkage, and agriculture development initiatives.", img: AgriBusinessImg },
  ];

  const collaborationSteps = [
    { title: "INQUIRY", desc: "Submit partnership details via our portal", icon: InquiryIcon },
    { title: "DISCUSSION", desc: "Defining goals and synergy potential", icon: DiscussionIcon },
    { title: "COORDINATION", desc: "Integration into our regional workflows.", icon: CoordinationIcon },
    { title: "OPERATIONS", desc: "Active execution of supply and logistics.", icon: OperationsIcon },
    { title: "PARTNERSHIP", desc: "Long-term growth and scaling support.", icon: PartnershipIcon },
  ];

  const whyPartnerCards = [
    { title: "Structured Coordination", desc: "Precise alignment between production cycles and market demands.", img: StructuredIcon },
    { title: "Reliable Operations", desc: "Enterprise-grade logistics ensuring quality from field to distribution.", img: ReliableIcon },
    { title: "Expanding Network", desc: "Connect with high-value stakeholders across regional and global markets.", img: GlobalNetworkIcon },
    { title: "Quality-Focused", desc: "Strict adherence to premium handling and packaging standards.", img: QualityFocusedIcon },
  ];

  return (
    <>
      <ToastContainer />
      <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", overflowX: "hidden", backgroundColor: "#fcfdfd" }}>
        
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            backgroundImage: `url(${PartnershipBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "160px 0",
            color: "white",
            minHeight: "680px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(12, 36, 24, 0.45)" }} />
          <div className="container" style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}>
            <div className="row">
              <div className="col-lg-7 col-md-9" data-aos="fade-right">
                <span style={{ display: "inline-block", color: "#f5f6ef", border: "1px solid rgba(240, 241, 236, 0.77)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.9rem", fontWeight: "600", letterSpacing: "0.5px", marginBottom: "20px" , fontFamily: "'DM Sans",}}>
                  Partner With Us
                </span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 500, lineHeight: "1.15", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
                  Building Stronger Agricultural Partnerships
                </h1>
                <p style={{ marginTop: "24px", fontSize: "1.2rem", lineHeight: "1.6", color: "#f0f5f2", maxWidth: "620px" }}>
                  VanShakti works with farmers, businesses, suppliers, and agricultural stakeholders to create a more connected and reliable agricultural ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="container my-5 py-4" style={{ maxWidth: "1200px" }}>
          <div className="mb-4 text-start">
            <h3 style={{ color: "#1a3b2f", fontWeight: 500, fontSize: "2rem", borderBottom: "3px solid #065532", display: "inline-block", paddingBottom: "8px" }} data-aos="fade-up">
              Partnership Opportunities
            </h3>
          </div>
          <div className="row g-4">
            {opportunities.map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 150}>
                <div style={{
                  border: "1px solid #eef2f0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  height: "100%"
                }} className="hover-shadow">
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "240px", objectFit: "cover" }} />
                  <div style={{ padding: "24px" }}>
                    <h5 style={{ fontWeight: 500, fontSize: "1.25rem", color: "#1a3b2f", marginBottom: "12px" }}>{item.title}</h5>
                    <p style={{ fontSize: "0.95rem", color: "#5d6b64", marginBottom: 0, lineHeight: "1.5" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      
  <div style={{ backgroundColor: "#F4F4EE", width: "100%" }}>
  
  {/* Collaboration Lifecycle */}
  <section className="container py-5" style={{ maxWidth: "1000px" }}>
    <div className="text-left mb-5">
      <h3 style={{ color: "#1a3b2f", fontWeight: 500, fontSize: "2rem" }} data-aos="fade-up">Collaboration Lifecycle</h3>
      <p style={{ color: "#5d6b64", fontSize: "1.05rem" }} data-aos="fade-up" data-aos-delay="100">A streamlined path from initial inquiry to operational success.</p>
    </div>

    {/* Wrapper for the process path */}
    <div className="position-relative d-flex justify-content-between flex-wrap" style={{ marginTop: "40px" }}>
      
      {/* Connector Line */}
      <div className="position-absolute d-none d-md-block" 
           style={{ top: "35px", left: "5%", right: "5%", height: "1px", backgroundColor: "#d1d5db", zIndex: 0 }}>
      </div>

      {collaborationSteps.map((step, idx) => (
        <div key={idx} className="d-flex flex-column align-items-center" style={{ width: "18%", zIndex: 1 }} data-aos="fade-up" data-aos-delay={idx * 100}>
          
        <div
  onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = "#1c5a3e";
    e.currentTarget.style.border = "1px solid #1c5a3e";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(28,90,62,0.3)";
    e.currentTarget.querySelector("img").style.filter = "invert(1)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = "#ffffff";
    e.currentTarget.style.border = "1px solid #d1d5db";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
    e.currentTarget.querySelector("img").style.filter = "none";
  }}
  style={{ 
    width: "70px", 
    height: "70px", 
    borderRadius: "50%", 
    backgroundColor: "#ffffff", 
    border: "1px solid #d1d5db",
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    marginBottom: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
>
 <img src={step.icon} alt={step.title} style={{ width: "30px", height: "30px", transition: "filter 0.3s ease" }} />
</div>

          <div className="text-center">
            <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#1c5a3e", display: "block", marginBottom: "4px" }}>{step.title}</span>
            <p style={{ fontSize: "0.75rem", color: "#5d6b64", margin: 0, lineHeight: "1.3" }}>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Why Partner Section */}
  <section className="container pb-5" style={{ maxWidth: "1200px", marginTop:"60px" }}>
    <div className="row align-items-center g-5">
      <div className="col-lg-5" data-aos="fade-right">
        <h3 style={{ color: "#1a3b2f", fontWeight: 500, fontSize: "2.5rem", lineHeight: "1.2" }}>
          Why Partner With VanShakti?
        </h3>
        <p style={{ color: "#5d6b64", fontSize: "1.1rem", marginTop: "16px", lineHeight: "1.6" }}>
          We provide the technical infrastructure and logistical foundation required for modern agricultural excellence.
        </p>
      </div>
      <div className="col-lg-7">
        <div className="row g-4">
          {whyPartnerCards.map((card, idx) => (
            <div key={idx} className="col-sm-6" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div style={{ border: "1px solid #e5e9e6", borderRadius: "16px", padding: "24px", display: "flex", alignItems: "flex-start", gap: "16px", height: "100%", backgroundColor: "#ffffff", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                <img src={card.img} alt={card.title} style={{ width: "40px", height: "40px", flexShrink: 0 }} />
                <div>
                  <h6 style={{ fontWeight: 500, fontSize: "1.1rem", marginBottom: "6px", color: "#1a3b2f" }}>{card.title}</h6>
                  <p style={{ fontSize: "0.9rem", margin: 0, color: "#5d6b64", lineHeight: "1.4" }}>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
</div>

        {/* Contact Form Section */}
        <section className="container my-5 " style={{ maxWidth: "1200px" }}>
          <div style={{ backgroundColor: "#ffffff", padding: "0px 40px", borderRadius: "24px", boxShadow: "0 15px 50px rgba(0,0,0,0.04)", border: "1px solid #f0f4f2" }} data-aos="fade-up">
            <div className="row align-items-center g-5">
              
    <div className="row g-5 align-items-stretch">

      {/* LEFT SIDE */}
      <div
        className="col-lg-6"
        data-aos="fade-right"
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
          minHeight: "650px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "20px",
              color: "#04303B",
              marginBottom: "24px",
              fontWeight: "400",
            }}
          >
            Contact us
          </p>

          <h1
            style={{
              fontSize: "62px",
              fontWeight: "400",
              lineHeight: "71.3px",
              color: "#04303B",
              marginBottom: "24px",
            }}
          >
            Let’s talk about
            <br />
            your farming needs
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "25.6px",
              fontWeight: "400",
              color: "#3B3939",
              maxWidth: "512px",
            }}
          >
            Get expert guidance and support for smarter, more productive
            farming.
          </p>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#D8D8C8",
              marginBottom: "35px",
            }}
          />

      <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  }}
>

  {/* Phone */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "18px",
      color: "#444",
    }}
  >
    <FiPhone
      style={{
        fontSize: "22px",
        color: "#083847",
        flexShrink: 0,
      }}
    />
    <div>+6287742493</div>
  </div>

  {/* Email */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "18px",
      color: "#444",
    }}
  >
    <FiMail
      style={{
        fontSize: "22px",
        color: "#083847",
        flexShrink: 0,
      }}
    />
    <div>info@vanshakti.com</div>
  
          </div>
           </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="col-lg-6" data-aos="fade-left">
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            border: "1px solid #D8D8C8",
            width:"620px",
            borderRadius: "32px",
            padding: "40px",
            height: "100%",
            background: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "31px",
              fontWeight: "400",
              color: "#04303B",
              marginBottom: "40px",
            }}
          >
            Get in touch with us
          </h2>

          <div className="row g-4">

            <div className="col-sm-6">
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "18px",
                  color: "#04303B",
                }}
              >
                First name
              </label>

              <input
                type="text"
                name="first_name"
                placeholder="Johan"
                className="form-control"
                required
                style={{
                  height: "64.59px",
                  width:"268px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#BBBBBB26",
                  padding: "0 18px",
                }}
              />
            </div>

            <div className="col-sm-6">
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "18px",
                  color: "#083847",
                }}
              >
                Last name
              </label>

              <input
                type="text"
                name="last_name"
                placeholder="Malik"
                className="form-control"
                required
                style={{
                  height: "62px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#F4F4F4",
                  padding: "0 18px",
                }}
              />
            </div>

            <div className="col-12">
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "18px",
                  color: "#083847",
                }}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                required
                style={{
                  height: "62px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#F4F4F4",
                  padding: "0 18px",
                }}
              />
            </div>

            <div className="col-12">
              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                  fontSize: "18px",
                  color: "#083847",
                }}
              >
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Enter your name"
                className="form-control"
                required
                style={{
                  border: "none",
                  borderRadius: "12px",
                  background: "#F4F4F4",
                  padding: "18px",
                  resize: "none",
                  minHeight: "160px",
                }}
              />
            </div>

            <div className="col-12 mt-3">
              <button
                type="submit"
                style={{
                  background: "#D7F034",
                  color: "#083847",
                  border: "none",
                  borderRadius: "50px",
                  width: "240px",
                  height: "60px",
                  fontSize: "20px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Send your message →
              </button>
            </div>

          </div>
        </form>
      </div>

    </div>

            </div>
          </div>
        </section>

        <style>
          {`
            .hover-shadow:hover {
              transform: translateY(-6px);
              box-shadow: 0 15px 35px rgba(26,59,47,0.08) !important;
            }
            .form-control:focus {
              border-color: #1c5a3e !important;
              box-shadow: 0 0 0 0.2rem rgba(28,90,62,0.15) !important;
            }
            .btn-submit:hover {
              transform: translateY(-2px);
              filter: brightness(1.05);
            }
          `}
        </style>
      </div>
    </>
  );
};

export default ContactPage;