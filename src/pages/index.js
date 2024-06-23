import { Inter } from "next/font/google";
import ClientLayout from "@/components/Layout/ClientLayout";
import Achievement from "@/components/pages/Home/Achievement";
import Bestsell from "@/components/pages/Home/bestsell";
import Business from "@/components/pages/Home/business";
import Packs_banner from "@/components/pages/Home/packs_banner";

import Tradeprint from "@/components/pages/Home/tradeprints";
import HeroSliderComponent from "@/components/pages/Home/HeroSlider";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { isAuthenticated, user, token } = useAuth();
  console.log(isAuthenticated, user, token);
  return (
    <ClientLayout>
      <HeroSliderComponent />
      <Achievement />
      <Bestsell />
      <Tradeprint />
      <Business />
      <Packs_banner />
    </ClientLayout>
  );
}
