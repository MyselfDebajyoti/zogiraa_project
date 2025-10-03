"use client";
import TopBanner from "./TopBanner";
import LinksSection from "./LinksSection";
import BottomSection from "./BottomSection";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <TopBanner />
      <LinksSection />
      <BottomSection />
      <SocialMedia />
    </footer>
  );
}
