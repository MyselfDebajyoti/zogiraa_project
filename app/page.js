import Yellow_NavigationBar from "./components/Yellow_NavigationBar";
import Herosection from "./components/Herosection";
import { BrowseByCategorySection } from "./components/BrowseByCategorySection";
import { WhatAreLookingSection } from "./components/WhatAreLookingSection";
import { TodayHotDeals } from "./components/TodayHotDeals";
import { BuyGoods } from "./components/BuyGoods";
import { ServiceCenter } from "./components/ServiceCenter";
export default function Home() {
  return (
    <>
    <div>
      <Yellow_NavigationBar />
      <Herosection />
      <BrowseByCategorySection />
      <WhatAreLookingSection />
      <TodayHotDeals />
      <BuyGoods />
      <ServiceCenter />
      
    </div>
    </>
  );
}
