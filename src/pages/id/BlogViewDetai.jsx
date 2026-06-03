import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogCards } from "../Blog";
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&display=swap" rel="stylesheet"></link>

// Per-blog rich content
const blogContent = {
  1: {
    heroTitle: "Science, strategy, and stewardship from soil to harvest",
    heroIntro: [
      "As agriculture evolves into a data-driven, technology-powered industry, the role of the agronomist has never been more important. These behind-the-scenes experts are the bridge between science and the field — helping farmers maximize yield, maintain soil health, and grow sustainably.",
      "In a world facing climate change, resource scarcity, and food security challenges, agronomists are the advisors shaping the future of farming.",
    ],
    sections: [
      {
        heading: "Who are agronomists?",
        paragraphs: [
          "Agronomists are agricultural scientists who specialize in crop production, soil management, and the overall science of growing plants effectively. Their goal? To improve productivity, sustainability, and profitability on the farm.",
          "Whether they're walking fields, analyzing soil samples, or interpreting satellite data, agronomists work side-by-side with farmers to turn knowledge into results.",
        ],
      },
      {
        heading: "1. Soil analysis & fertility planning",
        paragraphs: [
          "Healthy crops start with healthy soil. Agronomists test nutrient levels, pH, moisture, and more to create custom fertilization plans that boost plant growth while reducing waste.",
        ],
      },
      {
        heading: "2. Crop selection & rotation strategies",
        paragraphs: [
          "Not all crops thrive in every field. Agronomists help farmers choose varieties suited to the local climate, pest risk, and market demand — and plan rotations that restore nutrients and prevent disease.",
        ],
      },
      {
        heading: "3. Pest & disease management",
        paragraphs: [
          "Using integrated pest management (IPM), agronomists identify threats early and recommend eco-friendly treatments that protect both yield and biodiversity.",
        ],
      },
      {
        heading: "4. Irrigation & water use efficiency",
        paragraphs: [
          "They advise on water-saving techniques, from drip irrigation to soil moisture monitoring, to ensure every drop counts — especially in drought-prone regions.",
        ],
      },
      {
        heading: "5. Precision farming & data use",
        paragraphs: [
          "Modern agronomists use drones, satellite imagery, and software to provide real-time advice on planting, fertilizing, and harvesting — turning complex data into smarter decisions.",
        ],
      },
      {
        heading: "Why agronomists matter",
        paragraphs: [
          "Agronomists aren't just scientists — they're strategic partners. Their impact includes:",
        ],
        bullets: [
          "Higher yields with fewer inputs",
          "More efficient water and resource use",
          "Sustainable, climate-smart farming",
          "Increased profitability for farmers",
          "Innovative solutions tailored to each field",
        ],
        afterBullets: "They empower farmers not just to grow more, but to grow better — and to do it responsibly.",
      },
      {
        heading: "Supporting the future of food",
        paragraphs: [
          "At our company, we work closely with expert agronomists to bring cutting-edge knowledge to every farm we support. Whether it's through direct consultations, on-site trials, or remote monitoring tools, we make sure every decision is backed by agronomic insight.",
        ],
      },
      {
        heading: "Science that grows with you",
        paragraphs: [
          "The challenges facing agriculture today require more than intuition — they require informed action. Agronomists bring the science, strategy, and support farmers need to thrive in a changing world.",
          "Because the future of farming starts with what's beneath our feet — and the experts who know how to nurture it.",
        ],
      },
    ],
  },
  2: {
    heroTitle: "From field to market: building resilient agricultural supply chains",
    heroIntro: [
      "Supply chains are the invisible backbone of global food systems. When they work well, fresh produce reaches consumers quickly and affordably. When they break down, farmers lose income and families go without.",
      "Modern agricultural supply chains are being transformed by technology, policy, and a growing demand for transparency.",
    ],
    sections: [
      {
        heading: "What makes a supply chain resilient?",
        paragraphs: [
          "Resilience means the ability to absorb shocks — whether from weather events, transport disruptions, or sudden demand shifts — and recover quickly without catastrophic losses.",
          "Farmers, logistics providers, processors, and retailers must all be connected by real-time data and shared incentives.",
        ],
      },
      {
        heading: "1. Cold chain logistics",
        paragraphs: [
          "Temperature-controlled storage and transport are critical for perishables. Modern cold chain systems use IoT sensors to monitor conditions continuously, alerting operators the moment conditions deviate.",
        ],
      },
      {
        heading: "2. Digital farm-to-market platforms",
        paragraphs: [
          "Online marketplaces connect smallholder farmers directly to buyers — cutting out middlemen, improving prices, and reducing the time between harvest and sale.",
        ],
      },
      {
        heading: "3. Traceability and transparency",
        paragraphs: [
          "Consumers and regulators increasingly demand to know where food comes from. Blockchain and QR-code traceability tools let every stakeholder verify the journey of a product from seed to shelf.",
        ],
      },
      {
        heading: "Why it matters for smallholders",
        paragraphs: [
          "Smallholder farmers — who produce a significant share of the world's food — have historically been excluded from lucrative supply chains due to lack of infrastructure, information, and bargaining power.",
          "Modern logistics platforms are changing that, giving small farms access to markets that were previously unreachable.",
        ],
      },
      {
        heading: "Our role in the chain",
        paragraphs: [
          "We partner with logistics providers, cooperatives, and technology companies to ensure our network of farmers has access to reliable, fair, and efficient supply chain infrastructure.",
          "The result is less waste, better margins, and a more secure food system for everyone.",
        ],
      },
    ],
  },
  3: {
    heroTitle: "Water-smart farming: sustainable irrigation for a thirsty world",
    heroIntro: [
      "Agriculture accounts for roughly 70% of global freshwater withdrawals. As water tables fall and droughts intensify, the pressure to produce more food with less water has never been greater.",
      "Sustainable irrigation techniques are at the heart of the solution.",
    ],
    sections: [
      {
        heading: "The scale of the challenge",
        paragraphs: [
          "Traditional flood and furrow irrigation systems lose enormous amounts of water to evaporation, runoff, and deep percolation. In many regions, these inefficiencies are no longer sustainable.",
          "Farmers need systems that deliver the right amount of water to the right place at the right time — nothing more, nothing less.",
        ],
      },
      {
        heading: "1. Drip irrigation",
        paragraphs: [
          "Drip systems deliver water directly to a plant's root zone through a network of tubes and emitters. Water use can drop by 40–70% compared to flood methods, with no loss of yield.",
        ],
      },
      {
        heading: "2. Deficit irrigation scheduling",
        paragraphs: [
          "By intentionally applying less water than full crop demand during non-critical growth stages, farmers can reduce water use significantly with minimal yield penalty.",
        ],
      },
      {
        heading: "3. Soil moisture sensors",
        paragraphs: [
          "Real-time sensors placed at multiple soil depths give farmers continuous data on moisture levels. Irrigation is triggered only when crops actually need it — not on a fixed schedule.",
        ],
      },
      {
        heading: "4. Weather-based controllers",
        paragraphs: [
          "Smart controllers adjust irrigation schedules automatically based on evapotranspiration data from weather stations, preventing unnecessary watering after rainfall.",
        ],
      },
      {
        heading: "The business case",
        paragraphs: [
          "Sustainable irrigation is not just environmentally responsible — it makes economic sense. Lower water bills, reduced pumping energy, and healthier soils translate directly into improved profitability.",
          "Farms that invest in efficient irrigation today are better positioned to weather the water scarcity pressures of tomorrow.",
        ],
      },
    ],
  },
  4: {
    heroTitle: "Farming through uncertainty: strategies for a climate-changed world",
    heroIntro: [
      "The climate is changing faster than many agricultural systems can adapt. Growing seasons are shifting, extreme weather events are becoming more frequent, and the predictable patterns that farmers relied on for generations are disappearing.",
      "Climate-smart farming is not a luxury — it is a necessity.",
    ],
    sections: [
      {
        heading: "What is climate-smart agriculture?",
        paragraphs: [
          "Climate-smart agriculture (CSA) is an approach that helps farmers adapt to and build resilience against climate impacts while reducing greenhouse gas emissions where possible.",
          "It integrates sustainable practices, technology, and local knowledge to make farming systems more robust.",
        ],
      },
      {
        heading: "1. Diversified crop rotations",
        paragraphs: [
          "Growing a wider variety of crops across seasons reduces the risk that a single climate event will wipe out an entire harvest. Diversity is nature's own risk management strategy.",
        ],
      },
      {
        heading: "2. Cover cropping",
        paragraphs: [
          "Planting cover crops during off-seasons protects soil from erosion, improves water retention, and builds organic matter — all critical buffers against climate variability.",
        ],
      },
      {
        heading: "3. Agroforestry",
        paragraphs: [
          "Integrating trees into farming systems provides shade, windbreaks, and additional income streams. Trees also sequester carbon and support biodiversity.",
        ],
      },
      {
        heading: "4. Drought-tolerant varieties",
        paragraphs: [
          "Advances in plant breeding have produced crop varieties that maintain reasonable yields under water stress. Adopting these varieties is one of the most direct forms of climate adaptation available today.",
        ],
      },
      {
        heading: "The road ahead",
        paragraphs: [
          "No single practice makes a farm climate-proof. Resilience comes from combining multiple strategies, supported by good data, strong extension services, and access to finance.",
          "Farmers who start adapting now will be better placed to thrive — not just survive — as conditions continue to change.",
        ],
      },
    ],
  },
  5: {
    heroTitle: "Rooted in nature: the growing power of organic farming",
    heroIntro: [
      "Organic farming is one of the fastest-growing segments in global agriculture. Driven by consumer demand, environmental awareness, and a desire to farm more sustainably, it represents a fundamental rethinking of how we grow food.",
      "The results — for soil, for farmers, and for communities — are compelling.",
    ],
    sections: [
      {
        heading: "What organic farming actually means",
        paragraphs: [
          "Organic farming prohibits synthetic pesticides, herbicides, and fertilizers. Instead, it relies on natural inputs, biological pest control, and practices that build soil health over time.",
          "Certification by recognized bodies gives consumers confidence that products meet defined standards.",
        ],
      },
      {
        heading: "1. Soil health as the foundation",
        paragraphs: [
          "Organic systems feed the soil food web rather than bypassing it. Compost, green manures, and crop rotations build the microbial communities that make nutrients available to plants naturally.",
        ],
      },
      {
        heading: "2. Reduced input costs over time",
        paragraphs: [
          "While the transition period can be challenging, established organic farms typically spend less on purchased inputs. A healthy soil ecosystem provides many of the services that synthetic products must otherwise supply.",
        ],
      },
      {
        heading: "3. Premium market access",
        paragraphs: [
          "Certified organic produce commands price premiums of 20–50% in many markets. For farmers with access to these channels, organic certification is a powerful economic tool.",
        ],
      },
      {
        heading: "4. Biodiversity benefits",
        paragraphs: [
          "Organic farms consistently support higher levels of biodiversity than conventional systems. Beneficial insects, birds, and soil organisms all thrive when chemical inputs are removed.",
        ],
      },
      {
        heading: "Making the transition",
        paragraphs: [
          "The shift to organic farming requires planning, patience, and support. We work with farmers through the transition process — providing agronomic guidance, connecting them with markets, and helping them navigate certification requirements.",
          "The investment is real. So are the rewards.",
        ],
      },
    ],
  },
  6: {
    heroTitle: "Every acre counts: how data is transforming farm decision-making",
    heroIntro: [
      "For most of agricultural history, farmers made decisions based on experience, intuition, and observation. These remain valuable. But today, they can be combined with a continuous stream of precise, actionable data that was simply not available before.",
      "Precision agriculture is making every acre more productive, every input more efficient, and every decision more informed.",
    ],
    sections: [
      {
        heading: "What is precision agriculture?",
        paragraphs: [
          "Precision agriculture uses technology to observe, measure, and respond to variability within and between fields. Instead of treating a field as uniform, it recognizes that different areas have different needs — and addresses them accordingly.",
        ],
      },
      {
        heading: "1. GPS-guided machinery",
        paragraphs: [
          "GPS auto-steer systems allow tractors and implements to operate with centimetre-level accuracy. Overlaps and gaps are eliminated, saving fuel, seed, and chemicals on every pass.",
        ],
      },
      {
        heading: "2. Drone imagery and scouting",
        paragraphs: [
          "Multispectral drones capture detailed images of crop health that the human eye cannot see. Stress, disease, and pest pressure can be identified and mapped before visible symptoms appear.",
        ],
      },
      {
        heading: "3. Soil and crop sensors",
        paragraphs: [
          "In-field sensors measure moisture, temperature, nutrient levels, and more in real time. Data flows directly to farm management platforms, enabling rapid response to changing conditions.",
        ],
      },
      {
        heading: "4. Variable rate application",
        paragraphs: [
          "Using prescription maps generated from field data, application equipment can vary the rate of seed, fertilizer, or pesticide across a field — applying exactly what each zone needs, and nothing more.",
        ],
      },
      {
        heading: "The future of farm intelligence",
        paragraphs: [
          "As AI and machine learning mature, farm management platforms will move from reporting what happened to predicting what will happen — and recommending precisely what to do about it.",
          "The farmers who build their data infrastructure today will have a significant advantage in the decade ahead.",
        ],
      },
    ],
  },
};

