import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductsBg from "../assets/product.jpg";
import HeroImage from "../assets/productimage.png";

import FreshFruits from "../assets/fresh-fruits.png";
import FreshVegetables from "../assets/fresh-vegetables.png";
import HerbalMedicinal from "../assets/herbal-medicinal.png";
import MushroomsFarming from "../assets/mushrooms-farming.png";
import NurseryPlants from "../assets/nursery-plants.png";
import ProcessedProducts from "../assets/processed-products.png";

import KesarMango from "../assets/kesar-mango.png";
import Tomato from "../assets/Tomatoes.png";
import RamaTulsi from "../assets/Tulsi.png";
import Mushroom from "../assets/Oyster-Mushrooms.png";

import QualityImg from "../assets/quality-stage.png";
import productIcon from "../assets/productIcon.svg";

import CultivationIcon from "../assets/Icon (5).svg";
import HarvestingIcon from "../assets/Icon (4).svg";
import ProcessingIcon from "../assets/Icon (3).svg";
import PackagingIcon from "../assets/Icon (2).svg";
import DistributionIcon from "../assets/Icon (1).svg";

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories = [
  { title: "Fresh Fruits",       img: FreshFruits },
  { title: "Fresh Vegetables",   img: FreshVegetables },
  { title: "Herbal & Medicinal", img: HerbalMedicinal },
  { title: "Mushrooms Farming",  img: MushroomsFarming },
  { title: "Nursery Plants",     img: NurseryPlants },
  { title: "Processed Products", img: ProcessedProducts },
];

const featuredItems = [
  { title: "Kesar Mango", category: "FRUIT CATEGORY",    description: "Sourced from premium groves, maintaining perfect brix levels.", img: KesarMango },
  { title: "Tomato",      category: "VEGETABLE CATEGORY", description: "Hydroponically balanced for rich color and firm texture.",        img: Tomato },
  { title: "Rama Tulsi",  category: "HERBAL CATEGORY",   description: "Medicinal grade leaves processed under sterile conditions.",       img: RamaTulsi },
  { title: "Mushroom",    category: "MYCOLOGY CATEGORY", description: "Climate-controlled indoor farming for year-round consistency.",    img: Mushroom },
];

