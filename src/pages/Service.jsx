import React from "react";
import ServiceHero from "../components/ServiceHero";
import ServiceWork from "../components/ServiceWork";
import ServiceTechnology from "../components/ServiceTechnology";
import ChooseUs from "../components/ChooseUs";
import ServicesSection from "../components/ServicesSection";
import Cta from "../components/Cta";
import Client from "../components/Client";

const Service = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceWork />
      <ServiceTechnology />
      <ChooseUs />
      <ServicesSection />
      <Cta />
      <Client />
    </div>
  );
};

export default Service;
