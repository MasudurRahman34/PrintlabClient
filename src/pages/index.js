import Image from "next/image";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/Layout/ClientLayout";
import HeroSlider from "@/components/pages/Home/HeroSlider";
import Achievement from "@/components/pages/Home/Achievement";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ClientLayout>
      <HeroSlider />
      <Achievement />
    </ClientLayout>
  );
}
