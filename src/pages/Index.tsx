import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metodologia from "@/components/Metodologia";
import SobreRuben from "@/components/SobreRuben";
import Servicios from "@/components/Servicios";
import BrandsCarousel from "@/components/BrandsCarousel";
import Testimonios from "@/components/Testimonios";
import Recursos from "@/components/Recursos";
import Faqs from "@/components/Faqs";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Metodologia />
        <SobreRuben />
        <Servicios onSelectService={setSelectedService} />
        <BrandsCarousel />
        <Testimonios />
        <Recursos />
        <Faqs />
        <Contacto selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
