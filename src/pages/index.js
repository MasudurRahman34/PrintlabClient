import Image from "next/image";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/Layout/ClientLayout";
import HeroSlider from "@/components/pages/Home/HeroSlider";
import Achievement from "@/components/pages/Home/Achievement";
import bestsell from "@/components/pages/Home/bestsell";
import business from "@/components/pages/Home/business";
import packs_banner from "@/components/pages/Home/packs_banner";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ClientLayout>
      <HeroSlider />
      <Achievement />
      <bestsell/>
      <business/>
      <packs_banner/>
    </ClientLayout>
  );
}
