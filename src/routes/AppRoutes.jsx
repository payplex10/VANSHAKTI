import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import FoodSafety from "../pages/FoodSafety";
import Sustainability from "../pages/Sustainability";
import Contact from "../pages/Contact"; // <-- Import Contact page
import BlogDetailPage from "../pages/BlogViewDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/food-safety" element={<FoodSafety />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/contact" element={<Contact />} /> 
       <Route path="/blog" element={<Blog />} /> 
        <Route path="/blogdetail" element={<BlogViewDetail />} /> 
         <Route path="/ournetwork" element={<OurNetwork />} /> 
    </Routes>
  );
}

export default AppRoutes;