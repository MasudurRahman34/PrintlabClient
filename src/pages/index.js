import Image from "next/image";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/Layout/ClientLayout";
import Achievement from "@/components/pages/Home/Achievement";
import Bestsell from "@/components/pages/Home/bestsell";
import Business from "@/components/pages/Home/business";
import Packs_banner from "@/components/pages/Home/packs_banner";
import Design from "@/components/pages/Home/designeBannar";
import Tradeprint from "@/components/pages/Home/tradeprints";
import HeroSliderComponent from "@/components/pages/Home/HeroSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ClientLayout>
      <HeroSliderComponent />
      <Achievement />
      <Bestsell />
      <Tradeprint />
      <Design />
      <Business />
      <Packs_banner />
    </ClientLayout>
  );
}
