import Yellow_NavigationBar from "./components/Yellow_NavigationBar";
import Herosection from "./components/Herosection";
import { BrowseByCategorySection } from "./components/BrowseByCategorySection";
import { WhatAreLookingSection } from "./components/WhatAreLookingSection";
import { TodayHotDeals } from "./components/TodayHotDeals";
import { BuyGoods } from "./components/BuyGoods";
import { PopularServices } from "./components/PopularServices";
import Testimonial from "./components/Testimonial";
import TestimonialsandSucess from "./components/TestimonialsandSucess";
import { FindHireSection } from "./components/FindHireSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { WhyEmployersTrustSection } from "./components/WhyEmployersTrustSection";
import Footer from "./components/Footer/Footer";
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
      <PopularServices />
      <Testimonial />
      <TestimonialsandSucess />
      <FindHireSection />
      <WhyChooseUsSection />
      <WhyEmployersTrustSection />
      <Footer />
    </div>
    </>
  );
}
