import AboutUsPage from "@/components/pages/AboutUsPage";
import Footer from "@/components/pages/Footer";
import Gallery from "@/components/pages/GalleryPage";
import HeroPage from "@/components/pages/HeroPage";
import Pricing from "@/components/pages/Pricing";
import ServiceHighlightsPage from "@/components/pages/ServiceHighlightsPage";
import ServicesPage from "@/components/pages/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "This is an example landing page",
};

export default function Home() {
  return (
    <div className="bg-primary">
      <HeroPage />
      <ServicesPage />
      <AboutUsPage />
      <ServiceHighlightsPage />
      <Gallery />
      <Pricing />
      <Footer />
    </div>
  );
}
