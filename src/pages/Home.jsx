import React from "react";
import ServicesSection from "../components/ServicesSection";
import BuildSection from "../components/BuildSection";
import DifferenceSection from "../components/DifferenceSection";
import Product from "../components/Product";
import ChooseUs from "../components/ChooseUs";
import HeroSection from "../components/HeroSection";
import Client from "../components/Client";
import BlogsSection from "../components/BlogSection";
import Cta from "../components/Cta";
import Faqs from "../components/Faqs";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BuildSection />
      <ServicesSection />
      <DifferenceSection />
      <Product />
      <ChooseUs />
      <Client />
      <Cta />
      <BlogsSection />
      <Faqs />
      {/* <Footer /> */}
    </div>
  );
}
