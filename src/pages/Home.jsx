import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import SystemSection from "../components/SystemSection";
import StatsSection from "../components/StatsSection";
import CommunitySection from "../components/CommunitySection";
import QualitySection from "../components/QualitySection";
import CertificationSection  from "../components/CertificationSection";
import CorePart from "../components/CorePart";

function Home() {
    useEffect(() => {
    // Page Title
    document.title =
      "VanShakti | Empowering Farmers Through Sustainable Agriculture";

    // Meta Description
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "VanShakti empowers farmers through sustainable agriculture, food safety, agricultural products, farmer networks, and innovative farming solutions across India."
      );

    // Meta Keywords
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "VanShakti, farmers, agriculture India, sustainable farming, food safety, farmer network, agricultural products, farming solutions, agri business, organic farming"
      );
  }, []);

  return (
    <>
      
      <HeroSection />

        

      <SystemSection />

      <CorePart/>

      <StatsSection />

      <CommunitySection />

      <CertificationSection />

      <QualitySection />

    </>
  );
}

export default Home;