// Reusable custom scroll reveal animation hook
function useScrollReveal(threshold = 0.08) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

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

const BlogViewDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogCards.find((b) => b.id === parseInt(id));
  const content = blogContent[parseInt(id)];

  // Related posts structural logic
  const relatedPosts = blogCards.filter((b) => b.id !== parseInt(id)).slice(0, 3);

  // Hook references to orchestrate step reveal triggers
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [bodyRef, bodyVisible] = useScrollReveal(0.05);
  const [relatedRef, relatedVisible] = useScrollReveal(0.08);

  // Scroll back to page top position on dynamic structural parameter mutations
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!blog || !content) {
    return (
      <div style={{ padding: "80px 40px", textAlign: "center" }}>
        <p style={{ fontSize: "1.1rem", color: "#4a4a4a" }}>Blog not found.</p>
        <button className="btn btn-outline-secondary mt-3" onClick={() => navigate("/blog")}>
          ← Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#fff", overflowX: "hidden" }}>

      {/* ── 1. HERO SECTION ── */}
      <div 
        ref={heroRef}
        className={`blog-reveal-parent ${heroVisible ? "blog-active" : ""}`}
        style={{ maxWidth: "1100px", margin: "30px auto", padding: "100px 40px 40px" }}
      >
        <div style={{ display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>
          
          {/* Left Side Elements Column */}
          <div style={{ flex: "1 1 450px" }}>
            <div className="blog-reveal-item delay-1">
              <span style={{
                display: "inline-block",
                backgroundColor: "#D0F24C",
                color: "#065532",
                padding: "4px 14px",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "20px",
              }}>
                {blog.category}
              </span>
            </div>
            
            <div className="blog-reveal-item delay-2">
              <h1 style={{
                fontSize: "2.8rem",
                fontWeight: 500,
                color: "#111",
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}>
                {blog.title}
              </h1>
            </div>

            <div className="blog-reveal-item delay-3">
              <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.7, margin: 0 }}>
                {blog.description}
              </p>
            </div>
          </div>

          {/* Right Side Image Element */}
          <div className="blog-reveal-item delay-2" style={{ flex: "1 1 400px" }}>
            <img
              src={blog.img}
              alt={blog.title}
              style={{
                width: "100%",
                height: "340px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)"
              }}
            />
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <hr style={{ borderColor: "#e5e7eb", margin: "10px 0 50px" }} />
      </div>

      {/* ── 2. ARTICLE BODY ── */}
      <div 
        ref={bodyRef}
        className={`blog-reveal-parent ${bodyVisible ? "blog-active" : ""}`}
        style={{ maxWidth: "780px", margin: "0 auto", padding: "0 10px 10px" }}
      >
        <div className="blog-reveal-item delay-1">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111", marginBottom: "20px", lineHeight: 1.3 }}>
            {content.heroTitle}
          </h2>
        </div>

        <div className="blog-reveal-item delay-2">
          {content.heroIntro.map((para, i) => (
            <p key={i} style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8, marginBottom: "16px" }}>
              {para}
            </p>
          ))}
        </div>

        {/* Dynamic section loops mapped with sequential cascade animation profiles */}
        {content.sections.map((section, i) => (
          <div key={i} className="blog-reveal-item delay-3" style={{ marginTop: "40px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
              {section.heading}
            </h3>
            {section.paragraphs.map((para, j) => (
              <p key={j} style={{ fontSize: "0.92rem", color: "#444", lineHeight: 1.8, marginBottom: "12px" }}>
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul style={{ paddingLeft: "20px", margin: "8px 0 12px" }}>
                {section.bullets.map((b, k) => (
                  <li key={k} style={{ fontSize: "0.92rem", color: "#444", lineHeight: 1.9 }}>{b}</li>
                ))}
              </ul>
            )}
            {section.afterBullets && (
              <p style={{ fontSize: "0.92rem", color: "#444", lineHeight: 1.8, margin: 0 }}>
                {section.afterBullets}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ── 3. RELATED POSTS GRID ── */}
      <div 
        ref={relatedRef}
        className={`blog-reveal-parent ${relatedVisible ? "blog-active" : ""}`}
        style={{ backgroundColor: "#f9f9f7", padding: "75px 0" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>

          {/* Related Header Meta Layout */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", gap: "20px", flexWrap: "wrap" }}>
            <div className="blog-reveal-item delay-1">
              <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#111", margin: 0 }}>
                Related posts
              </h2>
            </div>
            
            <div className="blog-reveal-item delay-2">
              <button
                onClick={() => navigate("/blog")}
                style={{
                  backgroundColor: "#1a3b2f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "30px",
                  padding: "10px 22px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#6fcf4a", display: "inline-block" }} />
                Discover our blog
              </button>
            </div>
          </div>

          {/* Cards Column Matrix Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {relatedPosts.map((post, idx) => (
              <div
                key={post.id}
                className="blog-reveal-item"
                onClick={() => navigate(`/blog/${post.id}`)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid #e8e8e8",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${idx * 120}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Header Asset Thumbnail Img Box */}
                <div style={{ position: "relative" }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    style={{ width: "100%", height: "205px", objectFit: "cover", display: "block" }}
                  />
                  <span style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    padding: "4px 11px",
                    borderRadius: "12px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    backdropFilter: "blur(4px)",
                  }}>
                    {post.category}
                  </span>
                </div>

                {/* Sub Card Meta Label Details Layout */}
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111", margin: 0, lineHeight: 1.35, flex: 1, paddingRight: "10px" }}>
                      {post.title}
                    </h4>
                    <span style={{ fontSize: "1.2rem", color: "#aaa", flexShrink: 0, lineHeight: 1 }}>+</span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6, margin: 0 }}>
                    {post.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── EMBEDDED SCROLL STYLE ANIMATION ENGINE ── */}
      <style>{`
        /* Initialize element transformation values */
        .blog-reveal-parent .blog-reveal-item {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Trigger visible state values on intersection entry matches */
        .blog-reveal-parent.blog-active .blog-reveal-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* Incremental staggered layout delay modifiers */
        .delay-1 { transition-delay: 80ms !important; }
        .delay-2 { transition-delay: 200ms !important; }
        .delay-3 { transition-delay: 320ms !important; }
      `}</style>

    </div>
  );
};

export default BlogViewDetail;