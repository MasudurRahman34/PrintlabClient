import ClientLayout from "@/components/Layout/ClientLayout";
import Achievement from "@/components/pages/Home/Achievement";
import Bestsell from "@/components/pages/Home/bestsell";

import HeroSliderComponent from "@/components/pages/Home/HeroSlider";
import MetaData from "@/components/ui/MetaData";
import TopCategories from "@/components/pages/TopCategories";

export default function Home() {
  return (
    <ClientLayout>
      <MetaData title="Home" />
      <HeroSliderComponent />
      <Achievement />
      <Bestsell />
      <TopCategories />
      {/* <Tradeprint /> */}
      {/*  <Business /> */}
      {/*  <Packs_banner /> */}
    </ClientLayout>
  );
}
