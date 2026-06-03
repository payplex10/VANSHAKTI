import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";

import "./styles/loader.css";

import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import PageSkeleton from "./components/PageSkeleton";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const FoodSafety = lazy(() => import("./pages/FoodSafety"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogViewDetail = lazy(() => import("./pages/id/BlogViewDetai"));
const OurNetwork = lazy(() => import("./pages/OurNetwork"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const footerCtaMap = {
  "/": {
    ctaTag: "Join us",
    ctaTitle: "Connecting Farms,\nProducts, and Markets",
    ctaButtonText: "Partner with us",
    ctaButtonPath: "/contact",
  },
  "/about": {
    ctaTag: "Join us",
    ctaTitle: "Connecting Farms,\nProducts, and Markets",
    ctaButtonText: "Partner with us",
    ctaButtonPath: "/contact",
  },
  "/products": {
    ctaTag: "Join us",
    ctaTitle: "Connecting Farms,\nProducts, and Markets",
    ctaButtonText: "Partner with us",
    ctaButtonPath: "/contact",
  },
  "/food-safety": {
    ctaTag: "Join us",
    ctaTitle: "Connecting Farms,\nProducts, and Markets",
    ctaButtonText: "Partner with us",
    ctaButtonPath: "/contact",
  },
  "/sustainability": {
    ctaTag: "Join us",
    ctaTitle: "Connecting Farms,\nProducts, and Markets",
    ctaButtonText: "Partner with us",
    ctaButtonPath: "/contact",
  },
  "/contact": {
    ctaTag: "Join us",
    ctaTitle: "Connecting Farms,\nProducts, and Markets",
    ctaButtonText: "Partner with us",
    ctaButtonPath: "/contact",
  },
};

function Layout() {
  const { pathname } = useLocation();

  const ctaProps = footerCtaMap[pathname] ?? footerCtaMap["/"];

  const hideFooter =
    pathname.startsWith("/blog") ||
    pathname === "/ournetwork";

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/food-safety" element={<FoodSafety />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogViewDetail />} />
            <Route path="/ournetwork" element={<OurNetwork />} />
          </Routes>
        </Suspense>
      </motion.div>

      {!hideFooter && <FooterSection {...ctaProps} />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;