const steps = [
  { title: "Cultivation",  icon: CultivationIcon },
  { title: "Harvesting",   icon: HarvestingIcon },
  { title: "Processing",   icon: ProcessingIcon },
  { title: "Packaging",    icon: PackagingIcon },
  { title: "Distribution", icon: DistributionIcon },
];

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal(threshold = 0.05) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    document.title = "Agricultural Products | Fresh Fruits, Vegetables & Farming Solutions | VanShakti";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Explore VanShakti's premium agricultural products including fresh fruits, vegetables, medicinal plants, mushrooms, nursery plants, and processed agricultural products cultivated with quality and sustainability.");
    document.querySelector('meta[name="keywords"]')?.setAttribute("content", "agricultural products, fresh fruits, fresh vegetables, medicinal plants, mushroom farming, nursery plants, organic produce, farming products, agriculture solutions, farm products India, sustainable agriculture, VanShakti products");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Agricultural Products | VanShakti");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Discover premium agricultural products, fresh produce, medicinal plants, mushroom farming, and sustainable cultivation solutions from VanShakti.");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [threshold]);

  return [elementRef, isIntersecting];
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Products() {
  const navigate = useNavigate();

  const [heroRef,    heroVisible]    = useScrollReveal(0.02);
  const [catRef,     catVisible]     = useScrollReveal(0.05);
  const [featRef,    featVisible]    = useScrollReveal(0.05);
  const [qualityRef, qualityVisible] = useScrollReveal(0.05);
  const [ctaRef,     ctaVisible]     = useScrollReveal(0.05);

  return (
    <div className="prod-root">

      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        /* ── Base ── */
        .prod-root {
          font-family: 'DM Sans', sans-serif;
          background-color: #fff;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        /* ────────────────────────────────────
           1. HERO
        ──────────────────────────────────── */
        .prod-hero {
          position: relative;
          background-size: cover;
          background-position: center;
          min-height: 650px;
          display: flex;
          align-items: center;
          padding: 80px clamp(24px, 7vw, 120px);
          overflow: hidden;
        }
        .prod-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0.82) 0%,
            rgba(255,255,255,0.55) 55%,
            rgba(255,255,255,0.08) 100%
          );
          z-index: 1;
        }
        .prod-hero__content {
          position: relative;
          z-index: 2;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .prod-hero__badge {
          display: inline-block;
          color: #3B3939;
          padding: 7px 16px;
          border-radius: 20px;
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          border: 1px solid #3B3939;
          width: fit-content;
        }
        .prod-hero__title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 400;
          color: #3B3939;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .prod-hero__sub {
          font-size: clamp(0.95rem, 1.8vw, 1.2rem);
          color: #3B3939;
          line-height: 1.65;
          font-weight: 400;
          margin: 0;
          max-width: 500px;
        }

        /* ────────────────────────────────────
           2. CULTIVATION CATEGORIES
        ──────────────────────────────────── */
        .prod-cat {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 100px) clamp(20px, 4vw, 40px);
        }
        .prod-cat__header {
          display: flex;
          align-items: flex-start;
          gap: clamp(24px, 4vw, 60px);
          margin-bottom: clamp(28px, 4vw, 48px);
        }
        .prod-cat__header-left { flex: 0 0 auto; }
        .prod-cat__heading {
          font-size: clamp(1.6rem, 3.2vw, 2.5rem);
          font-weight: 400;
          color: #065532;
          margin: 0;
          line-height: 1.2;
        }
        .prod-cat__header-right { flex: 1; min-width: 0; }
        .prod-cat__sub {
          font-size: clamp(0.9rem, 1.6vw, 1.15rem);
          color: #576157;
          line-height: 1.65;
          margin: 0;
          border-left: 1px solid #576157;
          padding-left: clamp(20px, 4vw, 60px);
        }

        /* 3-col grid — each card portrait ratio */
        .prod-cat__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(12px, 2vw, 22px);
        }
        .prod-cat-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.07);
        }
        .prod-cat-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .prod-zoom-card:hover .prod-cat-card__img { transform: scale(1.06); }
        .prod-cat-card__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.72) 100%);
          z-index: 1;
        }
        .prod-cat-card__label {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: clamp(14px, 2.5vw, 24px);
          color: #fff;
          font-weight: 500;
          font-size: clamp(1rem, 2.2vw, 1.9rem);
          z-index: 2;
          line-height: 1.25;
        }

        /* ────────────────────────────────────
           3. FEATURED SELECTIONS
        ──────────────────────────────────── */
        .prod-feat {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5px 20px ;
        }
        .prod-feat__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: clamp(24px, 4vw, 48px);
          flex-wrap: wrap;
          gap: 16px;
        }
        .prod-feat__heading {
          font-size: clamp(1.6rem, 3.2vw, 2.6rem);
          font-weight: 400;
          color: #006B33;
          margin: 0 0 6px;
          line-height: 1.2;
        }
        .prod-feat__sub {
          color: #576157;
          font-size: clamp(0.875rem, 1.6vw, 1.1rem);
          margin: 0;
        }
        .prod-feat__nav { display: flex; gap: 8px; }
        .prod-feat__nav-btn {
          width: 52px;
          height: 46px;
          border-radius: 9999px;
          border: 1px solid #BDCABC;
          background: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .prod-feat__nav-btn:hover {
          background: #f5f5f5;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* 4-col grid on desktop */
        .prod-feat__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(12px, 2vw, 22px);
        }
        .prod-feat-card {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .prod-feat-card__img-wrap {
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
        }
        .prod-feat-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .prod-feat-card__body {
          padding: clamp(14px, 2.5vw, 22px);
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          gap: 6px;
        }
        .prod-feat-card__title {
          font-weight: 400;
          font-size: clamp(1rem, 1.8vw, 1.4rem);
          color: #1A1C19;
          text-align: center;
          margin: 0;
          line-height: 1.3;
        }
        .prod-feat-card__cat {
          font-size: clamp(0.7rem, 1.1vw, 0.85rem);
          font-weight: 600;
          color: #006B33;
          letter-spacing: 0.03em;
          margin: 0;
          text-align: center;
        }
        .prod-feat-card__desc {
          font-size: clamp(0.8rem, 1.2vw, 0.95rem);
          color: #3E4A3F;
          text-align: center;
          line-height: 1.6;
          margin: 0;
        }
        .prod-hover-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.10) !important;
          border-color: #2c7a4b !important;
        }
        .prod-hover-card:hover .card-zoom-img { transform: scale(1.04); }

        /* ────────────────────────────────────
           4. QUALITY INFRASTRUCTURE
        ──────────────────────────────────── */
        .prod-quality {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 90px) clamp(20px, 4vw, 40px);
        }
        .prod-quality__inner {
          display: flex;
          align-items: center;
          gap: clamp(32px, 5vw, 72px);
          margin-bottom: clamp(40px, 5vw, 64px);
        }
        .prod-quality__text {
          flex: 1;
          min-width: 0;
        }
        .prod-quality__heading {
          font-size: clamp(1.6rem, 3.5vw, 3rem);
          font-weight: 400;
          color: #065532;
          margin: 0 0 18px;
          line-height: 1.2;
        }
        .prod-quality__body {
          font-size: clamp(0.9rem, 1.6vw, 1.15rem);
          color: #3B3939;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .prod-quality__features { display: flex; flex-direction: column; gap: 22px; }
        .prod-quality__feature {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .prod-quality__feat-icon {
          background: #D0F44D;
          padding: 10px;
          border-radius: 18px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
        }
        .prod-quality__feat-icon img { width: 22px; height: 22px; }
        .prod-quality__feat-title {
          font-weight: 500;
          color: #191C1A;
          margin: 0 0 4px;
          font-size: clamp(0.95rem, 1.7vw, 1.25rem);
          line-height: 1.3;
        }
        .prod-quality__feat-desc {
          color: #4a4a4a;
          font-size: clamp(0.83rem, 1.3vw, 1rem);
          margin: 0;
          line-height: 1.6;
        }
        .prod-quality__img-wrap {
          flex: 1;
          min-width: 0;
          flex-shrink: 0;
        }
        .prod-quality__img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.10);
          display: block;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .image-tilt-effect:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.13) !important;
        }

        /* Pipeline */
        .prod-pipeline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: clamp(24px, 3vw, 40px);
          flex-wrap: nowrap;
          gap: 0;
        }
        .prod-pipeline__step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          z-index: 2;
        }
        .prod-pipeline__icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #DBE5D9;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(44,122,75,0.08);
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .prod-pipeline__icon img { width: 30px; height: 30px; }
        .pipeline-step-node:hover .prod-pipeline__icon {
          transform: scale(1.14);
          background-color: #2c7a4b;
        }
        .pipeline-step-node:hover .prod-pipeline__icon img {
          filter: brightness(0) invert(1);
        }
        .prod-pipeline__label {
          font-size: clamp(0.65rem, 1vw, 0.75rem);
          font-weight: 600;
          color: #065532;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .prod-pipeline__line {
          flex: 1;
          height: 2px;
          background: linear-gradient(to right, #DBE5D9, rgba(219,229,217,0.3));
          min-width: 16px;
          z-index: 1;
          margin-bottom: 30px;
        }

        /* ────────────────────────────────────
           5. CTA
        ──────────────────────────────────── */
        .prod-cta-wrap {
          max-width: 1240px;
          margin: clamp(40px, 6vw, 80px) auto clamp(40px, 5vw, 60px);
          padding: 0 clamp(16px, 4vw, 40px);
        }
        .prod-cta {
          position: relative;
          background-size: cover;
          background-position: center;
          border-radius: 16px;
          padding: clamp(52px, 8vw, 120px) clamp(28px, 6vw, 80px);
          color: #fff;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }
        .prod-cta__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.22);
          z-index: 1;
        }
        .prod-cta__content {
          position: relative;
          z-index: 2;
          max-width: 620px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .prod-cta__heading {
          font-size: clamp(1.6rem, 4vw, 3.2rem);
          font-weight: 400;
          line-height: 1.22;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .prod-cta__sub {
          font-size: clamp(0.9rem, 1.6vw, 1.15rem);
          line-height: 1.65;
          opacity: 0.92;
          margin: 0;
        }
        .prod-cta__btn {
          background: #ffffff;
          color: #006B33;
          border: none;
          padding: 13px 32px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(28,90,62,0.28);
          transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
          width: fit-content;
        }
        .btn-premium-cta:hover {
          background-color: #e8f5ee !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(28,90,62,0.38) !important;
        }

        /* ── ANIMATIONS ── */
        .prod-reveal-parent .prod-reveal-item {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .prod-reveal-parent.prod-active .prod-reveal-item {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 60ms !important; }
        .delay-2 { transition-delay: 180ms !important; }
        .delay-3 { transition-delay: 300ms !important; }

        /* ────────────────────────────────────
           RESPONSIVE — TABLET (≤ 1024px)
        ──────────────────────────────────── */
        @media (max-width: 1024px) {
          .prod-hero { min-height: 560px; }
          .prod-feat__grid { grid-template-columns: repeat(2, 1fr); }
          .prod-quality__inner { gap: 36px; }
          .prod-cat__grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ────────────────────────────────────
           RESPONSIVE — TABLET/MOBILE (≤ 768px)
        ──────────────────────────────────── */
        @media (max-width: 768px) {
          /* Hero */
          .prod-hero {
            min-height: 500px;
            padding: 56px 20px 52px;
            align-items: flex-end;
          }
          .prod-hero__overlay {
            background: linear-gradient(
              to top,
              rgba(255,255,255,0.88) 0%,
              rgba(255,255,255,0.60) 55%,
              rgba(255,255,255,0.10) 100%
            );
          }

          /* Categories */
          .prod-cat { padding: 44px 20px; }
          .prod-cat__header {
            flex-direction: column;
            gap: 16px;
          }
          .prod-cat__sub {
            border-left: none;
            padding-left: 0;
            border-top: 2px solid #065532;
            padding-top: 14px;
          }
          /* 2-col on tablet */
          .prod-cat__grid { grid-template-columns: repeat(2, 1fr); }
          .prod-cat-card { aspect-ratio: 3 / 4; }

          /* Featured */
          .prod-feat { padding: 20px 20px 44px; }
          .prod-feat__grid { grid-template-columns: repeat(2, 1fr); }

          /* Quality */
          .prod-quality { padding: 44px 20px; }
          .prod-quality__inner {
            flex-direction: column;
            gap: 28px;
          }
          .prod-quality__text,
          .prod-quality__img-wrap {
            width: 100%;
            flex: none;
          }
          .prod-quality__img { aspect-ratio: 16 / 9; border-radius: 14px; }

          /* Pipeline — hide connector lines, wrap steps */
          .prod-pipeline {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px 28px;
          }
          .prod-pipeline__line { display: none; }
          .prod-pipeline__step { min-width: 80px; }

          /* CTA */
          .prod-cta-wrap { padding: 0 16px; }
          .prod-cta { padding: 60px 28px; }
        }

        /* ────────────────────────────────────
           RESPONSIVE — MOBILE (≤ 480px)
        ──────────────────────────────────── */
        @media (max-width: 480px) {
          /* Hero */
          .prod-hero {
            min-height: 440px;
            padding: 48px 16px 44px;
          }

          /* Categories — single column stacked like mobile screenshot */
          .prod-cat { padding: 36px 16px; }
          .prod-cat__grid { grid-template-columns: 1fr; }
          .prod-cat-card { aspect-ratio: 16 / 9; }
          .prod-cat-card__label { font-size: 1.1rem; }

          /* Featured — single column on very small screens */
          .prod-feat { padding: 16px 16px 36px; }
          .prod-feat__grid { grid-template-columns: 1fr; }
          .prod-feat-card__img-wrap { aspect-ratio: 16 / 9; }

          /* Quality */
          .prod-quality { padding: 36px 16px; }
          .prod-quality__img { aspect-ratio: 4 / 3; border-radius: 12px; }

          /* Pipeline */
          .prod-pipeline {
            gap: 16px 20px;
          }
          .prod-pipeline__icon { width: 52px; height: 52px; }
          .prod-pipeline__icon img { width: 24px; height: 24px; }
          .prod-pipeline__step { min-width: 68px; }

          /* CTA */
          .prod-cta { padding: 48px 20px; border-radius: 12px; }
        }

        /* ────────────────────────────────────
           RESPONSIVE — VERY SMALL (≤ 360px)
        ──────────────────────────────────── */
        @media (max-width: 360px) {
          .prod-hero { min-height: 380px; padding: 36px 14px; }
          .prod-cat,
          .prod-feat,
          .prod-quality { padding-left: 14px; padding-right: 14px; }
          .prod-cta-wrap { padding: 0 10px; }
          .prod-cta { padding: 40px 18px; }
        }
      `}</style>

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className={`prod-hero prod-reveal-parent ${heroVisible ? "prod-active" : ""}`}
        style={{ backgroundImage: `url(${ProductsBg})` }}
      >
        <div className="prod-hero__overlay" />
        <div className="prod-hero__content">
          <span className="prod-hero__badge prod-reveal-item delay-1">Our Products</span>
          <h1 className="prod-hero__title prod-reveal-item delay-2">
            Fresh Produce and<br />Specialized Agriculture
          </h1>
          <p className="prod-hero__sub prod-reveal-item delay-3">
            VanShakti supports a diverse agricultural ecosystem including fruits, vegetables,
            medicinal plants, mushroom farming, nursery development, and value-added agricultural products.
          </p>
        </div>
      </section>

      {/* ── 2. CULTIVATION CATEGORIES ─────────────────────────────────────── */}
      <section
        ref={catRef}
        className={`prod-cat prod-reveal-parent ${catVisible ? "prod-active" : ""}`}
      >
        <div className="prod-cat__header">
          <div className="prod-cat__header-left prod-reveal-item delay-1">
            <h2 className="prod-cat__heading">Cultivation Categories</h2>
          </div>
          <div className="prod-cat__header-right prod-reveal-item delay-2">
            <p className="prod-cat__sub">
              Intelligent cultivation across six specialized verticals, maintaining optimized,
              strict parameters to maximize pure quality output and consistency.
            </p>
          </div>
        </div>
        <div className="prod-cat__grid">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="prod-cat-card prod-reveal-item prod-zoom-card"
              style={{ transitionDelay: `${idx * 100 + 150}ms` }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="prod-cat-card__img"
              />
              <div className="prod-cat-card__gradient" />
              <div className="prod-cat-card__label">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. FEATURED SELECTIONS ────────────────────────────────────────── */}
      <section
        ref={featRef}
        className={`prod-feat prod-reveal-parent ${featVisible ? "prod-active" : ""}`}
      >
        <div className="prod-feat__header">
          <div className="prod-reveal-item delay-1">
            <h2 className="prod-feat__heading">Featured Selections</h2>
            <p className="prod-feat__sub">The absolute pinnacle of our production and seasonal output</p>
          </div>
          <div className="prod-feat__nav prod-reveal-item delay-2">
            <button className="prod-feat__nav-btn">&#8592;</button>
            <button className="prod-feat__nav-btn">&#8594;</button>
          </div>
        </div>
        <div className="prod-feat__grid">
          {featuredItems.map((item, idx) => (
            <div
              key={idx}
              className="prod-feat-card prod-reveal-item prod-hover-card"
              style={{ transitionDelay: `${idx * 100 + 150}ms` }}
            >
              <div className="prod-feat-card__img-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="prod-feat-card__img card-zoom-img"
                />
              </div>
              <div className="prod-feat-card__body">
                <h5 className="prod-feat-card__title">{item.title}</h5>
                <p className="prod-feat-card__cat">{item.category}</p>
                <p className="prod-feat-card__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. QUALITY INFRASTRUCTURE ─────────────────────────────────────── */}
      <section
        ref={qualityRef}
        className={`prod-quality prod-reveal-parent ${qualityVisible ? "prod-active" : ""}`}
      >
        <div className="prod-quality__inner">
          {/* Text */}
          <div className="prod-quality__text prod-reveal-item delay-1">
            <h2 className="prod-quality__heading">
              Quality Maintained<br />Across Every Single Stage
            </h2>
            <p className="prod-quality__body">
              Structured sourcing, precision batch handling, and strict operation control practices
              safeguard optimal freshness, premium product consistency, and distribution chain reliability.
            </p>
            <div className="prod-quality__features">
              {[
                {
                  title: "Temperature Control Logistics",
                  desc: "Unbroken end-to-end cold-chain logistics preservation from immediate field harvest lines to target deliveries.",
                },
                {
                  title: "Scientific Lab Diagnostics",
                  desc: "Continuous analytical soil nutrient mapping profiles and crop diagnostic testing runs inside certified laboratories.",
                },
              ].map((feat, idx) => (
                <div key={idx} className="prod-quality__feature">
                  <div className="prod-quality__feat-icon">
                    <img src={productIcon} alt="icon" />
                  </div>
                  <div>
                    <h6 className="prod-quality__feat-title">{feat.title}</h6>
                    <p className="prod-quality__feat-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="prod-quality__img-wrap prod-reveal-item delay-2">
            <img
              src={QualityImg}
              alt="Quality Infrastructure"
              className="prod-quality__img image-tilt-effect"
            />
          </div>
        </div>

        {/* Pipeline Steps */}
        <div className="prod-pipeline prod-reveal-item delay-3">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="prod-pipeline__step pipeline-step-node">
                <div className="prod-pipeline__icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <span className="prod-pipeline__label">{step.title}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="prod-pipeline__line" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── 5. CTA SECTION ────────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className={`prod-cta-wrap prod-reveal-parent ${ctaVisible ? "prod-active" : ""}`}
      >
        <div
          className="prod-cta"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="prod-cta__overlay" />
          <div className="prod-cta__content">
            <h2 className="prod-cta__heading prod-reveal-item delay-1">
              Looking for Highly Reliable Agricultural Products?
            </h2>
            <p className="prod-cta__sub prod-reveal-item delay-2">
              Connect directly with our operations team to explore commercial partnership
              opportunities, supply infrastructure setups, and volume export channels.
            </p>
            <div className="prod-reveal-item delay-3">
              <button
                className="prod-cta__btn btn-premium-cta"
                onClick={() => navigate("/contact")}
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}