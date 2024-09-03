import ClientLayout from "@/components/Layout/ClientLayout";
import AboutSection from "@/components/pages/AboutUs/AboutSection";
import ServicesSection from "@/components/pages/AboutUs/ServicesSection";
import TeamSection from "@/components/pages/AboutUs/TeamSection";
import React from "react";

const page = () => {
  return (
    <ClientLayout>
      <div>
        <AboutSection />
        <ServicesSection />
        <TeamSection />
      </div>
    </ClientLayout>
  );
};

export default page;
